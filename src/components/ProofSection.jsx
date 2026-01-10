import React, { useState } from 'react';
import { Zap, Activity, GitBranch, Crosshair, ArrowRight } from 'lucide-react';

const ProofSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const insights = [
    {
      id: '01',
      category: 'Performance',
      title: 'Core Web Vitals',
      before: 'Load: 3.2s',
      after: 'Load: 0.4s',
      description: 'Speed is not a luxury; it is a ranking factor. We engineer sub-second interactions to maximize SEO retention.',
      icon: <Zap size={18} />,
      accent: 'bg-yellow-500'
    },
    {
      id: '02',
      category: 'Architecture',
      title: 'Scalable Systems',
      before: 'Hardcoded',
      after: 'Modular',
      description: 'We avoid rigid templates. Our component-based architecture allows your platform to evolve without a total rebuild.',
      icon: <GitBranch size={18} />,
      accent: 'bg-cyan-500'
    },
    {
      id: '03',
      category: 'Engagement',
      title: 'Session Retention',
      before: 'Bounce: 65%',
      after: 'Bounce: 22%',
      description: 'Micro-interactions and fluid navigation keep users immersed. We design specifically to reduce bounce rates.',
      icon: <Activity size={18} />,
      accent: 'bg-green-500'
    },
    {
      id: '04',
      category: 'Conversion',
      title: 'User Pathways',
      before: 'Confusing',
      after: 'Directive',
      description: 'Every pixel serves a purpose. We strip away decorative noise to focus purely on the conversion funnel.',
      icon: <Crosshair size={18} />,
      accent: 'bg-indigo-500'
    }
  ];

  return (
    <section className="w-full text-neutral-200 py-24 px-6 border-t border-white/5 relative bg-transparent">
      
      {/* REMOVED: Old noise texture. 
          The SapphireBackground now provides the texture. 
      */}

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-white/5 pb-8">
          <div>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3 block">
              Output Analysis
            </span>
            <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
              Aesthetics attract. <br/>
              <span className="text-neutral-500">Architecture converts.</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-mono text-neutral-600 uppercase tracking-wider">
            <span>CRYZA STD. v2.4</span>
            <div className="h-px w-8 bg-neutral-800"></div>
            <span>Global</span>
          </div>
        </div>

        {/* The Insight Grid - Now Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-sm backdrop-blur-sm">
          {insights.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className="relative group bg-neutral-900/40 p-8 md:p-10 transition-colors duration-500 hover:bg-neutral-900/60"
            >
              {/* Top Meta Line */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <span className={`p-2 rounded bg-white/5 border border-white/5 text-neutral-400 group-hover:text-white group-hover:border-white/10 transition-all duration-300`}>
                    {item.icon}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-mono">
                    {item.category}
                  </span>
                </div>
                <span className="text-neutral-600 text-xs font-mono group-hover:text-neutral-400 transition-colors">
                  {item.id}
                </span>
              </div>

              {/* Main Content */}
              <div className="mb-8">
                <h3 className="text-xl font-medium text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>

              {/* The "Value Shift" Visual */}
              <div className="relative mt-auto pt-6 border-t border-white/5">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-neutral-600 line-through decoration-neutral-700 decoration-1">
                     {item.before}
                  </span>
                  <ArrowRight size={12} className="text-neutral-700" />
                  <span className={`font-semibold ${activeCard === index ? 'text-white' : 'text-neutral-400'} transition-colors duration-300`}>
                    {item.after}
                  </span>
                </div>
                
                <div className="w-full h-[2px] bg-neutral-800 relative overflow-hidden rounded-full">
                   <div 
                     className={`absolute top-0 left-0 h-full ${item.accent} transition-all duration-700 ease-out`}
                     style={{ width: activeCard === index ? '100%' : '30%' }}
                   ></div>
                </div>
              </div>

              {/* Gradient Glow */}
              <div 
                className={`absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-[80px] opacity-0 transition-opacity duration-700 pointer-events-none ${activeCard === index ? 'opacity-100' : ''}`} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;