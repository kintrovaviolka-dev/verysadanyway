/**
 * USG School - Core Real-Time Echocardiography Engine
 * Procedural & Cine-Loop Engine for PLAX view with dynamic degradation & pathology simulation
 */

class UsgEngine {
  constructor(canvasId, ecgCanvasId, gizmoCanvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.ecgCanvas = document.getElementById(ecgCanvasId);
    this.ecgCtx = this.ecgCanvas.getContext('2d');
    this.gizmoCanvas = document.getElementById(gizmoCanvasId);
    this.gizmoCtx = this.gizmoCanvas ? this.gizmoCanvas.getContext('2d') : null;

    // Simulation Parameters
    this.bpm = 72;
    this.cycleDuration = (60 / this.bpm) * 1000; // ~833 ms
    this.startTime = performance.now();
    this.isFrozen = false;
    this.frozenTime = 0;
    this.gain = 1.0; // 0.5 to 1.8
    this.activeCase = 'physiological'; // 'physiological' | 'pericardial_effusion'

    // Probe Orientation (Smoothed)
    this.targetOrientation = { pitch: 0, roll: 0, yaw: 0 };
    this.currentOrientation = { pitch: 0, roll: 0, yaw: 0 };
    this.zeroOffset = { pitch: 0, roll: 0, yaw: 0 };

    // Accuracy Score (0 - 100%)
    this.accuracyScore = 100;
    this.guidanceText = 'Optimální PLAX zobrazení';

    // ECG Buffer
    this.ecgPoints = [];
    this.maxEcgPoints = 300;

    // Resize listeners
    this.handleResize();
    window.addEventListener('resize', () => this.handleResize());

    // Generate static speckle noise pattern for performance
    this.initSpeckleTexture();

    // Start render loop
    this.render = this.render.bind(this);
    requestAnimationFrame(this.render);
  }

  handleResize() {
    if (this.canvas) {
      this.width = this.canvas.width = this.canvas.parentElement.clientWidth;
      this.height = this.canvas.height = this.canvas.parentElement.clientHeight;
    }
    if (this.ecgCanvas) {
      this.ecgWidth = this.ecgCanvas.width = this.ecgCanvas.clientWidth;
      this.ecgHeight = this.ecgCanvas.height = this.ecgCanvas.clientHeight;
    }
    if (this.gizmoCanvas) {
      this.gizmoCanvas.width = this.gizmoCanvas.clientWidth;
      this.gizmoCanvas.height = this.gizmoCanvas.clientHeight;
    }
  }

  initSpeckleTexture() {
    this.speckleCanvas = document.createElement('canvas');
    this.speckleCanvas.width = 256;
    this.speckleCanvas.height = 256;
    const sCtx = this.speckleCanvas.getContext('2d');
    const imgData = sCtx.createImageData(256, 256);
    const data = imgData.data;

    for (let i = 0; i < data.length; i += 4) {
      const val = Math.random() < 0.25 ? Math.floor(Math.random() * 80 + 30) : 0;
      data[i] = val;
      data[i + 1] = val;
      data[i + 2] = val;
      data[i + 3] = val > 0 ? 90 : 0;
    }
    sCtx.putImageData(imgData, 0, 0);
  }

  setProbeData(data) {
    if (data.pitch !== undefined) this.targetOrientation.pitch = data.pitch - this.zeroOffset.pitch;
    if (data.roll !== undefined) this.targetOrientation.roll = data.roll - this.zeroOffset.roll;
    if (data.yaw !== undefined) this.targetOrientation.yaw = data.yaw - this.zeroOffset.yaw;
    if (data.gain !== undefined) this.gain = data.gain;
    if (data.frozen !== undefined) this.isFrozen = data.frozen;
    if (data.activeCase !== undefined) this.activeCase = data.activeCase;
  }

  calibrateZero() {
    this.zeroOffset.pitch += this.targetOrientation.pitch;
    this.zeroOffset.roll += this.targetOrientation.roll;
    this.zeroOffset.yaw += this.targetOrientation.yaw;
    this.targetOrientation = { pitch: 0, roll: 0, yaw: 0 };
    this.currentOrientation = { pitch: 0, roll: 0, yaw: 0 };
  }

