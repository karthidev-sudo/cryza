import React from 'react';
import { Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#030014]/50 backdrop-blur-md pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold tracking-tight text-white mb-2">
              CRYZA<span className="text-cyan-400">.</span>
            </div>
            <p className="text-slate-500 text-sm">
              Digital perfection for the modern age.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {[Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-slate-500">
          <div className="mb-4 md:mb-0">
            &copy; 2026 Cryza Agency. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              Back to Top <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;