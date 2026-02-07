import React from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start Your <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Ready to transform your digital presence? We'd love to hear about your project.
          </p>
        </div>

        <div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Message</label>
              <textarea 
                rows="4" 
                placeholder="Tell us about your project..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:border-cyan-400 focus:bg-white/10 focus:outline-none transition-all"
              ></textarea>
            </div>

            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/5">
            {[
              { icon: <Mail />, label: "Email", val: "hello@cryza.agency" },
              { icon: <MapPin />, label: "Location", val: "Global Remote" },
              { icon: <Phone />, label: "Phone", val: "+1 (555) 000-0000" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-cyan-400 mb-3">
                  {React.cloneElement(item.icon, { className: "w-4 h-4" })}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{item.label}</div>
                <div className="text-sm font-medium text-white">{item.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;