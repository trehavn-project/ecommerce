
import React, { useState, useEffect } from 'react';

const AnnouncementBar = () => (
  <div className="bg-[#0a1110] text-white/40 py-2 text-center border-b border-white/5 relative z-[70]">
    <p className="text-[7px] md:text-[8px] uppercase tracking-[0.5em] font-light px-4">
      SUSTAINABLE ARTISTRY — ISTANBUL TO WORLDWIDE
    </p>
  </div>
);

const Logo: React.FC<{ isScrolled: boolean; isMenuOpen: boolean }> = ({ isScrolled, isMenuOpen }) => (
  <div className="flex items-center space-x-6 relative z-[80]">
    <a href="#" className={`flex flex-col items-start group transition-colors duration-700 ${isMenuOpen ? 'text-white' : (isScrolled ? 'text-trehavn-teal' : 'text-white')}`}>
      <div className="flex flex-col mb-1 opacity-50 group-hover:opacity-100 transition-opacity text-left">
        <span className="text-[5px] md:text-[6px] font-light uppercase tracking-widest leading-none">EST. 1990</span>
        <span className="text-[5px] md:text-[6px] font-light uppercase tracking-widest leading-none text-left">LOCATED IN USA</span>
      </div>
      <div className="flex items-end">
        <span className="text-2xl md:text-3xl font-black tracking-tighter lowercase leading-none font-sans">trhv</span>
        <div className="w-1.5 h-1.5 bg-current rounded-full ml-0.5 mb-1 transition-transform duration-500 group-hover:scale-150"></div>
      </div>
      <div className="mt-1 opacity-40 group-hover:opacity-100 transition-opacity text-left">
        <span className="text-[5px] md:text-[6px] font-light uppercase tracking-[0.15em] block leading-none">
          RECLAIMED WOOD, GLASS & MOSS <span className="font-black italic">ATELIER</span>
        </span>
      </div>
    </a>

    <div className={`h-8 w-[1px] hidden lg:block transition-colors duration-500 ${isMenuOpen ? 'bg-white/10' : (isScrolled ? 'bg-gray-200' : 'bg-white/10')}`}></div>

    <a 
      href="https://www.etsy.com/shop/trehavn" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hidden xl:flex flex-col items-start group"
    >
      <span className={`text-[7px] font-light uppercase tracking-[0.2em] mb-0.5 transition-colors ${isMenuOpen ? 'text-white/30' : (isScrolled ? 'text-gray-400 group-hover:text-trehavn-teal' : 'text-white/30 group-hover:text-white')}`}>Verified Seller</span>
      <div className="flex items-center space-x-2">
        <span className="font-bold text-[#f1641e] tracking-tight text-lg">Etsy</span>
        <div className="flex text-yellow-500 text-[6px] space-x-0.5">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
      </div>
    </a>
  </div>
);

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Collection', href: '#collection' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Inquire', href: '#inquire' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <AnnouncementBar />
      
      <nav className={`w-full transition-all duration-700 relative z-[60] px-8 md:px-16 flex justify-between items-center ${isScrolled || isMenuOpen ? 'py-5' : 'py-10'}`}>
        <div className={`absolute inset-0 transition-opacity duration-700 -z-10 ${isScrolled && !isMenuOpen ? 'opacity-100 bg-white/95 backdrop-blur-xl border-b border-gray-100' : 'opacity-0'}`}></div>
        
        <Logo isScrolled={isScrolled} isMenuOpen={isMenuOpen} />

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-[9px] font-sans font-semibold uppercase tracking-[0.5em] transition-all duration-500 relative group ${isScrolled ? 'text-trehavn-teal' : 'text-white'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-500 group-hover:w-full ${isScrolled ? 'bg-trehavn-teal' : 'bg-white'}`}></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden relative z-[80] group flex flex-col items-end justify-center w-8 h-8 focus:outline-none"
          aria-label="Menu"
        >
          <div className="relative w-6 h-2 flex flex-col justify-between items-end">
            <span className={`h-[1px] bg-current transition-all duration-500 ${isMenuOpen ? 'w-6 absolute top-1/2 -rotate-45 bg-white' : 'w-6 ' + (isScrolled ? 'bg-trehavn-teal' : 'bg-white')}`}></span>
            <span className={`h-[1px] bg-current transition-all duration-500 ${isMenuOpen ? 'w-6 absolute top-1/2 rotate-45 bg-white' : 'w-3 ' + (isScrolled ? 'bg-trehavn-teal' : 'bg-white')}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[50] flex items-center justify-center transition-all duration-700 ease-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-[#00171a]"></div>
        <div className="relative z-10 w-full px-12 flex flex-col space-y-10">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className={`text-3xl font-sans font-extralight text-white uppercase tracking-[0.4em] transition-all duration-700 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-4'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
