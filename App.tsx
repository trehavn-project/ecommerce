
import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Collection from './components/Collection';
import TrustBar from './components/TrustBar';
import Process from './components/Process';
import Reviews from './components/Reviews';
import TradeForm from './components/TradeForm';
import Footer from './components/Footer';

const ElevateNarrative: React.FC = () => (
  <section className="py-40 bg-[#fcfcfc] px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="reveal text-5xl md:text-8xl serif text-trehavn-teal mb-16 font-light lowercase">
        Quiet luxury.
      </h2>
      <p className="reveal text-trehavn-teal/80 leading-[2] font-light text-base md:text-xl tracking-wide max-w-2xl mx-auto">
        Your environment is the foundation of focus. We curate silence through material, replacing industrial noise with the grounding presence of reclaimed heritage.
      </p>
    </div>
  </section>
);

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative selection:bg-trehavn-brown selection:text-white overflow-x-hidden font-sans">
      <Navigation />
      
      <main>
        <Hero />
        <TrustBar />
        <Collection />
        <ElevateNarrative />
        <Process />
        <Reviews />
        <TradeForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
