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

// Added onNavigate prop to the main component
const HomePage = ({ onNavigate }) => {
  return (
    <div className="flex h-screen w-screen bg-[#FBFCFB] font-sans text-gray-800 overflow-hidden">
      
      {/* 1. LIGHTER SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-50 flex flex-col p-6 shrink-0 h-full">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-8 h-8 bg-[#22C55E] rounded-lg flex items-center justify-center shadow-md shadow-green-100">
            <span className="text-white text-sm">🌱</span>
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight leading-none text-gray-900">AgriSense</h1>
            <p className="text-[9px] font-semibold text-[#22C55E] uppercase tracking-wider mt-0.5">Farming Hub</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {/* Connected Sidebar NavItems to onNavigate */}
          <NavItem icon={<Home size={18} />} label="Home" active onClick={() => onNavigate('home')} />
          <NavItem icon={<Fields size={18} />} label="Fields" onClick={() => onNavigate('field')} />
          <NavItem icon={<Advisory size={18} />} label="Advisory" onClick={() => onNavigate('advisory')} />
          <NavItem icon={<Market size={18} />} label="Market" onClick={() => onNavigate('market')} />
        </nav>

        <div className="pt-6 border-t border-gray-50 space-y-4">
          <NavItem icon={<Settings size={18} />} label="Settings" />
          {/* Connected Profile section */}
          <div 
            className="bg-gray-50 p-3 rounded-2xl flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => onNavigate('profile')}
          >
            <div className="w-8 h-8 rounded-full border border-white overflow-hidden">
              <img src="https://i.pravatar.cc/100?u=john" alt="User" />
            </div>
            <div className="leading-tight">
              <p className="text-xs font-bold text-gray-900">John Doe</p>
              <p className="text-[10px] font-medium text-gray-400 uppercase">Premium</p>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. AIRY MAIN CONTENT */}
      <main className="flex-1 h-full overflow-y-auto bg-[#FBFCFB] px-12 py-10">
        
        {/* HEADER SECTION */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">Dashboard</h2>
            <p className="text-gray-400 text-sm font-medium">Monitoring your farm's health and productivity.</p>
          </div>
          <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
            <span className="text-xl">☀️</span>
            <div className="leading-tight">
              <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">Weather</p>
              <p className="text-base font-bold text-gray-700">24°C Sunny</p>
            </div>
          </div>
        </div>

        {/* 3. SEASON PROGRESS */}
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 mb-8 relative">
          <div className="flex justify-between items-center mb-10 px-2">
            <h3 className="text-lg font-bold text-gray-800">Season Progress</h3>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full">
              Wheat • Season 2
            </span>
          </div>

          <div className="relative flex justify-between items-center px-10">
            <div className="absolute top-1/2 left-20 right-20 h-1 bg-gray-50 -translate-y-1/2 z-0">
              <div className="h-full w-2/3 bg-[#22C55E]/60"></div>
            </div>

            <ProgressStep label="Seeds" icon={<Sprout size={20} />} completed />
            <ProgressStep label="Growth" icon={<CheckCircle2 size={20} />} completed />
            <ProgressStep label="Harvest" icon={<Tractor size={20} />} active />
            <ProgressStep label="Sale" icon={<TrendingUp size={20} />} />

            <div className="ml-8 border-l border-gray-100 pl-8 py-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Est. Profit</p>
              <p className="text-2xl font-bold text-gray-900">₹45,000</p>
            </div>
          </div>
        </div>

        {/* 4. STATUS CARDS */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <StatusCard label="12 Acres" sub="Total Land" icon="📏" />
          <StatusCard label="Wheat" sub="Active Crop" icon="🌿" />
          <StatusCard label="Healthy" sub="Soil Status" icon="😊" highlight />
        </div>

        {/* 5. QUICK ACTIONS - Connected Field Details to Analysis */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <ActionCard 
            title="Field Details" 
            image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800" 
            onClick={() => onNavigate('field')} 
          />
          <ActionCard 
            title="AI Advisory" 
            image="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800" 
            onClick={() => onNavigate('advisory')} 
          />
          <ActionCard 
            title="Marketplace" 
            image="https://images.unsplash.com/photo-1488459711616-23176a3e5b17?auto=format&fit=crop&q=80&w=800" 
            onClick={() => onNavigate('market')} 
          />
        </div>

        {/* 6. HELP BANNER */}
        <div className="bg-gray-900 p-6 rounded-[28px] flex items-center justify-between shadow-lg shadow-gray-200">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">🎧</div>
            <div>
              <h4 className="text-white font-bold">Need Expert Advice?</h4>
              <p className="text-gray-400 text-xs">Our agricultural consultants are available for a live chat.</p>
            </div>
          </div>
          <button className="bg-[#22C55E] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#16a34a] transition-all flex items-center gap-2 shadow-lg shadow-green-900/20">
            Start Chat <MessageCircle size={16} />
          </button>
        </div>
      </main>
    </div>
  );
};

/* --- REUSABLE COMPONENTS --- */

const NavItem = ({ icon, label, active = false, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
      active ? 'bg-[#F0FDF4] text-[#22C55E]' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
    }`}
  >
    {icon}
    <span className="text-sm font-semibold">{label}</span>
  </div>
);

// ProgressStep and StatusCard remain the same...

const ProgressStep = ({ label, icon, completed = false, active = false }) => (
  <div className="flex flex-col items-center gap-3 z-10">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
      completed ? 'bg-[#22C55E] text-white shadow-md shadow-green-100' : 
      active ? 'bg-white text-[#22C55E] border-2 border-[#22C55E] scale-110 shadow-lg shadow-green-50' : 
      'bg-white text-gray-200 border border-gray-100'
    }`}>
      {icon}
    </div>
    <span className={`text-[9px] font-bold uppercase tracking-wider ${active || completed ? 'text-gray-800' : 'text-gray-300'}`}>
      {label}
    </span>
  </div>
);

const StatusCard = ({ label, sub, icon, highlight = false }) => (
  <div className={`p-6 rounded-[24px] border border-gray-100 bg-white transition-all hover:border-[#22C55E]/30`}>
    <div className="text-2xl mb-4">{icon}</div>
    <h4 className={`text-xl font-bold ${highlight ? 'text-[#22C55E]' : 'text-gray-800'} mb-0.5`}>{label}</h4>
    <p className="text-gray-400 font-medium text-[10px] uppercase tracking-widest">{sub}</p>
  </div>
);

const ActionCard = ({ title, image, onClick }) => (
  <div 
    onClick={onClick}
    className="relative h-44 rounded-[24px] overflow-hidden group cursor-pointer shadow-sm border border-gray-100"
  >
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
    <div className="absolute bottom-5 left-6 right-6 flex justify-between items-center">
      <h4 className="text-sm font-bold text-white tracking-wide">{title}</h4>
      <div className="w-7 h-7 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all">
        <ChevronRight size={14} />
      </div>
    </div>
  </div>
);

export default HomePage;