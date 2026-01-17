import React from 'react';
import { 
  Search, Phone, PlusCircle, ShoppingCart, Leaf, ArrowLeft
} from 'lucide-react';

const MarketPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#FBFCFB] font-sans text-slate-900">
      
      {/* 1. FLUID CONTAINER - Uses 95% of width for Laptop screens */}
      <main className="max-w-[100%] mx-auto px-8 py-10">
        
        {/* TOP NAVIGATION / HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4">
             {/* Optional Back Button for better UX in full screen */}
             <button 
                onClick={() => onNavigate('home')}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
             >
               <ArrowLeft size={20} />
             </button>
             <div>
               <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Marketplace & Waste</h2>
               <p className="text-emerald-500 text-sm font-semibold">Sell your fresh crops and farm waste easily.</p>
             </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search markets, crops, or buyers..." 
              className="bg-white border border-slate-200 rounded-full py-3 pl-11 pr-8 text-sm w-[400px] focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* MARKET ADVISORY CARD - Wider and taller for Laptop */}
        <section className="mb-14">
          <h3 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-6 uppercase tracking-wider">
            <span className="text-emerald-500 text-lg font-bold">📊</span> Live Market Advisory
          </h3>
          <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden flex h-[400px]">
            <div className="w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=1200" 
                alt="Organic Tomatoes" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-sm">
                <p className="text-[10px] font-bold text-emerald-600 uppercase">Top Trending</p>
              </div>
            </div>
            
            <div className="flex-1 p-12 flex flex-col justify-between bg-white">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-4xl font-black text-slate-900 leading-tight">Organic Tomatoes</h4>
                  <p className="text-sm text-slate-400 font-medium mt-2">Harvested 3 days ago • Greenfield Sector 4 • 150kg available</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Current Price</p>
                  <p className="text-4xl font-black text-slate-900">$2.50<span className="text-lg font-medium text-slate-400">/kg</span></p>
                </div>
              </div>

              <div className="bg-[#F8FBFA] rounded-[24px] p-8 border border-emerald-50 my-6">
                <div className="flex justify-between items-center mb-4">
                   <div className="flex items-center gap-2 text-sm font-bold text-slate-800 uppercase tracking-tight">
                     <span className="text-emerald-500">⏱</span> Freshness Indicator
                   </div>
                   <span className="text-sm font-black text-emerald-600">75% (Optimum)</span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex">
                  <div className="h-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-amber-400" style={{ width: '75%' }}></div>
                </div>
                <div className="flex justify-between mt-3 text-[11px] font-black uppercase tracking-widest text-slate-400 px-1">
                  <span className="text-emerald-500">Fresh</span>
                  <span className="text-amber-500">Good</span>
                  <span className="text-rose-500">Expired</span>
                </div>
              </div>

              <button className="w-full bg-[#15D137] hover:bg-[#12b32f] hover:scale-[1.01] text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20 text-lg">
                <ShoppingCart size={22} />
                Sell All Inventory Now
              </button>
            </div>
          </div>
        </section>

        {/* WASTE MARKETPLACE SECTION - 4 Column Grid for Full Screen */}
        <section className="mb-14">
          <div className="flex justify-between items-center mb-8">
            <h3 className="flex items-center gap-2 text-sm font-bold text-slate-800 uppercase tracking-wider">
              <span className="text-emerald-500 text-lg">♻️</span> Available Waste Deals
            </h3>
            <button className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-5 py-2.5 rounded-full font-bold text-xs hover:bg-emerald-100 transition-colors">
              Post New Waste <PlusCircle size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
            <WasteCard 
              img="https://images.unsplash.com/photo-1594488680186-0856948387ea?auto=format&fit=crop&q=80&w=400"
              title="80kg Banana Peel"
              price="$15"
              location="Sun Valley • 8km away"
            />
          </div>
        </section>

        {/* TIP SECTION - Full Width Banner */}
        <div className="bg-[#E6F9EA] border border-emerald-100 rounded-[32px] p-10 flex items-center gap-12">
          <div className="w-20 h-20 bg-[#15D137] rounded-3xl flex items-center justify-center shrink-0 shadow-lg rotate-3">
            <Leaf size={40} className="text-white" />
          </div>
          <div className="flex-1">
            <h5 className="font-black text-slate-900 text-xl mb-2">Maximize your earnings!</h5>
            <p className="text-sm text-slate-600 font-medium mb-6">Follow these verified community tips to move inventory faster.</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <TipStep num="01" text="High-quality photos in natural daylight increase buyer trust by 40%." />
              <TipStep num="02" text="Check daily market prices to stay competitive with local farms." />
              <TipStep num="03" text="Keep notifications ON to answer buyer inquiries in real-time." />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

/* --- MINI COMPONENTS --- */

const WasteCard = ({ img, title, price, location, badge, badgeColor }) => (
  <div className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <div className="h-52 relative overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      {badge && (
        <div className={`absolute top-5 left-5 ${badgeColor} text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg`}>
          {badge}
        </div>
      )}
    </div>
    <div className="p-7">
      <div className="flex justify-between items-start mb-2">
        <h5 className="text-base font-bold text-slate-900 max-w-[160px] leading-tight">{title}</h5>
        <span className="text-[#15D137] font-black text-lg">{price}</span>
      </div>
      <p className="text-xs text-slate-400 font-medium mb-8">📍 {location}</p>
      <div className="flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-2xl transition-colors border border-slate-200">
          <Phone size={14} /> Call
        </button>
        <button className="flex-1 bg-[#15D137] hover:bg-[#12b32f] text-white text-xs font-bold py-3 rounded-2xl transition-colors shadow-sm">
          Contact
        </button>
      </div>
    </div>
  </div>
);

const TipStep = ({ num, text }) => (
  <div className="flex items-start gap-4">
    <span className="text-[#15D137] text-2xl font-black italic opacity-20 leading-none">{num}</span>
    <p className="text-xs font-semibold text-slate-600 leading-relaxed">{text}</p>
  </div>
);

export default MarketPage;