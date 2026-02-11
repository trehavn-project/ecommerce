
import React from 'react';
import { REVIEWS } from '../constants';

const ReviewCard: React.FC<{ review: typeof REVIEWS[0] }> = ({ review }) => (
  <div className="w-[400px] flex-shrink-0 p-8 border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group mx-4">
    <div>
      <div className="text-3xl serif text-trehavn-brown mb-4 opacity-30 group-hover:opacity-100 transition-opacity">“</div>
      <p className="text-gray-700 leading-relaxed italic mb-8 h-24 overflow-hidden line-clamp-3 font-light tracking-wide">
        {review.text}
      </p>
    </div>
    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
      <div className="flex flex-col">
        <span className="font-light text-sm tracking-widest text-trehavn-teal uppercase">{review.author}</span>
        <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-light">{review.location}</span>
      </div>
      <div className="flex text-yellow-500 text-[8px] space-x-0.5">
        {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
      </div>
    </div>
  </div>
);

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="reveal text-center mb-16 px-6">
        <h2 className="text-4xl md:text-6xl serif text-trehavn-teal mb-4 font-light lowercase">global reputation.</h2>
        <p className="text-gray-500 tracking-[0.3em] uppercase text-xs font-light">Trusted by discerning collectors on every continent.</p>
        
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center space-x-3 bg-gray-50 px-8 py-4 rounded-full border border-gray-100 shadow-sm">
            <span className="font-bold text-[#f1641e] tracking-tight text-2xl">Etsy</span>
            <div className="h-4 w-px bg-gray-200"></div>
            <span className="text-[10px] font-light uppercase tracking-[0.3em] text-gray-400">5.0 Star Seller</span>
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden reveal">
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        
        <div className="flex animate-marquee py-8">
          {/* First loop of reviews */}
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
          {/* Duplicate loop for seamless scroll */}
          {REVIEWS.map((review) => (
            <ReviewCard key={`dup-${review.id}`} review={review} />
          ))}
        </div>
      </div>

      <div className="reveal mt-12 text-center px-6">
        <a 
          href="https://www.etsy.com/shop/trehavn" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block text-[10px] uppercase tracking-[0.4em] font-light border-b border-trehavn-brown/20 pb-2 hover:border-trehavn-brown transition-all"
        >
          Explore 500+ Verified Reviews on Etsy
        </a>
      </div>
    </section>
  );
};

export default Reviews;
