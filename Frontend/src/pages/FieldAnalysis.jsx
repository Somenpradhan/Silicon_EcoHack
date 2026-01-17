import React from 'react';
import { 
  Search, 
  MapPin, 
  Leaf, 
  FlaskConical, 
  PlayCircle, 
  Info,
  ArrowLeft
} from 'lucide-react';

const FieldAnalysis = ({ onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-10 text-gray-800">
      
      {/* HEADER & COMPACT SEARCH */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('home')}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-400"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Field Analysis</h2>
            <p className="text-xs text-gray-400 font-medium">PATA ID: 632 4233 593</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-xl border border-gray-100 w-full md:w-96">
          <div className="flex-1 flex items-center px-3 gap-2">
            <Search className="text-gray-300" size={16} />
            <input 
              type="text" 
              placeholder="Search PATA ID..." 
              className="bg-transparent w-full outline-none text-sm font-medium"
            />
          </div>
          <button className="bg-[#22C55E] text-white px-5 py-2 rounded-lg text-xs font-bold hover:bg-green-600 transition-all shadow-sm shadow-green-100">
            Analyze
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: NUTRIENTS & STATUS */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* QUICK STATUS BAR */}
          <div className="grid grid-cols-2 gap-4">
            <StatusBadge icon={<Leaf size={16} />} label="Soil Mood" value="Healthy & Fertile" color="bg-green-50 text-green-600" />
            <StatusBadge icon={<FlaskConical size={16} />} label="Soil Type" value="Loamy" color="bg-orange-50 text-orange-600" />
          </div>

          {/* NUTRIENT PROFILE - More compact */}
          <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-50 pb-4">
              <Info size={14} className="text-gray-300" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Nutrient Profile</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <NutrientCircle label="Nitrogen" value={75} color="text-blue-500" status="Optimal" />
              <NutrientCircle label="Phosphorus" value={50} color="text-green-500" status="Balanced" />
              <NutrientCircle label="Potassium" value={25} color="text-orange-400" status="Low" />
            </div>
          </div>

          {/* ALTERNATE CROPS */}
          <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
             <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Recommended Soil Additives</h4>
             <div className="grid grid-cols-3 gap-3">
               <AltCropCard title="Compost" desc="Soil Structure" icon="🌿" />
               <AltCropCard title="Manure" desc="Nitrogen Boost" icon="🌾" />
               <AltCropCard title="Bone Meal" desc="Phosphorus" icon="🦴" />
             </div>
          </div>
        </div>

        {/* RIGHT COLUMN: AI & VIDEO */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* AI RECOMMENDATION - Focused card */}
          <div className="bg-green-900 p-6 rounded-[24px] text-white relative overflow-hidden shadow-xl shadow-green-100">
            <div className="relative z-10 space-y-4">
              <span className="bg-white/20 text-[9px] font-bold px-2 py-1 rounded-md uppercase tracking-widest backdrop-blur-sm">AI Recommendation</span>
              <div>
                <h3 className="text-2xl font-bold">Corn (Maize)</h3>
                <p className="text-green-100/70 text-xs mt-2 leading-relaxed">
                  Best choice for loamy soil and your current Nitrogen levels. Maximizes yield for Season 3.
                </p>
              </div>
              <div className="pt-2">
                <button className="w-full bg-[#22C55E] py-2.5 rounded-xl font-bold text-xs hover:bg-green-400 transition-colors">Apply Strategy</button>
              </div>
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
               <Leaf size={140} />
            </div>
          </div>

          {/* COMPACT VIDEO CARD */}
          <div className="bg-white border border-gray-100 rounded-[24px] overflow-hidden shadow-sm">
            <div className="relative h-32 group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <PlayCircle className="text-white/80" size={32} />
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-xs font-bold text-gray-800 leading-tight">Mastering Bio-materials</h4>
              <p className="text-[10px] text-gray-400 mt-1">4 min • Recommended for you</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

/* --- COMPACT UI COMPONENTS --- */

const StatusBadge = ({ icon, label, value, color }) => (
  <div className="bg-white p-3 rounded-2xl border border-gray-50 shadow-sm flex items-center gap-3">
    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">{label}</p>
      <p className="text-sm font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

const NutrientCircle = ({ label, value, color, status }) => (
  <div className="flex flex-col items-center py-2">
    <div className="relative w-16 h-16 mb-2">
      <svg className="w-full h-full -rotate-90">
        <circle cx="32" cy="32" r="28" fill="transparent" stroke="#F9FAFB" strokeWidth="5" />
        <circle cx="32" cy="32" r="28" fill="transparent" stroke="currentColor" strokeWidth="5" 
          strokeDasharray={175.8} strokeDashoffset={175.8 - (175.8 * value) / 100}
          strokeLinecap="round" className={color} />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xs font-black">{value}%</span>
    </div>
    <p className="text-[10px] font-bold text-gray-900">{label}</p>
    <p className={`text-[9px] font-bold uppercase ${color}`}>{status}</p>
  </div>
);

const AltCropCard = ({ title, desc, icon }) => (
  <div className="bg-gray-50/50 p-3 rounded-xl border border-transparent hover:border-green-100 hover:bg-white transition-all cursor-pointer">
    <div className="text-lg mb-1">{icon}</div>
    <p className="text-[11px] font-bold text-gray-800">{title}</p>
    <p className="text-[9px] text-gray-400 leading-tight">{desc}</p>
  </div>
);

export default FieldAnalysis;