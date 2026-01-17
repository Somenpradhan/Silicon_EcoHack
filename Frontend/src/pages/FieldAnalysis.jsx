import React from 'react';
import { 
  Search, 
  Leaf, 
  FlaskConical, 
  PlayCircle, 
  Info,
  ArrowLeft,
  MapPin
} from 'lucide-react';

const FieldAnalysis = ({ onNavigate }) => {
  return (
    /* FIX: h-screen + overflow-y-auto creates an internal scroll area 
      so the bottom half is accessible even if the app layout is "fixed".
    */
    <div className="w-full h-screen overflow-y-auto pr-2 space-y-8 pb-40 text-gray-800 animate-in fade-in duration-500 custom-scrollbar">
      
      {/* HEADER & COMPACT SEARCH */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('home')}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-400"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Field Analysis</h2>
            <p className="text-xs text-gray-400 font-medium">PATA ID: 632 4233 593</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-xl border border-gray-100 w-full md:w-[40%]">
          <div className="flex-1 flex items-center px-3 gap-2">
            <Search className="text-gray-300" size={16} />
            <input 
              type="text" 
              placeholder="Search PATA ID..." 
              className="bg-transparent w-full outline-none text-sm font-medium"
            />
            <MapPin size={14} className="text-gray-300 cursor-pointer hover:text-green-500" />
          </div>
          <button className="bg-[#22C55E] text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-green-600 transition-all shadow-sm">
            Analyze
          </button>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Data & Metrics */}
        <div className="lg:col-span-8 space-y-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatusBadge icon={<Leaf size={22} />} label="Soil Mood" value="Healthy & Fertile" color="bg-green-50 text-green-600" />
            <StatusBadge icon={<FlaskConical size={22} />} label="Soil Type" value="Loamy" color="bg-orange-50 text-orange-600" />
          </div>

          {/* NUTRIENT PROFILE */}
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-2">
                <Info size={16} className="text-gray-300" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Nutrient Composition</h3>
              </div>
              <span className="text-[10px] font-bold text-green-500 bg-green-50 px-3 py-1 rounded-full uppercase">Updated 2 days ago</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <NutrientCircle label="Nitrogen (N)" value={75} color="text-blue-500" status="Optimal" />
              <NutrientCircle label="Phosphorus (P)" value={50} color="text-green-500" status="Balanced" />
              <NutrientCircle label="Potassium (K)" value={25} color="text-orange-400" status="Low Attention" />
            </div>
          </div>

          {/* ORGANIC ADDITIVES */}
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
             <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Recommended Organic Additives</h4>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <AltCropCard title="Compost" desc="Enriches Soil Structure" icon="🌿" />
               <AltCropCard title="Manure" desc="High Nitrogen Boost" icon="🌾" />
               <AltCropCard title="Bone Meal" desc="Natural Phosphorus" icon="🦴" />
             </div>
          </div>
        </div>

        {/* RIGHT COLUMN: AI & Education */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* AI CARD */}
          <div className="bg-[#111827] p-8 rounded-[32px] text-white relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[400px]">
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest">AI Prediction</span>
              </div>
              
              <div>
                <h3 className="text-4xl font-black mb-3 leading-tight">Corn<br/>(Maize)</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Loamy soil with current Nitrogen retention levels makes **Corn** the highest yielding choice for this zone.
                </p>
              </div>
            </div>

            <button className="relative z-10 w-full mt-8 bg-[#22C55E] py-4 rounded-2xl font-bold text-sm hover:bg-green-400 transition-all shadow-lg active:scale-[0.98]">
              Apply Strategy
            </button>

            <div className="absolute right-[-40px] top-[-20px] opacity-10 rotate-12 pointer-events-none">
               <Leaf size={240} />
            </div>
          </div>

          {/* VIDEO TUTORIAL */}
          <div className="bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm group cursor-pointer">
            <div className="relative h-44 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=600" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt="Tutorial"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <PlayCircle size={48} className="text-white opacity-80 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-sm font-bold text-gray-800">Mastering Bio-materials</h4>
              <p className="text-[10px] text-gray-400 mt-1 uppercase font-semibold tracking-wider italic">Featured Course</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

/* --- REUSABLE COMPONENTS --- */

const StatusBadge = ({ icon, label, value, color }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-50 shadow-sm flex items-center gap-5 hover:border-green-100 transition-colors">
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color} shadow-inner`}>
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
      <p className="text-xl font-bold text-gray-900 leading-tight">{value}</p>
    </div>
  </div>
);

const NutrientCircle = ({ label, value, color, status }) => (
  <div className="flex flex-col items-center py-4 text-center">
    <div className="relative w-28 h-28 mb-6">
      <svg className="w-full h-full -rotate-90">
        <circle cx="56" cy="56" r="50" fill="transparent" stroke="#F3F4F6" strokeWidth="10" />
        <circle cx="56" cy="56" r="50" fill="transparent" stroke="currentColor" strokeWidth="10" 
          strokeDasharray={314.15} strokeDashoffset={314.15 - (314.15 * value) / 100}
          strokeLinecap="round" className={`${color} transition-all duration-1000 ease-out`} />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-2xl font-black text-gray-800">{value}%</span>
    </div>
    <p className="text-sm font-bold text-gray-900">{label}</p>
    <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${color}`}>{status}</p>
  </div>
);

const AltCropCard = ({ title, desc, icon }) => (
  <div className="bg-gray-50/50 p-6 rounded-2xl border border-transparent hover:border-green-100 hover:bg-white transition-all cursor-pointer group text-center">
    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">{icon}</div>
    <p className="text-sm font-bold text-gray-800">{title}</p>
    <p className="text-[10px] text-gray-400 font-medium mt-1 leading-normal">{desc}</p>
  </div>
);

export default FieldAnalysis;