import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Globe, Zap, Layout, Box } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center pt-32 pb-12 px-6 lg:px-12 overflow-hidden">
      
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">

        {/* --- LEFT: Typography --- */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          <div className={`flex items-center gap-3 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="h-[1px] w-8 bg-cyan-400"></div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">System Architecture v2.0</span>
          </div>

          <div className="mt-8 space-y-6">
            <h1 className={`text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.05] tracking-tight text-white transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              We don't just <br className="hidden sm:block" /> build websites.
            </h1>
            
            <p className={`text-xl sm:text-2xl text-slate-400 font-light max-w-2xl transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              We engineer digital authority for brands that command respect.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 pt-6 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <button className="group relative px-8 py-4 bg-white text-black text-sm font-bold tracking-tight rounded-sm hover:bg-cyan-50 transition-colors w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  Initiate Project
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </button>
              
              <button className="group flex items-center justify-center gap-3 px-8 py-4 text-sm font-medium text-slate-300 hover:text-white transition-colors border border-white/5 hover:border-white/20 rounded-sm w-full sm:w-auto backdrop-blur-sm">
                View Case Studies
              </button>
            </div>
          </div>
        </div>

        {/* --- RIGHT: Glass Matrix Card --- */}
        <div className={`lg:col-span-5 w-full transition-all duration-1000 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-y-12 lg:translate-y-0 lg:translate-x-12'}`}>
          
          <div className="relative w-full bg-white/5 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl ring-1 ring-white/5">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Service_Matrix_DB</span>
              <Box className="w-4 h-4 text-cyan-400" />
            </div>

            {/* List */}
            <div className="space-y-3">
              {[
                { icon: <Layout size={18} />, title: "Interface Architecture", sub: "Figma / React" },
                { icon: <Globe size={18} />, title: "Global Engineering", sub: "Next.js / Edge" },
                { icon: <Zap size={18} />, title: "Performance Logic", sub: "Core Vitals / SEO" }
              ].map((item, i) => (
                <div key={i} className="group flex items-center justify-between p-4 rounded-lg bg-black/20 border border-white/5 hover:bg-white/5 hover:border-cyan-500/30 transition-all cursor-default">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded bg-white/5 text-cyan-400 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-200">{item.title}</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider">{item.sub}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;