import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let timeoutId = null;
    const handleScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        setScrolled(window.scrollY > 50);
        timeoutId = null;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      // FIX: Added 'border-b' globally and toggled only 'border-white/5' vs 'border-transparent'
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#030014]/70 backdrop-blur-xl border-white/10 py-4 shadow-lg shadow-purple-500/5' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tight text-white z-50">
          CRYZA<span className="text-cyan-400">.</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="group px-6 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-cyan-400 transition-colors flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50 relative" 
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full bg-[#030014] border-b border-white/10 p-6 pt-24 shadow-2xl md:hidden flex flex-col gap-6"
          >
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setMobileOpen(false)} 
                className="text-xl font-medium text-slate-300 hover:text-white"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-center"
            >
              Start Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;