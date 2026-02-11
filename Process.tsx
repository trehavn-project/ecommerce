
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'RECLAIMED HERITAGE',
      description: 'We do not fell trees. We rescue them. Every slab is 100% reclaimed timber, salvaged from ancient groves and forests where they stood for centuries. This ensures a production cycle that is as ethical as it is exquisite.'
    },
    {
      id: '02',
      title: 'ARTISAN PRECISION',
      description: 'Hand-poured resin. Diamond-polished finishes. Our studio operates with the precision of a laboratory and the soul of an atelier.'
    },
    {
      id: '03',
      title: 'MUSEUM GRADE FINISH',
      description: 'Treated with natural, eco-friendly oils for a silk-matte touch. Crated and shipped globally with white-glove attention to detail.'
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-[#fcfcfc] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="reveal flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.5em] text-trehavn-brown font-bold mb-4 block">The Making</span>
            <h2 className="text-4xl md:text-6xl serif text-trehavn-teal font-light leading-none lowercase">uncompromising standards.</h2>
          </div>
          <div className="pb-2">
            <div className="w-12 h-px bg-trehavn-teal/30 mb-2"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400">Turkey to World</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {steps.map((step) => (
            <div key={step.id} className="reveal group">
              <div className="flex items-center space-x-6 mb-8">
                <span className="text-4xl serif italic text-trehavn-teal/20 group-hover:text-trehavn-teal/100 transition-colors duration-500">{step.id}</span>
                <div className="h-px flex-grow bg-gray-200"></div>
              </div>
              <h3 className="text-xl serif tracking-[0.15em] text-trehavn-teal mb-6 font-light uppercase">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-light text-base tracking-wide">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
