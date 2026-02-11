
import React from 'react';

const FooterLogo: React.FC = () => (
  <div className="flex flex-col items-start group text-trehavn-teal">
    <div className="flex flex-col mb-0.5 opacity-60 group-hover:opacity-100 transition-opacity">
      <span className="text-[5px] md:text-[6px] font-light uppercase tracking-widest leading-none">EST. 1990</span>
      <span className="text-[5px] md:text-[6px] font-light uppercase tracking-widest leading-none">LOCATED IN USA</span>
    </div>
    <div className="flex items-end">
      <span className="text-2xl md:text-4xl font-black tracking-tighter lowercase leading-none font-sans">trhv</span>
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-current rounded-full ml-0.5 mb-1 md:mb-1.5"></div>
    </div>
    <div className="mt-1 opacity-50 group-hover:opacity-100 transition-opacity text-left">
      <span className="text-[5px] md:text-[6px] font-light uppercase tracking-[0.15em] block leading-none">
        RECLAIMED WOOD, GLASS & MOSS <span className="font-black italic">ATELIER</span>
      </span>
    </div>
  </div>
);

const SocialIcon: React.FC<{ name: string; href: string; children: React.ReactNode }> = ({ name, href, children }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex flex-col items-center group"
  >
    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center transition-all duration-500 shadow-[6px_6px_12px_#e5e5e5,-6px_-6px_12px_#ffffff] group-hover:shadow-[inset_2px_2px_5px_#e5e5e5,inset_-2px_-2px_5px_#ffffff] group-hover:-translate-y-2 group-hover:rotate-[8deg] border border-gray-50/50">
      <div className="text-trehavn-teal group-hover:scale-110 transition-transform duration-500">
        {children}
      </div>
    </div>
    <span className="mt-3 text-[7px] uppercase tracking-[0.3em] text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 font-light">
      {name}
    </span>
  </a>
);

const PaymentIcon: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`h-6 px-1.5 flex items-center justify-center bg-white border border-gray-200 rounded-[3px] shadow-sm ${className}`}>
    {children}
  </div>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-16 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-16">
          <div className="flex-shrink-0">
            <FooterLogo />
          </div>
          
          {/* 3D Styled Social Icons */}
          <div className="flex items-center space-x-8 md:space-x-12">
            <SocialIcon name="Instagram" href="https://instagram.com/trehavn">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </SocialIcon>

            <SocialIcon name="Pinterest" href="https://pinterest.com/trehavn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.033-1.002 2.324-1.488 3.121 1.12.345 2.304.532 3.535.532 6.621 0 11.988-5.367 11.988-11.987C24.005 5.367 18.638 0 12.017 0z"/>
              </svg>
            </SocialIcon>

            <SocialIcon name="LinkedIn" href="https://linkedin.com/company/trehavn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </SocialIcon>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-6">
            <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0">
              <button id="catalog" onClick={() => window.print()} className="text-[9px] uppercase tracking-widest font-light text-gray-400 hover:text-trehavn-brown transition-colors">Digital Catalog</button>
              <a href="#inquire" className="text-[9px] uppercase tracking-widest font-light text-trehavn-teal hover:text-trehavn-brown transition-colors">Trade Inquiry</a>
            </div>
          </div>
        </div>

        {/* Bottom Strip mimicking reference image */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pt-8 border-t border-gray-100 font-light gap-8">
          <div className="flex flex-col space-y-4">
            <div className="text-[12px] text-gray-600 font-sans tracking-tight">
              © {currentYear} TREHAVN. Handcrafted in Turkey, Delivered Worldwide.
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-gray-500 font-sans">
              <a href="#" className="hover:text-trehavn-teal transition-colors">Refund policy</a>
              <a href="#" className="hover:text-trehavn-teal transition-colors">Privacy policy</a>
              <a href="#" className="hover:text-trehavn-teal transition-colors">Terms of service</a>
              <a href="#" className="hover:text-trehavn-teal transition-colors">Shipping policy</a>
              <a href="#" className="hover:text-trehavn-teal transition-colors">Contact information</a>
              <a href="#" className="hover:text-trehavn-teal transition-colors">Cancellation policy</a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Amazon Pay */}
            <PaymentIcon>
               <svg className="w-6 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
            </PaymentIcon>
            {/* Amex */}
            <PaymentIcon className="bg-[#0070d1] border-none">
              <span className="text-[7px] text-white font-bold italic tracking-tighter">AMEX</span>
            </PaymentIcon>
            {/* Apple Pay */}
            <PaymentIcon>
              <div className="flex items-center space-x-0.5">
                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.96.95-2.12 2.1-3.64 2.1-1.54 0-2.03-1-3.66-1-1.64 0-2.18 1-3.65 1-1.48 0-2.8-1.45-3.8-2.9C.25 16.5-1.07 10.5 1.04 6.94c1.05-1.78 2.85-2.9 4.84-2.93 1.5 0 2.92 1.04 3.84 1.04.9 0 2.62-1.23 4.41-1.05 1.8.18 3.16 1.05 4.04 2.3-3.15 1.88-2.65 6.02.5 7.28-.96 2.5-2.22 4.7-3.62 6.7zM13 3.5c0-1.85-1.63-3.46-3.43-3.5C9.4 1.95 11.23 3.5 13 3.5z"/></svg>
                <span className="text-[8px] font-bold">Pay</span>
              </div>
            </PaymentIcon>
            {/* Diners Club */}
            <PaymentIcon>
              <div className="w-3 h-3 border-2 border-[#0079be] rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-[#0079be] rounded-full"></div>
              </div>
            </PaymentIcon>
            {/* Discover */}
            <PaymentIcon>
               <span className="text-[7px] text-[#ff6000] font-black italic tracking-tighter uppercase">Discover</span>
            </PaymentIcon>
            {/* Google Pay */}
            <PaymentIcon>
              <div className="flex items-center space-x-0.5">
                <span className="text-[8px] font-bold text-gray-500 uppercase">G Pay</span>
              </div>
            </PaymentIcon>
            {/* Mastercard */}
            <PaymentIcon>
               <div className="flex -space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#eb001b] opacity-90"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f79e1b] opacity-90"></div>
               </div>
            </PaymentIcon>
            {/* PayPal */}
            <PaymentIcon>
               <span className="text-[8px] text-[#003087] font-black italic">Pay</span>
               <span className="text-[8px] text-[#009cde] font-black italic">Pal</span>
            </PaymentIcon>
            {/* Shop Pay */}
            <PaymentIcon className="bg-[#5a31f4] border-none">
              <span className="text-[8px] text-white font-bold tracking-tighter">shop<span className="text-[7px] opacity-70">Pay</span></span>
            </PaymentIcon>
            {/* Visa */}
            <PaymentIcon>
               <span className="text-[9px] text-[#1434cb] font-black italic uppercase">Visa</span>
            </PaymentIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