  // Smooth angle interpolation
  updateOrientation() {
    const lerp = 0.15;
    this.currentOrientation.pitch += (this.targetOrientation.pitch - this.currentOrientation.pitch) * lerp;
    this.currentOrientation.roll += (this.targetOrientation.roll - this.currentOrientation.roll) * lerp;
    this.currentOrientation.yaw += (this.targetOrientation.yaw - this.currentOrientation.yaw) * lerp;

    // Calculate Deviation & Clinical Guidance
    const pitchErr = Math.abs(this.currentOrientation.pitch);
    const rollErr = Math.abs(this.currentOrientation.roll);
    const yawErr = Math.abs(this.currentOrientation.yaw);

    const totalError = Math.sqrt(pitchErr * pitchErr + rollErr * rollErr + yawErr * yawErr);
    this.accuracyScore = Math.max(0, Math.min(100, Math.round(100 - totalError * 4)));

    if (totalError < 4) {
      this.guidanceText = 'Perfektní zobrazení PLAX! (Všechny struktury v ose)';
    } else if (pitchErr > 10 && this.currentOrientation.pitch > 0) {
      this.guidanceText = 'Příliš velký náklon nahoru (fanning) – ztrácíte hrot LK a vidíte RVOT';
    } else if (pitchErr > 10 && this.currentOrientation.pitch < 0) {
      this.guidanceText = 'Příliš velký náklon dolů – řez koronárním sinem';
    } else if (rollErr > 10) {
      this.guidanceText = 'Špatná rotace sondy – zkrácení levé komory (foreshortening)';
    } else if (yawErr > 12) {
      this.guidanceText = 'Sonda vychýlena ze středu (rocking)';
    } else {
      this.guidanceText = 'Mírná odchylka – jemně dotáhněte polohu k 0°';
    }
  }

  // -------------------------------------------------------------
  // Cardiac Cycle Math (0.0 to 1.0)
  // 0.0 - 0.35 = Systole (Ventricular contraction, AV open, MV closed)
  // 0.35 - 0.70 = Early Diastole (Rapid filling, MV E-wave peak open)
  // 0.70 - 0.85 = Diastasis (MV half open)
  // 0.85 - 1.0 = Late Diastole (Atrial kick, MV A-wave open, AV closed)
  // -------------------------------------------------------------
  getCardiacPhase(time) {
    const elapsed = (time - this.startTime) % this.cycleDuration;
    const phase = elapsed / this.cycleDuration;

    let systoleProgress = 0;
    let mvOpen = 0; // 0 (closed) to 1 (fully open)
    let avOpen = 0; // 0 (closed) to 1 (fully open)
    let lvContraction = 0; // 0 (EDV) to 1 (ESV)

    if (phase < 0.35) {
      // Systole
      const p = phase / 0.35;
      systoleProgress = Math.sin(p * Math.PI);
      lvContraction = Math.sin(p * Math.PI);
      avOpen = Math.sin(p * Math.PI);
      mvOpen = 0;
    } else if (phase < 0.65) {
      // Early Diastole (E-Wave)
      const p = (phase - 0.35) / 0.30;
      mvOpen = Math.sin(p * Math.PI) * 1.0; // Peak E-wave
      avOpen = 0;
      lvContraction = (1 - p) * 0.2;
    } else if (phase < 0.80) {
      // Diastasis
      mvOpen = 0.2;
      avOpen = 0;
      lvContraction = 0;
    } else {
      // Late Diastole (A-Wave - Atrial Kick)
      const p = (phase - 0.80) / 0.20;
      mvOpen = Math.sin(p * Math.PI) * 0.65; // A-wave peak
      avOpen = 0;
      lvContraction = 0;
    }

    return { phase, lvContraction, mvOpen, avOpen };
  }

  // Render Loop
  render(now) {
    if (!this.isFrozen) {
      this.frozenTime = now;
    }
    const simTime = this.isFrozen ? this.frozenTime : now;

    this.updateOrientation();

    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // Setup Sector Geometry
    const apexX = this.width * 0.48;
    const apexY = this.height * 0.08;
    const sectorRadius = Math.min(this.width * 0.75, this.height * 0.82);
    const sectorAngle = 68 * (Math.PI / 180); // ~68 degrees

    // 1. Draw Ultrasound Sector Background & Mask
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(apexX, apexY);
    ctx.arc(apexX, apexY, sectorRadius, Math.PI / 2 - sectorAngle / 2, Math.PI / 2 + sectorAngle / 2);
    ctx.closePath();
    ctx.fillStyle = '#010308';
    ctx.fill();
    ctx.clip(); // Clip everything to the acoustic cone

    // 2. Draw Cardiac Structures inside Sector
    this.drawEchocardiogram(ctx, apexX, apexY, sectorRadius, simTime);

    // 3. Draw Scanlines & Acoustic Artifacts
    this.drawAcousticNoiseAndArtifacts(ctx, apexX, apexY, sectorRadius);

    ctx.restore();

    // 4. Draw Sector Boundaries, Depth Scale & Probe Orientation Marker Dot
    this.drawSectorGridAndOverlays(ctx, apexX, apexY, sectorRadius, sectorAngle);

    // 5. Draw Synchronized ECG Waveform
    this.drawEcg(simTime);

    // 6. Draw 3D Gizmo if canvas exists
    if (this.gizmoCtx) {
      this.draw3DGizmo();
    }

    requestAnimationFrame(this.render);
  }

  // Draw Anatomical Structures for PLAX
  drawEchocardiogram(ctx, apexX, apexY, radius, time) {
    const cardiac = this.getCardiacPhase(time);
    const pitch = this.currentOrientation.pitch;
    const roll = this.currentOrientation.roll;
    const yaw = this.currentOrientation.yaw;

    // Off-axis transformations based on probe orientation
    const fanningShiftY = pitch * 3.5;
    const rockingShiftX = yaw * 3.0;
    const foreshortening = Math.cos((roll * Math.PI) / 180);

    // Center anchor for heart within acoustic beam
    const cx = apexX + rockingShiftX;
    const cy = apexY + radius * 0.52 + fanningShiftY;
    const scale = (radius / 550) * Math.max(0.65, foreshortening);

    // Pathology Effect: Swinging Heart in Pericardial Effusion
    let swingX = 0;
    let swingY = 0;
    if (this.activeCase === 'pericardial_effusion') {
      const swingAngle = (time / this.cycleDuration) * Math.PI * 2;
      swingX = Math.sin(swingAngle) * 16 * scale;
      swingY = Math.cos(swingAngle) * 8 * scale;
    }

    ctx.save();
    ctx.translate(cx + swingX, cy + swingY);
    ctx.scale(scale, scale);

    // Rotate heart slightly to match standard clinical PLAX orientation (~30 deg)
    ctx.rotate((32 * Math.PI) / 180);

    // ==========================================
    // 0. PERICARDIAL EFFUSION (Anechoic Fluid Layer)
    // ==========================================
    if (this.activeCase === 'pericardial_effusion') {
      // Large jet-black fluid space anterior and posterior
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(0, 0, 190, 140, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#000000'; // Pure anechoic black
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#223344'; // Bright hyperechoic fibrous pericardium border
      ctx.stroke();
      ctx.restore();
    }

    // ==========================================
    // 1. MYOCARDIUM & WALLS (IVS, LV, Posterior Wall)
    // ==========================================
    const contract = cardiac.lvContraction;
    const ivsThickness = 18 + contract * 6; // Thickens in systole
    const pwThickness = 16 + contract * 5;
    const lvCavityWidth = 65 - contract * 22; // LV shrinks in systole (EF ~65%)
    const lvLength = 130 - contract * 10;

    // Tissue fill gradient (Echogenic speckle gradient)
    const tissueGrad = ctx.createRadialGradient(0, 0, 20, 0, 0, 160);
    tissueGrad.addColorStop(0, `rgba(180, 200, 220, ${0.4 * this.gain})`);
    tissueGrad.addColorStop(0.7, `rgba(140, 160, 190, ${0.7 * this.gain})`);
    tissueGrad.addColorStop(1, `rgba(200, 225, 255, ${0.9 * this.gain})`);

    // Interventricular Septum (IVS)
    ctx.beginPath();
    ctx.moveTo(-lvLength, -ivsThickness / 2);
    ctx.quadraticCurveTo(-lvLength * 0.4, -ivsThickness - 10, 30, -ivsThickness - 14);
    ctx.lineTo(30, -14);
    ctx.quadraticCurveTo(-lvLength * 0.4, -ivsThickness / 2, -lvLength, -ivsThickness / 2);
    ctx.fillStyle = tissueGrad;
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = `rgba(230, 245, 255, ${0.8 * this.gain})`;
    ctx.stroke();

    // Posterior Wall (PW)
    ctx.beginPath();
    ctx.moveTo(-lvLength, lvCavityWidth);
    ctx.quadraticCurveTo(-lvLength * 0.4, lvCavityWidth + pwThickness + 5, 20, lvCavityWidth + pwThickness);
    ctx.lineTo(20, lvCavityWidth);
    ctx.quadraticCurveTo(-lvLength * 0.4, lvCavityWidth, -lvLength, lvCavityWidth);
    ctx.fillStyle = tissueGrad;
    ctx.fill();
    ctx.stroke();

    // LV Apex (Connecting IVS and PW)
    ctx.beginPath();
    ctx.arc(-lvLength, lvCavityWidth / 2, lvCavityWidth / 2 + pwThickness / 2, Math.PI / 2, (3 * Math.PI) / 2);
    ctx.fillStyle = tissueGrad;
    ctx.fill();
    ctx.stroke();

    // LV Cavity (Anechoic Chamber - Black Blood)
    ctx.beginPath();
    ctx.moveTo(-lvLength + 5, lvCavityWidth / 2);
    ctx.quadraticCurveTo(-lvLength * 0.5, -5, 25, -12);
    ctx.lineTo(20, lvCavityWidth);
    ctx.quadraticCurveTo(-lvLength * 0.5, lvCavityWidth, -lvLength + 5, lvCavityWidth / 2);
    ctx.fillStyle = '#000206';
    ctx.fill();

    // ==========================================
    // 2. RIGHT VENTRICLE (RV - Anterior Chamber)
    // ==========================================
    ctx.beginPath();
    ctx.moveTo(-lvLength * 0.8, -ivsThickness - 16);
    ctx.quadraticCurveTo(-lvLength * 0.3, -ivsThickness - 45, 40, -ivsThickness - 30);
    ctx.lineTo(30, -ivsThickness - 14);
    ctx.quadraticCurveTo(-lvLength * 0.4, -ivsThickness - 10, -lvLength * 0.8, -ivsThickness - 16);
    
    // In Tamponade: RV free wall collapses in diastole!
    if (this.activeCase === 'pericardial_effusion' && cardiac.lvContraction < 0.3) {
      ctx.fillStyle = '#000206'; // collapsed cavity
    } else {
      ctx.fillStyle = '#000206';
    }
    ctx.fill();
    ctx.strokeStyle = `rgba(180, 205, 230, ${0.7 * this.gain})`;
    ctx.stroke();

    // ==========================================
    // 3. AORTIC ROOT & AORTIC VALVE (AV)
    // ==========================================
    const aoX = 30;
    const aoY = -14;
    const aoWidth = 42;
    const aoHeight = 36;

    // Aortic Root Tube
    ctx.beginPath();
    ctx.moveTo(aoX, aoY);
    ctx.lineTo(aoX + aoWidth, aoY - 12);
    ctx.lineTo(aoX + aoWidth, aoY + aoHeight - 12);
    ctx.lineTo(aoX, aoY + aoHeight);
    ctx.closePath();
    ctx.fillStyle = '#000206';
    ctx.fill();
    ctx.strokeStyle = `rgba(220, 240, 255, ${0.85 * this.gain})`;
    ctx.stroke();

    // Aortic Valve Leaflets (Cusps)
    const avSeparation = cardiac.avOpen * 14;
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.95 * this.gain})`;

    // Right Coronary Cusp (RCC)
    ctx.beginPath();
    ctx.moveTo(aoX + 2, aoY + 2);
    ctx.lineTo(aoX + 18, aoY + 8 - avSeparation);
    ctx.stroke();

    // Non-Coronary Cusp (NCC)
    ctx.beginPath();
    ctx.moveTo(aoX + 2, aoY + aoHeight - 2);
    ctx.lineTo(aoX + 18, aoY + aoHeight - 8 + avSeparation);
    ctx.stroke();

    // ==========================================
    // 4. LEFT ATRIUM (LA)
    // ==========================================
    ctx.beginPath();
    ctx.moveTo(aoX, aoY + aoHeight);
    ctx.quadraticCurveTo(aoX + 50, aoY + aoHeight + 20, aoX + 35, aoY + aoHeight + 65);
    ctx.quadraticCurveTo(aoX - 20, aoY + aoHeight + 60, 20, lvCavityWidth);
    ctx.fillStyle = '#000206';
    ctx.fill();
    ctx.strokeStyle = `rgba(180, 210, 240, ${0.75 * this.gain})`;
    ctx.stroke();

    // ==========================================
    // 5. MITRAL VALVE (MV - AML & PML Leaflets)
    // ==========================================
    const mvBaseX = 15;
    const mvBaseY = 0;
    const amlLength = 34;
    const pmlLength = 16;
    const mvOpening = cardiac.mvOpen; // 0 to 1

    ctx.lineWidth = 2.8;
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.95 * this.gain})`;

