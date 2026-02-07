import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: "Stellar Health", cat: "Web Platform", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" },
    { title: "Vortex Gaming", cat: "UI/UX Design", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" },
    { title: "Eco Architect", cat: "Branding", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" },
    { title: "Nova Finance", cat: "App Development", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" }
  ];

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Work</span></h2>
            <p className="text-slate-400 max-w-md">
              A selection of our most passionate and impactful projects.
            </p>
          </div>
          <button className="px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium">
            View All Projects
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group relative h-72 md:h-96 rounded-3xl overflow-hidden cursor-pointer">
              {/* Image Background */}
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 mb-2 text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-900/30 rounded border border-cyan-500/20">
                  {p.cat}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-50 transition-colors">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;