import React, { useState } from 'react';
import { ArrowRight, Award, Code, Globe, Users } from 'lucide-react';

const AboutSection = () => {
  const [activeStat, setActiveStat] = useState(null);

  const stats = [
    { label: 'Years Active', value: '04', desc: 'Refining our craft since 2021.' },
    { label: 'Projects Shipped', value: '85+', desc: 'Across FinTech, SaaS, and Art.' },
    { label: 'Client Retention', value: '92%', desc: 'We build partnerships, not just sites.' },
  ];

  return (
    <section className="relative w-full py-32 px-6 bg-transparent text-white overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* --- LEFT: THE NARRATIVE --- */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-8 bg-indigo-500"></div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">Agency DNA</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-8">
            Small team. <br/>
            <span className="text-neutral-500">Global infrastructure.</span>
          </h2>

          <div className="space-y-6 text-sm md:text-base text-neutral-400 leading-relaxed max-w-lg">
            <p>
              CRYZA was founded on a singular principle: <strong>Digital products should be built like skyscrapers, not billboards.</strong>
            </p>
            <p>
              We are not a generalist marketing firm. We are a specialized unit of creative engineers and interface designers. We reject bloated teams and bureaucracy in favor of direct access and raw technical skill.
            </p>
            <p>
              When you hire us, you don't get an account manager. You get the people who actually write the code and design the pixels.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-4">
               {/* Abstract "Team" Avatars using gradients */}
               {[1,2,3].map((i) => (
                 <div key={i} className="w-12 h-12 rounded-full border-2 border-neutral-900 bg-neutral-800 flex items-center justify-center overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                        i === 1 ? 'from-indigo-500 to-purple-600' : 
                        i === 2 ? 'from-cyan-500 to-blue-600' : 
                        'from-emerald-500 to-teal-600'
                    } opacity-80`}></div>
                    <span className="relative z-10 text-[10px] font-bold opacity-50">0{i}</span>
                 </div>
               ))}
            </div>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest pl-4 border-l border-white/10">
              Principal Partners
            </div>
          </div>
        </div>


        {/* --- RIGHT: THE STATS MATRIX --- */}
        <div className="relative">
          {/* Glass Card Container */}
          <div className="w-full bg-neutral-900/30 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
            
            {/* Header */}
            <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-black/20">
              <span className="text-xs font-mono text-neutral-500">AGENCY_METRICS_DB</span>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="divide-y divide-white/5">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  onMouseEnter={() => setActiveStat(index)}
                  onMouseLeave={() => setActiveStat(null)}
                  className="group p-8 transition-all duration-300 hover:bg-white/5 cursor-default relative overflow-hidden"
                >
                  <div className="relative z-10 flex justify-between items-end">
                    <div>
                      <span className="text-xs font-mono text-indigo-400 block mb-2">{stat.label}</span>
                      <span className="text-5xl font-medium tracking-tighter text-white">{stat.value}</span>
                    </div>
                    <ArrowRight 
                        className={`w-5 h-5 text-neutral-600 transition-all duration-300 ${activeStat === index ? '-rotate-45 text-white' : ''}`} 
                    />
                  </div>
                  
                  {/* Reveal Description */}
                  <div className={`mt-4 overflow-hidden transition-all duration-500 ${activeStat === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm text-neutral-400">{stat.desc}</p>
                  </div>
                  
                  {/* Hover Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] pointer-events-none transition-opacity duration-500 ${activeStat === index ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-8 py-4 bg-black/20 border-t border-white/5 flex justify-between items-center text-[10px] text-neutral-600 font-mono uppercase">
               <span>Syncing...</span>
               <span>v1.0.4</span>
            </div>
          </div>
          
          {/* Decorative Grid Behind */}
          <div className="absolute -z-10 top-[-20px] right-[-20px] w-full h-full border border-white/5 rounded-xl opacity-50"></div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;