    // Anterior Mitral Leaflet (AML - long, sweeps towards IVS)
    const amlAngle = -0.2 + mvOpening * 0.85; // Flips open towards IVS (E-point)
    const amlEndX = mvBaseX - Math.cos(amlAngle) * amlLength;
    const amlEndY = mvBaseY + Math.sin(amlAngle) * amlLength + mvOpening * 12;

    ctx.beginPath();
    ctx.moveTo(mvBaseX, mvBaseY);
    ctx.quadraticCurveTo(mvBaseX - 15, mvBaseY + 5, amlEndX, amlEndY);
    ctx.stroke();

    // Posterior Mitral Leaflet (PML - short, moves towards posterior wall)
    const pmlAngle = 0.4 - mvOpening * 0.6;
    const pmlEndX = mvBaseX - Math.cos(pmlAngle) * pmlLength;
    const pmlEndY = lvCavityWidth - 5 + Math.sin(pmlAngle) * pmlLength;

    ctx.beginPath();
    ctx.moveTo(mvBaseX + 5, lvCavityWidth - 2);
    ctx.quadraticCurveTo(mvBaseX - 5, lvCavityWidth - 10, pmlEndX, pmlEndY);
    ctx.stroke();

    // Chordae Tendineae & Papillary Muscle
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = `rgba(200, 220, 245, ${0.45 * this.gain})`;
    ctx.beginPath();
    ctx.moveTo(amlEndX, amlEndY);
    ctx.lineTo(-40, lvCavityWidth - 15);
    ctx.moveTo(pmlEndX, pmlEndY);
    ctx.lineTo(-40, lvCavityWidth - 15);
    ctx.stroke();

