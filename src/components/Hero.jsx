import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Globe, Zap, ShieldCheck } from 'lucide-react';

const Hero = () => {
  // Animation Stagger Configuration
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-10 px-6 overflow-hidden bg-[#030014]">
      
      {/* --- 1. Ambient Background (Fixed & Optimized) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top Center Glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen" />
        {/* Bottom Right Glow */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full mix-blend-screen" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* --- 2. Main Content Container --- */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center flex-grow justify-center mt-4 md:mt-0"
      >
      
        {/* Hero Title - Responsive Sizing */}
        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-6">
          Crafting Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
            Masterpieces
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
          We bridge the gap between imagination and reality. An award-winning agency redefining the digital landscape for global brands.
        </motion.p>

        {/* Action Buttons - Stack on Mobile, Row on Desktop */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-2 group">
            Start Project 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-colors">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
            Showreel
          </button>
        </motion.div>

      </motion.div>

      {/* --- 3. Stats Bar (Fixed Layout Logic) --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-10 w-full max-w-6xl mx-auto mt-12 md:mt-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center md:items-start p-2">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Global</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">50+ Countries</div>
            <div className="text-xs text-slate-500">Client presence</div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center md:items-start p-2">
            <div className="flex items-center gap-2 text-purple-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Speed</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">99.9%</div>
            <div className="text-xs text-slate-500">Uptime guarantee</div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center md:items-start p-2">
            <div className="flex items-center gap-2 text-pink-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Secure</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white">ISO 27001</div>
            <div className="text-xs text-slate-500">Certified Agency</div>
          </div>

          {/* Social Proof (Avatars) */}
          <div className="flex flex-col items-center md:items-end justify-center p-2">
             <div className="flex -space-x-3 mb-2">
               {[1,2,3].map((i) => (
                 <img 
                   key={i}
                   className="w-10 h-10 rounded-full border-2 border-[#030014] bg-slate-700"
                   src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                   alt="User"
                 />
               ))}
               <div className="w-10 h-10 rounded-full border-2 border-[#030014] bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                 +2k
               </div>
             </div>
             <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-xs text-white ml-1 font-medium">5.0 Rating</span>
             </div>
          </div>

        </div>
      </motion.div>

    </section>
  );
};

export default Hero;