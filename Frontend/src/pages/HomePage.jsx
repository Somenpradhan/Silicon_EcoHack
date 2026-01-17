import React from 'react';
import { 
  Home, 
  Map as Fields, 
  Lightbulb as Advisory, 
  Store as Market, 
  Settings, 
  MessageCircle, 
  Tractor, 
  Sprout, 
  TrendingUp,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const HomePage = () => {
  return (
    /* FULL SCREEN FIX: 
       - h-screen & w-screen: Forces the app to 100% window size.
       - bg-[#F8FBF9]: Applied to the base to prevent any white/grey flickering.
    */
    <div className="flex h-screen w-screen bg-[#F8FBF9] font-sans text-gray-900 overflow-hidden">
      
      {/* 1. SIDEBAR - Stays fixed to the left edge with no gaps */}
      <aside className="w-72 bg-white border-r border-gray-100 flex flex-col p-8 shrink-0 h-full shadow-sm">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-[#22C55E] rounded-xl flex items-center justify-center shadow-lg shadow-green-100">
            <span className="text-white text-xl">🌱</span>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter leading-none">AgriSense</h1>
            <p className="text-[10px] font-bold text-[#22C55E] uppercase tracking-widest mt-1">Sustainable Farming</p>
          </div>
        </div>

        <nav className="flex-1 space-y-4">
          <NavItem icon={<Home size={22} />} label="Home" active />
          <NavItem icon={<Fields size={22} />} label="Fields" />
          <NavItem icon={<Advisory size={22} />} label="Advisory" />
          <NavItem icon={<Market size={22} />} label="Market" />
        </nav>

        <div className="pt-8 border-t border-gray-50 space-y-6">
          <NavItem icon={<Settings size={22} />} label="Settings" />
          <div className="bg-[#F0FDF4] p-4 rounded-3xl flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
              <img src="https://i.pravatar.cc/100?u=john" alt="User" />
            </div>
            <div>
              <p className="text-sm font-black text-gray-900">John Doe</p>
              <p className="text-[10px] font-bold text-[#22C55E] uppercase">Pro Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. MAIN DASHBOARD AREA - flex-1 ensures it pushes to the absolute right edge */}
      <main className="flex-1 h-full overflow-y-auto bg-[#F8FBF9] px-10 py-10 lg:px-16">
        
        {/* HEADER SECTION - Wide spacing */}
        <div className="flex justify-between items-center mb-12 w-full">
          <div>
            <h2 className="text-5xl font-black text-gray-900 tracking-tighter mb-2">Welcome back, Farmer</h2>
            <p className="text-gray-400 font-bold text-lg">Here is what's happening on your farm today.</p>
          </div>
          <div className="bg-white px-8 py-5 rounded-[32px] shadow-sm border border-gray-100 flex items-center gap-5">
            <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center text-2xl">☀️</div>
            <div>
              <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Today's Weather</p>
              <p className="text-2xl font-black text-gray-900">24°C Sunny</p>
            </div>
          </div>
        </div>

        {/* 3. SEASON PROGRESS TRACKER - Expanded Width */}
        <div className="bg-white p-12 rounded-[56px] shadow-sm border border-gray-100 mb-12 relative w-full">
          <div className="flex justify-between items-center mb-16">
            <h3 className="text-2xl font-black text-gray-900">Current Season Progress</h3>
            <span className="bg-[#F0FDF4] text-[#22C55E] px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest border border-green-50">
              Wheat • Season 2
            </span>
          </div>

          <div className="relative flex justify-between items-center px-12">
            <div className="absolute top-1/2 left-24 right-24 h-2.5 bg-gray-50 -translate-y-1/2 z-0 rounded-full">
              <div className="h-full w-2/3 bg-[#22C55E] rounded-full shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-1000"></div>
            </div>

            <ProgressStep label="Seeds" icon={<Sprout size={28} />} completed />
            <ProgressStep label="Growth" icon={<CheckCircle2 size={28} />} completed />
            <ProgressStep label="Harvesting" icon={<Tractor size={28} />} active />
            <ProgressStep label="Selling" icon={<TrendingUp size={28} />} />

            <div className="ml-12 bg-[#F0FDF4] p-8 rounded-[40px] border-4 border-white shadow-2xl shadow-green-100/50 text-center min-w-[220px] transition-transform hover:scale-105">
              <p className="text-[11px] font-black text-[#22C55E] uppercase tracking-widest mb-1">Est. Profit</p>
              <p className="text-4xl font-black text-gray-900">+₹45,000</p>
            </div>
          </div>
        </div>

        {/* 4. FARM STATUS CARDS - Full width grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <StatusCard label="12 Acres" sub="Field Size" icon="📏" color="bg-white" />
          <StatusCard label="Wheat" sub="Current Crop" icon="🌿" color="bg-white" />
          <StatusCard label="Healthy" sub="Soil Mood" icon="😊" color="bg-[#F0FDF4]" textColor="text-[#22C55E]" activeBorder />
        </div>

        {/* 5. QUICK ACTIONS - Massive grid to fill space */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mb-12">
          <ActionCard 
            title="Field Details" 
            desc="View health maps & soil data" 
            image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000"
          />
          <ActionCard 
            title="AI Advisory" 
            desc="Get expert farming tips" 
            image="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1000"
          />
          <ActionCard 
            title="Marketplace" 
            desc="Check prices & sell crops" 
            image="https://images.unsplash.com/photo-1488459711616-23176a3e5b17?auto=format&fit=crop&q=80&w=1000"
          />
        </div>

        {/* 6. HELP BANNER - Edge to edge content */}
        <div className="bg-white p-10 rounded-[48px] border border-gray-100 flex flex-col lg:row items-center justify-between shadow-sm gap-8 mb-10">
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 bg-[#F0FDF4] rounded-[24px] flex items-center justify-center text-4xl shadow-inner">🎧</div>
            <div>
              <h4 className="text-2xl font-black text-gray-900">Need help understanding your data?</h4>
              <p className="text-gray-400 font-bold text-lg">Our agricultural experts are online to assist you in real-time.</p>
            </div>
          </div>
          <button className="w-full lg:w-auto bg-[#22C55E] text-white px-12 py-6 rounded-[24px] font-black text-xl hover:bg-[#16a34a] shadow-2xl shadow-green-200 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-4">
            Chat Now <MessageCircle size={24} />
          </button>
        </div>
      </main>
    </div>
  );
};

/* --- REUSABLE COMPONENTS --- */

const NavItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-4 px-6 py-5 rounded-2xl cursor-pointer transition-all duration-300 ${
    active ? 'bg-[#F0FDF4] text-[#22C55E] shadow-sm' : 'text-gray-400 hover:bg-gray-50'
  }`}>
    <span className={active ? 'text-[#22C55E]' : 'text-gray-400'}>{icon}</span>
    <span className="text-lg font-black">{label}</span>
  </div>
);

const ProgressStep = ({ label, icon, completed = false, active = false }) => (
  <div className="flex flex-col items-center gap-5 z-10">
    <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 ${
      completed ? 'bg-[#22C55E] text-white' : 
      active ? 'bg-yellow-400 text-gray-900 scale-125 border-[6px] border-white' : 
      'bg-white text-gray-200 border-2 border-gray-50'
    }`}>
      {icon}
    </div>
    <span className={`text-xs font-black uppercase tracking-[0.2em] ${active || completed ? 'text-gray-900' : 'text-gray-300'}`}>
      {label}
    </span>
  </div>
);

const StatusCard = ({ label, sub, icon, color, textColor = "text-gray-900", activeBorder = false }) => (
  <div className={`p-12 rounded-[56px] border ${activeBorder ? 'border-[#22C55E] border-2' : 'border-gray-100'} ${color} shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}>
    <div className="w-16 h-16 bg-[#F8FBF9] rounded-2xl flex items-center justify-center text-3xl shadow-inner mb-10">
      {icon}
    </div>
    <h4 className={`text-5xl font-black ${textColor} tracking-tighter mb-2`}>{label}</h4>
    <p className="text-gray-400 font-bold uppercase text-xs tracking-[0.3em]">{sub}</p>
  </div>
);

const ActionCard = ({ title, desc, image }) => (
  <div className="relative rounded-[56px] overflow-hidden group cursor-pointer shadow-lg border border-white">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
    <div className="absolute bottom-12 left-12 right-12">
      <h4 className="text-3xl font-black text-white mb-2 tracking-tight">{title}</h4>
      <p className="text-white/70 font-bold text-lg mb-6">{desc}</p>
      <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
        View Details <ChevronRight size={18} />
      </div>
    </div>
  </div>
);

export default HomePage;