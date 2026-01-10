import React from 'react';
import { ArrowUp, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full relative pt-24 pb-12 px-6 overflow-hidden">
      {/* Glass Separation Line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* TOP ROW: BIG BRANDING & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
          <div className="space-y-4">
            <span className="text-[100px] md:text-[140px] leading-[0.8] font-bold tracking-tighter text-white/5 select-none pointer-events-none block -ml-2">
              CRYZA
            </span>
            <p className="text-neutral-500 max-w-sm text-sm leading-relaxed pl-2">
              Engineering digital dominance for forward-thinking brands. 
              Small team, massive impact.
            </p>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 group-hover:text-white">Back to Top</span>
            <ArrowUp size={14} className="text-neutral-500 group-hover:text-white group-hover:-translate-y-1 transition-all" />
          </button>
        </div>

        {/* MIDDLE ROW: LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-24 pl-2">
          
          {/* Column 1 */}
          <div className="space-y-6">
            <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Sitemap</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Work', 'About'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Socials</h4>
            <ul className="space-y-3">
              {[
                { name: 'Twitter / X', icon: <Twitter size={14}/> },
                { name: 'LinkedIn', icon: <Linkedin size={14}/> },
                { name: 'Instagram', icon: <Instagram size={14}/> },
                { name: 'GitHub', icon: <Github size={14}/> }
              ].map((item) => (
                <li key={item.name}>
                  <a href="#" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group">
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

           {/* Column 4: Status */}
           <div className="space-y-6">
            <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-widest">System</h4>
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs text-neutral-300 font-mono">All Systems Normal</span>
               </div>
               <div className="text-[10px] text-neutral-600 font-mono">
                 Last Deployed: {new Date().toLocaleDateString()}
               </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <span className="text-[10px] text-neutral-600 uppercase tracking-widest font-mono">
            &copy; 2024 CRYZA Agency. All Rights Reserved.
          </span>
          <span className="text-[10px] text-neutral-700 font-mono">
            Designed & Engineered by CRYZA
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;