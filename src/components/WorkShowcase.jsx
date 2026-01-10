import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const WorkShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    { id: '01', client: 'Apex Finance', industry: 'FinTech', desc: 'High-frequency trading interface.', tags: ['React', 'WebSocket'], color: 'from-emerald-600 to-teal-900' },
    { id: '02', client: 'Lumina Health', industry: 'BioTech', desc: '3D Genome visualization platform.', tags: ['WebGL', 'Data'], color: 'from-indigo-600 to-blue-900' },
    { id: '03', client: 'Velos Motors', industry: 'Automotive', desc: 'EV fleet telemetry dashboard.', tags: ['IoT', 'Cloud'], color: 'from-orange-600 to-red-900' },
    { id: '04', client: 'Sovereign', industry: 'Real Estate', desc: 'REIT Asset management system.', tags: ['System', 'Frontend'], color: 'from-slate-600 to-black' }
  ];

  return (
    <section id="work" className="w-full py-32 px-6 lg:px-12 relative">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* --- LEFT: List --- */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-[1px] w-8 bg-indigo-500"></div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">Selected Works</span>
          </div>

          <div className="flex flex-col">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group relative py-8 border-b border-white/5 cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                }`}
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-2xl md:text-3xl font-medium text-white group-hover:translate-x-4 transition-transform duration-500">
                    {project.client}
                  </h3>
                  <span className="text-xs font-mono text-slate-500">{project.industry}</span>
                </div>
                
                {/* Mobile/Tablet Detail Reveal */}
                <div className="lg:hidden mt-4 pl-4 border-l border-indigo-500">
                  <p className="text-sm text-slate-300 mb-3">{project.desc}</p>
                  <div className="flex gap-2">
                    {project.tags.map(t => <span key={t} className="text-[10px] uppercase px-2 py-1 bg-white/5 rounded text-slate-400">{t}</span>)}
                  </div>
                </div>

                {/* Desktop Line Indicator */}
                <div className={`hidden lg:block absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500 ${activeIndex === index ? 'w-full' : 'w-0'}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT: Viewfinder (Desktop Only) --- */}
        <div className="hidden lg:block lg:col-span-5 relative">
          <div className="sticky top-32 w-full aspect-[4/5] bg-white/5 backdrop-blur-3xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            {projects.map((project, index) => (
              <div key={project.id} className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                
                {/* Text Overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-4xl font-bold text-white mb-2">{project.client}</div>
                  <p className="text-lg text-slate-300 mb-6">{project.desc}</p>
                  <div className="flex gap-3">
                    {project.tags.map(t => <span key={t} className="px-3 py-1 bg-black/30 border border-white/10 rounded-full text-xs text-white backdrop-blur-md">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Grid Overlay */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkShowcase;