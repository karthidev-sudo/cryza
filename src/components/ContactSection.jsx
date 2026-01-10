import React from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-32 px-6 lg:px-12 relative">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">Ready to engineer <br/> something distinct?</h2>
            <p className="text-slate-400 max-w-md mb-12">We accept a limited number of engagements per quarter to ensure deep focus.</p>
          </div>
          <div className="space-y-4">
             <div className="flex items-center gap-3 text-slate-300">
               <div className="p-2 bg-white/5 rounded-full"><Mail size={16}/></div>
               <span>hello@cryza.agency</span>
             </div>
             <div className="flex items-center gap-3 text-slate-300">
               <div className="p-2 bg-white/5 rounded-full"><MapPin size={16}/></div>
               <span>San Francisco / Remote</span>
             </div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-8 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-slate-500">Name</label>
              <input type="text" className="w-full bg-black/20 border border-white/10 rounded p-3 text-white focus:border-cyan-500 outline-none transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-slate-500">Email</label>
              <input type="email" className="w-full bg-black/20 border border-white/10 rounded p-3 text-white focus:border-cyan-500 outline-none transition-colors" placeholder="john@company.com" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase text-slate-500">Project Details</label>
            <textarea rows="4" className="w-full bg-black/20 border border-white/10 rounded p-3 text-white focus:border-cyan-500 outline-none transition-colors resize-none" placeholder="Tell us about your goals..."></textarea>
          </div>

          <button className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded flex items-center justify-center gap-2 transition-colors">
            Submit Inquiry <Send size={16} />
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactSection;