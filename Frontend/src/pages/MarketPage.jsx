import React from 'react';
import { 
  Search, Phone, PlusCircle, ShoppingCart, Leaf
} from 'lucide-react';

const MarketPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FBFCFB] font-sans text-slate-900">
      
      {/* 1. MAX-WIDTH CONTAINER FOR LAPTOP VIEW */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        
        {/* HEADER SECTION */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Marketplace & Waste</h2>
            <p className="text-emerald-500 text-sm font-semibold mt-1">Sell your fresh crops and farm waste easily.</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
            <input 
              type="text" 
              placeholder="Search markets..." 
              className="bg-white border border-slate-200 rounded-full py-2 pl-9 pr-6 text-xs w-64 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* MARKET ADVISORY CARD */}
        <section className="mb-12">
          <h3 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-5">
            <span className="text-emerald-500 text-lg font-bold">📊</span> Market Advisory
          </h3>
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden flex h-[340px]">
            <div className="w-2/5 relative">
              <img 
                src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800" 
                alt="Organic Tomatoes" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-10 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 leading-tight">Organic Tomatoes</h4>
                  <p className="text-xs text-slate-400 font-medium mt-1">Harvested 3 days ago • 150kg available</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Market Price</p>
                  <p className="text-3xl font-black text-slate-900">$2.50<span className="text-sm font-medium text-slate-400">/kg</span></p>
                </div>
              </div>

              <div className="bg-[#F8FBFA] rounded-2xl p-6 border border-emerald-50">
                <div className="flex justify-between items-center mb-3">
                   <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-tight">
                     <span className="text-emerald-500">⏱</span> Freshness Level
                   </div>
                   <span className="text-xs font-bold text-slate-800">75%</span>
                </div>
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden flex">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-amber-400" style={{ width: '75%' }}></div>
                </div>
                <div className="flex justify-between mt-2 text-[10px] font-black uppercase tracking-tighter text-slate-400 px-1">
                  <span>Fresh</span>
                  <span className="text-amber-500">Good</span>
                  <span className="text-rose-500">Expired</span>
                </div>
                <p className="mt-3 text-[10px] text-slate-400 font-medium italic">
                   Sell within 2 days for the best price.
                </p>
              </div>

              <button className="w-full bg-[#15D137] hover:bg-emerald-600 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10">
                <ShoppingCart size={18} />
                Sell All Now
              </button>
            </div>
          </div>
        </section>

        {/* WASTE MARKETPLACE SECTION */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="flex items-center gap-2 text-sm font-bold text-slate-800">
              <span className="text-emerald-500 text-lg">♻️</span> Waste Marketplace
            </h3>
            <button className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs hover:text-emerald-700 transition-colors">
              Post Waste <PlusCircle size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <WasteCard 
              img="https://images.unsplash.com/photo-1536630596251-b12ba0d7f7cf?auto=format&fit=crop&q=80&w=400"
              title="100kg Rice Husk"
              price="$45"
              location="Greenfield Farm • 5km away"
              badge="Interested Buyer"
              badgeColor="bg-[#15D137]"
            />
            <WasteCard 
              img="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=400"
              title="500kg Wheat Stalks"
              price="$120"
              location="North Ridge • 12km away"
            />
            <WasteCard 
              img="https://images.unsplash.com/photo-1621460244084-219ad14ee799?auto=format&fit=crop&q=80&w=400"
              title="200kg Organic Compost Mix"
              price="$30"
              location="Riverbend Farm • 2km away"
              badge="High Demand"
              badgeColor="bg-[#15D137]"
            />
          </div>
        </section>

        {/* TIP SECTION */}
        <div className="bg-[#E6F9EA] border border-emerald-100 rounded-3xl p-8 flex items-center gap-8">
          <div className="w-14 h-14 bg-[#15D137] rounded-full flex items-center justify-center shrink-0 shadow-md">
            <Leaf size={28} className="text-white" />
          </div>
          <div className="flex-1">
            <h5 className="font-bold text-slate-900 text-base mb-2 leading-none">How to sell faster?</h5>
            <p className="text-xs text-slate-500 font-medium mb-4">Follow these three simple steps to earn more from your farm.</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <TipStep num="01" text="Take a clear photo in bright sunlight." />
              <TipStep num="02" text="Update the price daily to match others." />
              <TipStep num="03" text="Answer calls quickly from buyers." />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

/* --- MINI COMPONENTS --- */

const WasteCard = ({ img, title, price, location, badge, badgeColor }) => (
  <div className="bg-white rounded-[28px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
    <div className="h-44 relative overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      {badge && (
        <div className={`absolute top-4 left-4 ${badgeColor} text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-tight`}>
          {badge}
        </div>
      )}
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-1">
        <h5 className="text-sm font-bold text-slate-900 max-w-[150px] leading-tight">{title}</h5>
        <span className="text-[#15D137] font-black text-sm">{price}</span>
      </div>
      <p className="text-[10px] text-slate-400 font-medium mb-6">📍 {location}</p>
      <div className="flex gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-[10px] font-bold rounded-xl transition-colors border border-slate-200">
          <Phone size={12} /> Call
        </button>
        <button className="flex-1 bg-[#15D137] hover:bg-emerald-600 text-white text-[10px] font-bold py-2.5 rounded-xl transition-colors shadow-sm">
          Contact
        </button>
      </div>
    </div>
  </div>
);

const TipStep = ({ num, text }) => (
  <div className="flex items-center gap-2">
    <span className="text-[#15D137] text-sm font-black italic opacity-30">{num}</span>
    <p className="text-[11px] font-medium text-slate-600 max-w-[160px] leading-snug">{text}</p>
  </div>
);

export default MarketPage;