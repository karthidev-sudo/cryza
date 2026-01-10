import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { useLocation } from 'react-router-dom'; // <--- Import this

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);
  const location = useLocation(); // <--- Track the current page

  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // 2. THE FIX: Reset scroll on route change
  useEffect(() => {
    if (lenisRef.current) {
      // immediate: true skips the smooth animation and jumps instantly
      lenisRef.current.scrollTo(0, { immediate: true }); 
    }
  }, [location.pathname]); // <--- Triggers whenever URL changes

  return <div className="w-full min-h-screen">{children}</div>;
};

export default SmoothScroll;