/**
 * USG School - Connection Bridge (WebRTC / PeerJS + BroadcastChannel Fallback)
 * Communication between the phone probe and station display.
 */

class UsgConnection {
  constructor(role = 'station', onStateChange = null, onData = null) {
    this.role = role; // 'station' | 'probe'
    this.onStateChange = onStateChange;
    this.onData = onData;
    this.peer = null;
    this.conn = null;
    this.roomId = null;
    this.isConnected = false;
    this.broadcastChannel = null;
    this.localActive = false;
  }

  initLocalChannel() {
    if (this.broadcastChannel) this.broadcastChannel.close();
    this.localActive = false;
    try {
      this.broadcastChannel = new BroadcastChannel(`usg_school_sync_${this.roomId}`);
      this.broadcastChannel.onmessage = (event) => {
        if (event.data && this.onData) {
          if (!this.isConnected && !this.localActive) {
            this.localActive = true;
            if (this.onStateChange) this.onStateChange('local-data', this.roomId);
          }
          this.onData(event.data);
        }
      };
    } catch (e) {
      console.warn('BroadcastChannel not supported', e);
    }
  }

  // Initialize Station (creates room & waits for probe)
  initStation(customRoomId = null) {
    this.roomId = customRoomId || 'usg-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    this.initLocalChannel();
    if (this.onStateChange) this.onStateChange('ready', this.roomId);
    
    // Using PeerJS CDN
    if (typeof Peer !== 'undefined') {
      this.peer = new Peer(this.roomId, {
        debug: 1,
        config: {
          iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:global.stun.twilio.com:3478' }
          ]
        }
      });

      this.peer.on('open', (id) => {
        console.log('[USG-Station] Room created with ID:', id);
      });

      this.peer.on('connection', (conn) => {
        console.log('[USG-Station] Probe connected!');
        this.conn = conn;
        this.setupConnectionHandlers();
      });

      this.peer.on('error', (err) => {
        console.warn('[USG-Station] Peer error, retrying with random ID:', err);
        // Fallback room ID if collision
        if (err.type === 'unavailable-id') {
          this.peer.destroy();
          this.initStation('usg-' + Math.random().toString(36).substring(2, 9).toUpperCase());
        } else if (this.onStateChange) {
          this.onStateChange('error', err);
        }
      });
    } else {
      console.log('[USG-Station] PeerJS not loaded, operating in local Broadcast mode');
      if (this.onStateChange) this.onStateChange('local', this.roomId);
    }
  }

  // Initialize Probe (connects to Station room)
  initProbe(roomId) {
    this.roomId = roomId;
    this.initLocalChannel();
    if (typeof Peer !== 'undefined') {
      this.peer = new Peer(null, {
        debug: 1,
        config: {
          iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:global.stun.twilio.com:3478' }
          ]
        }
      });

      this.peer.on('open', (id) => {
        console.log('[USG-Probe] Connecting to room:', roomId);
        this.conn = this.peer.connect(roomId, { reliable: true });
        this.setupConnectionHandlers();
      });

      this.peer.on('error', (err) => {
        console.error('[USG-Probe] Connection error:', err);
        if (this.onStateChange) this.onStateChange('error', err);
      });
    } else if (this.onStateChange) {
      this.onStateChange('local', roomId);
    }
  }

  setupConnectionHandlers() {
    if (!this.conn) return;

    this.conn.on('open', () => {
      this.isConnected = true;
      console.log('[USG-Sync] Connected to remote peer!');
      if (this.onStateChange) this.onStateChange('connected', this.roomId);
    });

    this.conn.on('data', (data) => {
      if (this.onData) this.onData(data);
    });

    this.conn.on('close', () => {
      this.isConnected = false;
      this.localActive = false;
      console.log('[USG-Sync] Connection closed');
      if (this.onStateChange) this.onStateChange('disconnected', this.roomId);
    });
  }

  // Use one transport to avoid applying control commands twice.
  sendTelemetry(payload) {
    if (this.conn && this.conn.open) {
      this.conn.send(payload);
    } else if (this.broadcastChannel) {
      this.broadcastChannel.postMessage(payload);
    }
  }
}

// Global export
window.UsgConnection = UsgConnection;
