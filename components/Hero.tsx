
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=2000" 
        className="absolute inset-0 w-full h-full object-cover scale-110" 
        alt="Reclaimed Wood Art" 
      />
      
      <div className="relative z-20 reveal active w-full max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-9xl serif text-white mb-8 tracking-tight font-light leading-none lowercase">
          Nature, refined.
        </h1>
        <p className="text-white/80 text-xs md:text-sm uppercase tracking-[0.6em] mb-12 max-w-xl mx-auto font-sans font-light">
          Rare wood installations for singular interiors.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
          <a 
            href="#collection" 
            className="w-full sm:w-auto px-12 py-5 bg-white text-trehavn-teal uppercase tracking-[0.4em] text-[9px] font-bold hover:bg-trehavn-brown hover:text-white transition-all duration-700"
          >
            Enter Collection
          </a>
          <button 
            onClick={() => window.print()}
            className="w-full sm:w-auto px-12 py-5 border border-white/30 text-white uppercase tracking-[0.4em] text-[9px] font-bold hover:bg-white hover:text-trehavn-teal transition-all duration-700 backdrop-blur-sm"
          >
            Download Catalog
          </button>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 opacity-30">
        <div className="w-px h-16 bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;
