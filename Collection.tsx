
import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="reveal group flex flex-col space-y-6">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 border border-black/5">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] ease-out"
        />
        <div className="absolute top-4 left-4 text-[7px] tracking-[0.4em] font-medium text-white/40 uppercase">
          {product.sku}
        </div>
      </div>

      <div className="flex flex-col space-y-3 px-1">
        <div className="flex justify-between items-baseline border-b border-gray-100 pb-3">
          <h3 className="text-2xl serif text-trehavn-teal font-light">
            {product.name}
          </h3>
          <span className="text-[8px] tracking-[0.2em] text-gray-400 font-sans uppercase">{product.tagline}</span>
        </div>
        
        <p className="text-[11px] leading-relaxed text-gray-500 font-light line-clamp-2">
          {product.description}
        </p>
        
        <button className="text-[7px] uppercase tracking-[0.4em] text-trehavn-teal font-bold hover:translate-x-1 transition-transform inline-flex items-center pt-2">
          Inquire
          <span className="ml-3 w-8 h-[1px] bg-trehavn-teal/20"></span>
        </button>
      </div>
    </div>
  );
};

const Collection: React.FC = () => {
  return (
    <section id="collection" className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="reveal mb-24">
          <span className="text-[10px] uppercase tracking-[0.6em] text-trehavn-brown font-bold block mb-6">Archive</span>
          <h2 className="text-6xl md:text-8xl serif text-trehavn-teal leading-tight font-light lowercase">Bespoke <br/> artifacts.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-24">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