    ctx.restore();
  }

  // Draw Speckle Noise, Scanlines & Angular Dropout
  drawAcousticNoiseAndArtifacts(ctx, apexX, apexY, radius) {
    // 1. Apply Speckle Texture
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    ctx.globalAlpha = 0.22 * this.gain;
    ctx.drawImage(this.speckleCanvas, apexX - radius, apexY, radius * 2, radius);
    ctx.restore();

    // 2. Scanline Geometry / CRT Ultrasound Sector Lines
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.lineWidth = 1;
    const numLines = 64;
    const startA = Math.PI / 2 - 0.55;
    const endA = Math.PI / 2 + 0.55;
    for (let i = 0; i <= numLines; i++) {
      const a = startA + (i / numLines) * (endA - startA);
      ctx.beginPath();
      ctx.moveTo(apexX, apexY);
      ctx.lineTo(apexX + Math.cos(a) * radius, apexY + Math.sin(a) * radius);
      ctx.stroke();
    }
    ctx.restore();

    // 3. Acoustic Dropout on Extreme Tilt (>18 deg)
    const deviation = Math.sqrt(
      this.currentOrientation.pitch ** 2 +
      this.currentOrientation.roll ** 2 +
      this.currentOrientation.yaw ** 2
    );

    if (deviation > 14) {
      const shadowAlpha = Math.min(0.85, (deviation - 14) * 0.05);
      ctx.save();
      ctx.fillStyle = `rgba(2, 4, 8, ${shadowAlpha})`;
      ctx.fillRect(0, 0, this.width, this.height);
      ctx.restore();
    }
  }

  // Draw Sector Grid, Depth Ruler and Golden Index Marker
  drawSectorGridAndOverlays(ctx, apexX, apexY, radius, angle) {
    ctx.save();
    ctx.strokeStyle = 'rgba(0, 229, 255, 0.4)';
    ctx.lineWidth = 1.5;

    // Sector Arc Borders
    const startA = Math.PI / 2 - angle / 2;
    const endA = Math.PI / 2 + angle / 2;

    ctx.beginPath();
    ctx.moveTo(apexX, apexY);
    ctx.lineTo(apexX + Math.cos(startA) * radius, apexY + Math.sin(startA) * radius);
    ctx.arc(apexX, apexY, radius, startA, endA);
    ctx.lineTo(apexX, apexY);
    ctx.stroke();

    // Depth Ticks (Every 1 cm, total ~16 cm depth)
    ctx.font = '10px JetBrains Mono';
    ctx.fillStyle = '#64748b';
    const numTicks = 16;
    for (let i = 1; i <= numTicks; i++) {
      const r = (i / numTicks) * radius;
      const x = apexX + Math.cos(endA) * r;
      const y = apexY + Math.sin(endA) * r;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + (i % 5 === 0 ? 8 : 4), y);
      ctx.stroke();

      if (i % 5 === 0) {
        ctx.fillText(`${i}`, x + 12, y + 3);
      }
    }

    // Ultrasound Orientation Marker Dot (Akustický index - Golden dot at right side of sector)
    const markerRadius = radius * 0.18;
    const markerX = apexX + Math.cos(startA + 0.12) * markerRadius;
    const markerY = apexY + Math.sin(startA + 0.12) * markerRadius;

    ctx.beginPath();
    ctx.arc(markerX, markerY, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#ffb700';
    ctx.shadowColor = '#ffb700';
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.restore();
  }

  // Draw ECG Monitor Trace
  drawEcg(time) {
    const ctx = this.ecgCtx;
    const w = this.ecgWidth;
    const h = this.ecgHeight;
    ctx.clearRect(0, 0, w, h);

    const phase = ((time - this.startTime) % this.cycleDuration) / this.cycleDuration;

    // Generate ECG voltage
    let v = 0;
    if (phase > 0.05 && phase < 0.12) {
      // P wave
      v = Math.sin(((phase - 0.05) / 0.07) * Math.PI) * 0.25;
    } else if (phase >= 0.18 && phase < 0.20) {
      // Q wave
      v = -0.2;
    } else if (phase >= 0.20 && phase < 0.24) {
      // R peak (QRS)
      v = 1.0;
    } else if (phase >= 0.24 && phase < 0.27) {
      // S wave
      v = -0.35;
    } else if (phase >= 0.40 && phase < 0.58) {
      // T wave
      v = Math.sin(((phase - 0.40) / 0.18) * Math.PI) * 0.4;
    }

    this.ecgPoints.push(v);
    if (this.ecgPoints.length > w) {
      this.ecgPoints.shift();
    }

    // Render Waveform
    ctx.beginPath();
    ctx.strokeStyle = '#00ff88';
    ctx.lineWidth = 1.8;
    ctx.shadowColor = '#00ff88';
    ctx.shadowBlur = 6;

    const centerY = h * 0.55;
    for (let i = 0; i < this.ecgPoints.length; i++) {
      const x = i;
      const y = centerY - this.ecgPoints[i] * (h * 0.4);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  // Draw 3D Orientation Gizmo in Station Sidebar
  draw3DGizmo() {
    const ctx = this.gizmoCtx;
    const w = this.gizmoCanvas.width;
    const h = this.gizmoCanvas.height;
    ctx.clearRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h / 2;

    const pitch = (this.currentOrientation.pitch * Math.PI) / 180;
    const roll = (this.currentOrientation.roll * Math.PI) / 180;
    const yaw = (this.currentOrientation.yaw * Math.PI) / 180;

    ctx.save();
    ctx.translate(cx, cy);

    // Draw Target Orientation (Grey Reference Box)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.strokeRect(-25, -45, 50, 90);

    // Draw Active Probe Transformation
    ctx.rotate(yaw);
    ctx.transform(Math.cos(roll), Math.sin(pitch) * 0.5, 0, 1, 0, 0);

    // Probe Body
    ctx.fillStyle = this.accuracyScore > 85 ? 'rgba(0, 255, 136, 0.25)' : 'rgba(0, 229, 255, 0.25)';
    ctx.strokeStyle = this.accuracyScore > 85 ? '#00ff88' : '#00e5ff';
    ctx.lineWidth = 2;
    ctx.fillRect(-22, -40, 44, 80);
    ctx.strokeRect(-22, -40, 44, 80);

    // Index Marker on Gizmo
    ctx.fillStyle = '#ffb700';
    ctx.fillRect(22, -30, 4, 15);

    // Acoustic Beam Cone projecting from top
    ctx.beginPath();
    ctx.moveTo(-15, -40);
    ctx.lineTo(-35, -75);
    ctx.lineTo(35, -75);
    ctx.lineTo(15, -40);
    ctx.fillStyle = 'rgba(0, 229, 255, 0.15)';
    ctx.fill();

    ctx.restore();
  }
}

// Global Export
window.UsgEngine = UsgEngine;
