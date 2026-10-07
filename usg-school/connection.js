/**
 * USG School - Connection Bridge (WebRTC / PeerJS + BroadcastChannel Fallback)
 * Ultra-low latency communication between iPhone Probe & Station Display
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

    // Initialize local BroadcastChannel (for fast local dev/testing on same machine)
    try {
      this.broadcastChannel = new BroadcastChannel('usg_school_sync');
      this.broadcastChannel.onmessage = (event) => {
        if (event.data && this.onData) {
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
        if (this.onStateChange) this.onStateChange('ready', id);
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
          this.initStation('usg-' + Math.random().toString(36).substring(2, 9).toUpperCase());
        }
      });
    } else {
      console.log('[USG-Station] PeerJS not loaded, operating in local Broadcast mode');
      if (this.onStateChange) this.onStateChange('ready', this.roomId);
    }
  }

  // Initialize Probe (connects to Station room)
  initProbe(roomId) {
    this.roomId = roomId;
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
        this.conn = this.peer.connect(roomId, { reliable: false }); // false for fastest UDP-like delivery
        this.setupConnectionHandlers();
      });

      this.peer.on('error', (err) => {
        console.error('[USG-Probe] Connection error:', err);
        if (this.onStateChange) this.onStateChange('error', err);
      });
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
      console.log('[USG-Sync] Connection closed');
      if (this.onStateChange) this.onStateChange('disconnected', this.roomId);
    });
  }

  // Send orientation & telemetry packet (called from Probe at 60Hz)
  sendTelemetry(payload) {
    if (this.conn && this.conn.open) {
      this.conn.send(payload);
    }
    // Also dispatch to local broadcast channel
    if (this.broadcastChannel) {
      this.broadcastChannel.postMessage(payload);
    }
  }
}

// Global export
window.UsgConnection = UsgConnection;
