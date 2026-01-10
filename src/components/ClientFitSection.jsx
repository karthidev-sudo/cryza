import React, { useState } from 'react';
import { Check, X, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

const ClientFitSection = () => {
  const [hoveredSide, setHoveredSide] = useState(null); // 'fit' | 'mismatch' | null

  return (
    <section className="w-full text-neutral-200 py-24 px-6 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Grid Pattern (Low Opacity) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-3 block">
            Engagement Criteria
          </span>
          <h2 className="text-3xl font-medium text-white tracking-tight leading-snug">
            We are not for everyone. <br/>
            <span className="text-neutral-500">And that is by design.</span>
          </h2>
          <p className="mt-6 text-sm text-neutral-400 leading-relaxed border-l border-neutral-800 pl-4 max-w-lg">
            To guarantee results, we only accept projects where our methodology aligns with your goals. We prioritize depth over volume.
          </p>
        </div>

        {/* The Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10 rounded-sm bg-neutral-900/20 backdrop-blur-sm overflow-hidden">
          
          {/* LEFT: THE FIT (Positive) */}
          <div 
            onMouseEnter={() => setHoveredSide('fit')}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative p-8 md:p-12 transition-all duration-500 ${
              hoveredSide === 'mismatch' ? 'opacity-40 grayscale' : 'opacity-100'
            } ${hoveredSide === 'fit' ? 'bg-neutral-900/40' : 'bg-transparent'}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-500/10 rounded text-emerald-400 border border-emerald-500/20">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-medium text-white tracking-tight">Technical Partnership</h3>
            </div>

            <ul className="space-y-6">
              {[
                { title: 'Product-Minded', desc: 'You view your website as a scalable product, not a static brochure.' },
                { title: 'Value-Driven', desc: 'You prioritize long-term ROI and performance over "quick & cheap" fixes.' },
                { title: 'Iterative', desc: 'You understand that launch is just Day 1. You are ready to test and evolve.' }
              ].map((item, idx) => (
                <li key={idx} className="group flex items-start gap-4">
                  <div className="mt-1 min-w-[20px] h-[20px] rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-emerald-500 transition-colors">
                    <Check size={10} className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-200 group-hover:text-emerald-400 transition-colors">{item.title}</h4>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Subtle Gradient for Fit */}
            <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none transition-opacity duration-700 ${hoveredSide === 'fit' ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>


          {/* RIGHT: THE MISMATCH (Negative/Neutral) */}
          <div 
            onMouseEnter={() => setHoveredSide('mismatch')}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative p-8 md:p-12 border-t md:border-t-0 md:border-l border-white/5 transition-all duration-500 ${
              hoveredSide === 'fit' ? 'opacity-40 grayscale' : 'opacity-100'
            } ${hoveredSide === 'mismatch' ? 'bg-neutral-900/40' : 'bg-transparent'}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-amber-500/10 rounded text-amber-500 border border-amber-500/20">
                <AlertCircle size={20} />
              </div>
              <h3 className="text-lg font-medium text-white tracking-tight">Incompatible Scopes</h3>
            </div>

            <ul className="space-y-6">
              {[
                { title: 'Template Implementation', desc: 'We build custom architectures. We do not edit Wordpress themes.' },
                { title: 'Micromanagement', desc: 'We work best as partners with autonomy, not just pixel-pushers.' },
                { title: 'Rush Timelines', desc: 'Quality engineering takes time. We do not compromise stability for speed.' }
              ].map((item, idx) => (
                <li key={idx} className="group flex items-start gap-4">
                   <div className="mt-1 min-w-[20px] h-[20px] rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-900 group-hover:border-amber-500/50 transition-colors">
                    <X size={10} className="text-neutral-600 group-hover:text-amber-500 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-400 group-hover:text-amber-500 transition-colors">{item.title}</h4>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed group-hover:text-neutral-500 transition-colors">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
             
            {/* Subtle Gradient for Mismatch */}
            <div className={`absolute top-0 left-0 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none transition-opacity duration-700 ${hoveredSide === 'mismatch' ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>

        </div>

        {/* Bottom CTA / Conclusion */}
        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-6">
            Does this align with your vision?
          </p>
          <button className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-neutral-950 text-sm font-bold tracking-tight overflow-hidden rounded-full hover:bg-neutral-200 transition-all duration-300">
            <span className="relative z-10 flex items-center gap-2">
              Start The Conversation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ClientFitSection;