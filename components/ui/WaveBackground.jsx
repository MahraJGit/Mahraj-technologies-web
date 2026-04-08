"use client";

import React, { useEffect, useRef } from 'react';

export default function WaveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Terrain grid settings (optimized for high framerate while staying massive)
    const cols = 60;
    const rows = 30;
    const spacing = 85;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Speed of the wave (increased for faster flow)
      time += 0.05;

      const points = [];

      // Calculate pseudo 3D points
      for (let z = 0; z < rows; z++) {
        const rowData = [];
        for (let x = 0; x < cols; x++) {
          // Standard locked X grid
          const x0 = (x - cols / 2) * spacing;

          // Reverse Z so 0 is back, rows is front
          const z0 = z * spacing;

          // Majestic rolling hills (Vertical displacement on Y-axis)
          // Frequency increased (0.25) to show multiple curvy ripples across the grid
          const wave1 = Math.sin(x * 0.25 + time * 0.5) * 30;
          const wave2 = Math.cos(z * 0.25 + time * 0.5) * 30;

          // The massive macro curve creating the giant curvy hills over the X axis
          // Frequency increased to 0.1 to ensure it completes a full curvy hill shape (sine curve) across the screen
          const macroCurve = Math.sin(x * 0.1 - time * 0.2) * 180;

          const y0 = wave1 + wave2 + macroCurve;

          // 2D Projection parameters
          const fov = 450;
          const zOffset = 50;

          // Scale object down as it gets further away
          const scale = fov / (fov + z0 + zOffset);

          const x2d = canvas.width / 2 + x0 * scale;

          // Re-introduce the floor tilt so it structurally sits at the bottom 
          // Adjusted: Lifted significantly higher so the peaks sit cleanly in the center of the hero space!
          const y2d = (canvas.height / 2) + y0 * scale + (z0 * scale * 0.35);

          rowData.push({ x: x2d, y: y2d, scale });
        }
        points.push(rowData);
      }

      ctx.lineWidth = 1;

      // Draw horizontal grid lines
      for (let z = 0; z < rows; z++) {
        ctx.beginPath();
        for (let x = 0; x < cols; x++) {
          const p = points[z][x];
          if (x === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        // Fading intensity based on depth (z) - fade out front and extremely far back
        const depthRatio = z / rows;
        const opacity = depthRatio < 0.2 ? depthRatio * 5 : Math.max(0, 1 - depthRatio);

        ctx.strokeStyle = `rgba(228, 36, 47, ${opacity * 0.35})`;
        ctx.stroke();
      }

      // Draw vertical grid lines
      for (let x = 0; x < cols; x++) {
        ctx.beginPath();
        for (let z = 0; z < rows; z++) {
          const p = points[z][x];
          if (z === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        // Vertical lines can just inherit average transparency or calculate it per segment
        ctx.stroke();
      }

      // To make vertical lines fade properly, draw them segment by segment 
      for (let x = 0; x < cols; x++) {
        for (let z = 0; z < rows - 1; z++) {
          const p1 = points[z][x];
          const p2 = points[z + 1][x];
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          const depthRatio = z / rows;
          const opacity = depthRatio < 0.2 ? depthRatio * 5 : Math.max(0, 1 - depthRatio);
          ctx.strokeStyle = `rgba(228, 36, 47, ${opacity * 0.35})`;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 bg-[#050505] overflow-hidden">
      {/* Glow Center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(228,36,47,0.08),transparent_60%)] pointer-events-none" />

      {/* Responsive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

      {/* Vignette Overlays for seamless blending */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,#050505_100%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />
    </div>
  );
}
