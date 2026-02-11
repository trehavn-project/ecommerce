
import React from 'react';

const TrustBadge: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center space-x-3 px-6 py-3 rounded-full border border-gray-200 bg-white shadow-sm hover:border-trehavn-teal/30 transition-all duration-500 cursor-default group">
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#172120] flex items-center justify-center">
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        className="w-3 h-3 text-white" 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
    <span className="text-[11px] md:text-xs uppercase tracking-[0.15em] font-light text-trehavn-teal group-hover:text-trehavn-brown transition-colors">
      {label}
    </span>
  </div>
);

const TrustBar: React.FC = () => {
  const badges = [
    "Reclaimed Timber",
    "Artisan Precision",
    "Eco-Friendly Oils",
    "Museum Grade",
    "Sustainable Mastery"
  ];

  return (
    <section className="py-12 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-hide">
        <div className="reveal flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-4 py-4">
          {badges.map((badge, index) => (
            <TrustBadge key={index} label={badge} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
