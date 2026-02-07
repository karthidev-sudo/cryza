import React from 'react';
import { Search, Code2, Palette, Bot, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      icon: <Search />, 
      title: "SEO Optimization", 
      color: "text-cyan-400", 
      bg: "bg-cyan-400/10",
      desc: "Dominate search rankings with data-driven strategies that put your brand at the top." 
    },
    { 
      icon: <Code2 />, 
      title: "Web Development", 
      color: "text-purple-400", 
      bg: "bg-purple-400/10",
      desc: "Cutting-edge web applications built with modern frameworks like React and Next.js." 
    },
    { 
      icon: <Palette />, 
      title: "UI/UX Design", 
      color: "text-pink-400", 
      bg: "bg-pink-400/10",
      desc: "Intuitive interfaces and immersive experiences that delight users and drive engagement." 
    },
    { 
      icon: <Bot />, 
      title: "AI Integration", 
      color: "text-emerald-400", 
      bg: "bg-emerald-400/10",
      desc: "Harness the power of artificial intelligence to automate and personalize your workflow." 
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We provide a full-stack digital experience, handling everything from initial design to final deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group p-8 md:p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <div className="absolute top-8 right-8 text-slate-600 group-hover:text-white transition-colors">
                <ArrowUpRight className="w-6 h-6" />
              </div>

              <div className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center ${s.color} mb-8`}>
                {React.cloneElement(s.icon, { className: "w-7 h-7" })}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all">
                {s.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;