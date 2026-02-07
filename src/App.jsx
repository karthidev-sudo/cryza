import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';

// --- 1. The Unified Fixed Background ---
// REPLACE the old GlobalBackground with this optimized version
const GlobalBackground = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#030014]">
    {/* Optimized: Using Gradients instead of Blur Filters */}
    <div className="absolute top-[-20%] left-[-20%] w-[70vw] h-[70vw] rounded-full mix-blend-screen opacity-20 animate-pulse"
      style={{ 
        background: 'radial-gradient(circle, rgba(147, 51, 234, 1) 0%, rgba(0,0,0,0) 70%)',
        animationDuration: '8s'
      }} 
    />
    <div className="absolute bottom-[-20%] right-[-20%] w-[70vw] h-[70vw] rounded-full mix-blend-screen opacity-20 animate-pulse"
      style={{ 
        background: 'radial-gradient(circle, rgba(6, 182, 212, 1) 0%, rgba(0,0,0,0) 70%)',
        animationDuration: '10s'
      }} 
    />

    {/* Light Grid Overlay (Keep this, it's cheap) */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] mask-image:linear-gradient(to bottom, transparent, black, transparent)" />
  </div>
);

// --- 2. Reusable Scroll Animation Wrapper ---
// Wrap every section in this to get that "Smooth Reveal" effect automatically
const SectionReveal = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      <SmoothScroll>

      <GlobalBackground />
      <Navbar />
      
      <main className="relative z-10">
        {/* Hero handles its own animation, so we don't wrap it */}
        <Hero />
        
        <SectionReveal>
          <About />
        </SectionReveal>

        <SectionReveal>
          <Services />
        </SectionReveal>

        <SectionReveal>
          <Portfolio />
        </SectionReveal>

        <SectionReveal>
          <Contact />
        </SectionReveal>
      </main>

      <Footer />
      </SmoothScroll>
    </div>
  );
};

export default App;