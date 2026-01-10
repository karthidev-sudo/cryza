import React, { useEffect, useRef } from 'react';

const AuroraBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    let animationFrameId;

    const renderScale = 0.2; 
    
    const colors = [
        { h: 220, s: 90, l: 30 },
        { h: 270, s: 80, l: 40 },
        { h: 190, s: 80, l: 40 },
    ];

    let orbs = [];

    // 1. Separate Orb spawning from Resizing to prevent flashing on mobile scroll
    const spawnOrbs = () => {
        orbs = [];
        for(let i=0; i<6; i++) {
            orbs.push({
                radius: Math.random() * 100 + 50,
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
    };

    const resize = () => {
      // 2. We don't re-init orbs here. We just update bounds.
      canvas.width = window.innerWidth * renderScale;
      canvas.height = window.innerHeight * renderScale;
    };

    class Orb {
       // ... (Logic moved to spawnOrbs for simplicity, or keep class)
    }

    // Animation Loop
    const animate = () => {
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.globalCompositeOperation = 'screen'; 
      
      orbs.forEach(orb => {
        // Update position
        orb.x += orb.vx;
        orb.y += orb.vy;
        
        // Bounce off walls
        if (orb.x < 0 || orb.x > canvas.width) orb.vx *= -1;
        if (orb.y < 0 || orb.y > canvas.height) orb.vy *= -1;

        // Draw
        const g = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        g.addColorStop(0, `hsla(${orb.color.h}, ${orb.color.s}%, ${orb.color.l}%, 1)`);
        g.addColorStop(1, `hsla(${orb.color.h}, ${orb.color.s}%, ${orb.color.l}%, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    
    // Initial setup
    resize();
    spawnOrbs(); // Only called once!
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    // 3. FORCE OVERSCAN: Use -top/left/bottom/right-10 to push edges off screen
    <div className="fixed -top-[10vh] -left-[10vw] -right-[10vw] -bottom-[10vh] w-[120vw] h-[120vh] z-[-1] pointer-events-none bg-[#020617]">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block"
        style={{ 
            filter: 'blur(60px)', 
            // 4. Increase scale slightly more to ensure blur doesn't leak
            transform: 'scale(1.2)' 
        }} 
      />
      <div className="absolute inset-0 bg-neutral-950/60 mix-blend-multiply"></div>
    </div>
  );
};

export default AuroraBackground;