
import React from 'react';

const TradeForm: React.FC = () => {
  return (
    <section id="inquire" className="py-16 md:py-24 bg-[#172120] text-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-6xl serif mb-6 font-light lowercase">elevate your portfolio.</h2>
          <p className="text-gray-300 font-light tracking-wide max-w-xl mx-auto">
            Exclusive trade program available for architects, interior designers, and retailers.
          </p>
        </div>

        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2 block group-focus-within:text-white transition-colors">Full Name</label>
              <input 
                type="text" 
                placeholder="Required"
                className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-white/20 font-light"
              />
            </div>
            <div className="group">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2 block group-focus-within:text-white transition-colors">Company / Studio Name</label>
              <input 
                type="text" 
                placeholder="Optional"
                className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-white/20 font-light"
              />
            </div>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2 block group-focus-within:text-white transition-colors">Business Type</label>
              <select className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-white transition-colors font-light appearance-none cursor-pointer">
                <option className="bg-[#172120] text-white">Interior Designer</option>
                <option className="bg-[#172120] text-white">Retailer</option>
                <option className="bg-[#172120] text-white">Hospitality</option>
                <option className="bg-[#172120] text-white">Individual</option>
              </select>
            </div>
            <div className="group">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2 block group-focus-within:text-white transition-colors">Website / Social Link</label>
              <input 
                type="text" 
                placeholder="Required"
                className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-white/20 font-light"
              />
            </div>
          </div>

          <div className="reveal group">
            <label className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2 block group-focus-within:text-white transition-colors">Project Details</label>
            <textarea 
              rows={4} 
              placeholder="Tell us about your upcoming project"
              className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-white/20 font-light resize-none"
            ></textarea>
          </div>

          <div className="reveal text-center pt-10">
            <button className="w-full md:w-auto px-20 py-6 bg-white text-[#172120] uppercase tracking-widest text-xs font-bold hover:bg-trehavn-brown hover:text-white transition-all duration-700">
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TradeForm;
