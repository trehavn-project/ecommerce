
import React, { useState } from 'react';

const BrandStory: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=800", // Clock
    "https://images.unsplash.com/photo-1594913366159-1832ffefc511?auto=format&fit=crop&q=80&w=800", // Mirror
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800", // Moss
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800", // Mirror 2
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800", // Clock 2
    "https://images.unsplash.com/photo-1581781870027-346766440833?auto=format&fit=crop&q=80&w=800", // Art
  ];

  return (
    <section id="philosophy" className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 md:mb-20 reveal">
          <div className="flex items-center space-x-4 mb-8 md:mb-12">
            <span className="text-[10px] md:text-sm tracking-[0.5em] text-trehavn-teal font-light uppercase">Trehavn</span>
            <div className="h-[1px] w-12 md:w-24 bg-gray-200"></div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-4xl sm:text-5xl md:text-8xl serif text-trehavn-teal lowercase tracking-tight text-center font-light">
            <span>trehavn's</span>
            <div className="relative px-4 md:px-6 py-1 md:py-2">
              <span className="">story</span>
              {/* Purple Selection Box Style */}
              <div className="absolute inset-0 border-[1.5px] md:border-[2px] border-[#9333ea]"></div>
              <div className="absolute -top-1.5 md:-top-2 left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full border-[1.5px] md:border-[2px] border-[#9333ea] bg-white"></div>
            </div>
          </div>
        </div>

        {/* 6-Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-12 md:mb-16 reveal">
          {images.map((src, i) => (
            <div key={i} className="aspect-square bg-gray-100 overflow-hidden relative group">
              <img 
                src={src} 
                alt={`Trehavn Artifact ${i + 1}`} 
                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 border border-black/5 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Collapsible Narrative Section */}
        <div className="flex flex-col items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="group flex flex-col items-center space-y-4 mb-8 md:mb-12 reveal w-full"
          >
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-trehavn-teal font-light group-hover:text-trehavn-brown transition-colors">
              {isOpen ? 'Close Narrative' : 'Read Our Philosophy'}
            </span>
            <div className={`w-px h-10 md:h-12 bg-gray-200 transition-all duration-700 ${isOpen ? 'scale-y-150 bg-trehavn-brown' : ''}`}></div>
          </button>

          <div className={`overflow-hidden transition-all duration-[1.5s] ease-in-out ${isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 pb-16 md:pb-20 border-b border-gray-100">
              
              {/* Column 1 */}
              <div className="relative">
                <p className="text-gray-700 leading-[1.8] font-light text-base text-justify font-sans tracking-wide">
                  <span className="float-left text-6xl md:text-8xl font-thin leading-[0.8] mr-4 mt-2 text-trehavn-teal serif">N</span>
                  ext to nature, there is no greater designer. In a world that is obsessed with the artificial and the temporary, we have chosen to stand for the authentic and the permanent. We believe that the earth has already done the hardest work. The twisted grain of ancient wood, the deep hue of breathing moss, and the fluid clarity of glass do not need to be improved by human hands. They only need to be revealed. Our role at Trehavn is not to invent, but to frame these elements with a quiet confidence.
                </p>
              </div>

              {/* Column 2 */}
              <div>
                <p className="text-gray-700 leading-[1.8] font-light text-base text-justify font-sans tracking-wide">
                  We strip away the noise to uncover the silence. When you bring a Trehavn piece into your space, you are not just adding an object; you are introducing a moment of absolute balance. It serves as an anchor in chaotic life, a reminder to pause and breathe. We reject the concept of decoration for the sake of decoration. Instead, we focus on the raw elegance of the material itself.
                </p>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col justify-between">
                <p className="text-gray-700 leading-[1.8] font-light text-base text-justify font-sans tracking-wide">
                  Each creation is a dialogue between the artisan and the element. We listen to what the wood wants to say and we follow the natural lines of the earth. This process requires patience, humility, and a refusal to compromise. The result is a collection that does not shout for attention but commands it through presence alone. This is the essence of calm authority. It is the signature of restraint in a loud world. ◆
                </p>
                
                <div className="mt-12 pt-8 border-t border-gray-50 flex justify-between items-center opacity-30">
                  <span className="text-[8px] uppercase tracking-[0.4em] font-sans">Trehavn Product Catalog</span>
                  <span className="text-[8px] font-sans">05</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BrandStory;
