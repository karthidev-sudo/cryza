import React, { useState } from 'react';
import { ScanSearch, Braces, Layers, TrendingUp } from 'lucide-react';

const ProfessionalSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const steps = [
    { id: '01', title: 'Discovery', desc: 'Technical audits & strategic blueprints.', icon: <ScanSearch /> },
    { id: '02', title: 'Architecture', desc: 'Systems design & component libraries.', icon: <Layers /> },
    { id: '03', title: 'Development', desc: 'Full-stack engineering & API integration.', icon: <Braces /> },
    { id: '04', title: 'Evolution', desc: 'Analytics loops & market scaling.', icon: <TrendingUp /> }
  ];

  return (
    <section className="w-full py-24 px-6 lg:px-12 relative">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="mb-16 md:flex justify-between items-end border-b border-white/5 pb-8">
          <div className="max-w-xl">
             <div className="flex items-center gap-2 text-cyan-400 mb-4">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-xs font-mono uppercase tracking-widest">Operating System</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
              Precision execution for <br/> complex digital problems.
            </h2>
          </div>
          <p className="hidden md:block text-sm text-slate-400 max-w-xs text-right">
            We replace guesswork with a structured engineering lifecycle.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={step.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative p-8 rounded-xl border transition-all duration-500 backdrop-blur-sm ${
                hoveredIndex === index 
                  ? 'bg-white/10 border-cyan-500/30 -translate-y-2 shadow-2xl shadow-cyan-900/20' 
                  : 'bg-white/5 border-white/5 hover:border-white/10'
              }`}
            >
              <div className="flex justify-between items-start mb-12">
                <span className={`text-4xl font-light transition-colors ${hoveredIndex === index ? 'text-white' : 'text-slate-600'}`}>
                  {step.id}
                </span>
                <div className={`p-2.5 rounded-lg transition-colors ${hoveredIndex === index ? 'bg-cyan-500 text-white' : 'bg-white/5 text-slate-400'}`}>
                  {React.cloneElement(step.icon, { size: 20 })}
                </div>
              </div>

              <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProfessionalSection;