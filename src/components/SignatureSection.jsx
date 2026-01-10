import React, { useEffect, useState, useRef } from 'react';
import { Asterisk } from 'lucide-react';

const SignatureSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const manifestoItems = [
    "We do not decorate. We distill.",
    "Code is the final layer of design.",
    "Speed is the only metric that never lies.",
    "Build for the decade, not the trend."
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full text-neutral-300 py-20 px-6 relative overflow-hidden"
    >
      {/* Subtle Background Wash */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-950/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>

      <div className="max-w-2xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* The Divider - The visual cue of a signature line */}
        <div className={`w-px h-16 bg-gradient-to-b from-transparent via-neutral-700 to-transparent mb-12 transition-all duration-1000 ${isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}></div>

        {/* Section Label */}
        <div className={`flex items-center gap-2 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Asterisk size={12} className="text-indigo-500 animate-[spin_10s_linear_infinite]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500">
            Core Philosophy
          </span>
        </div>

        {/* The Manifesto Statements */}
        <div className="space-y-8">
          {manifestoItems.map((item, index) => (
            <p 
              key={index}
              className={`text-xl md:text-2xl font-medium tracking-tight text-neutral-200 leading-normal transition-all duration-1000 ease-out`}
              style={{
                transitionDelay: `${300 + (index * 150)}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                filter: isVisible ? 'blur(0px)' : 'blur(4px)'
              }}
            >
              {item}
            </p>
          ))}
        </div>

        {/* The Sign-off */}
        <div 
          className={`mt-16 flex flex-col items-center gap-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="w-12 h-px bg-neutral-800"></div>
          <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest">
            CRYZA &copy; EST. 2024
          </span>
        </div>

      </div>
    </section>
  );
};

export default SignatureSection;