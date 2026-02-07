import React from 'react';
import { Globe, Award, Users, Zap } from 'lucide-react';

const About = () => {
  const features = [
    { icon: <Globe className="w-6 h-6" />, title: "Global Reach", desc: "Serving clients across 30+ countries with localized expertise." },
    { icon: <Award className="w-6 h-6" />, title: "Award Winning", desc: "Recognized by industry leaders for exceptional digital craftsmanship." },
    { icon: <Users className="w-6 h-6" />, title: "Expert Team", desc: "World-class designers, developers, and strategists working in harmony." },
    { icon: <Zap className="w-6 h-6" />, title: "Fast Delivery", desc: "Agile methodology ensuring rapid, high-quality project completion." }
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-900/10 rounded-full border border-cyan-900/20">
            Who We Are
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We are a <span className="text-gradient">Global Agency</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            For over a decade, we've partnered with Fortune 500 companies and ambitious startups alike to redefine what's possible on the web.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <div key={i} className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;