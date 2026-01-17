import React, { useState } from 'react';
import { 
  Bell, CheckCircle, Circle, Camera, Droplets, Bug, 
  Home, Map as Fields, Lightbulb as Advisory, Store as Market, Settings, Search
} from 'lucide-react';

const AdvisoryPage = ({ onNavigate }) => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Watered North Field', completed: false },
    { id: 2, text: 'Applied Bio-Fertilizer', completed: true },
    { id: 3, text: 'Cleared weed patches', completed: false }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="flex h-screen w-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-hidden">
      
      {/* 1. COMPACT SIDEBAR */}
      <aside className="w-60 bg-white border-r border-slate-200 flex flex-col p-4 shrink-0 h-full">
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="w-7 h-7 bg-emerald-500 rounded flex items-center justify-center shadow-sm">
            <span className="text-white text-xs">🌱</span>
          </div>
          <h1 className="text-md font-bold tracking-tight text-slate-800">AgriSense</h1>
        </div>

        <nav className="flex-1 space-y-0.5">
          <NavItem icon={<Home size={16} />} label="Home" onClick={() => onNavigate('home')} />
          <NavItem icon={<Fields size={16} />} label="Fields" onClick={() => onNavigate('field')} />
          <NavItem icon={<Advisory size={16} />} label="Advisory" active />
          <NavItem icon={<Market size={16} />} label="Market" />
        </nav>

        <div className="pt-4 border-t border-slate-100 space-y-1">
          <NavItem icon={<Settings size={16} />} label="Settings" />
          <div className="mt-2 p-2 rounded-xl flex items-center gap-3 hover:bg-slate-50 cursor-pointer transition-colors" onClick={() => onNavigate('profile')}>
            <img className="w-7 h-7 rounded-full" src="https://i.pravatar.cc/100?u=john" alt="User" />
            <div className="leading-tight overflow-hidden">
              <p className="text-xs font-bold truncate">John Doe</p>
              <p className="text-[10px] text-slate-400 font-medium">PREMIUM PLAN</p>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. MAIN CONTENT */}
      <main className="flex-1 h-full overflow-y-auto px-8 py-6">
        
        {/* HEADER AREA */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Advisory & Alerts</h2>
            <p className="text-slate-500 text-sm font-medium">Smart recommendations for Jan 17, 2026</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="Search alerts..." 
                className="bg-white border border-slate-200 rounded-lg py-1.5 pl-9 pr-4 text-xs w-48 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
            </div>
            <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50">
              <Bell size={18} />
            </button>
          </div>
        </div>

        {/* TOP GRID: SMALLER CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Tasks Card */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
                  <CheckCircle size={18} />
                </div>
                <h3 className="text-base font-bold text-slate-800">Weekly Tasks</h3>
              </div>
              <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full uppercase">Progess: 60%</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tasks.map(task => (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all border ${
                    task.completed ? 'bg-slate-50 border-transparent opacity-60' : 'bg-white border-slate-100 hover:border-emerald-200 hover:shadow-sm'
                  }`}
                >
                  {task.completed ? <CheckCircle size={16} className="text-emerald-500" /> : <Circle size={16} className="text-slate-300" />}
                  <span className={`text-sm font-semibold ${task.completed ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Compact Scanner */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col">
            <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Camera size={18} className="text-slate-400" />
              Plant Doctor
            </h3>
            <div className="flex-1 border-2 border-dashed border-slate-100 rounded-xl flex flex-col items-center justify-center hover:bg-emerald-50/50 transition-all cursor-pointer group p-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-2 text-emerald-600">
                <Camera size={20} />
              </div>
              <p className="text-xs font-bold text-slate-800">Scan Leaf</p>
              <p className="text-[10px] text-slate-400 mt-0.5">AI Pest Detection</p>
            </div>
          </div>
        </div>

        {/* URGENT ALERTS: REFINED DESIGN */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Urgent Alerts</h3>
          <div className="space-y-3">
            <AlertRow 
              icon={<Droplets size={18} />} 
              color="text-blue-600" 
              bgColor="bg-blue-50"
              borderColor="border-blue-100"
              title="Heavy Rain Expected" 
              desc="Cover harvested corn. Canals need clearing by 4:00 PM."
            />
            <AlertRow 
              icon={<Bug size={18} />} 
              color="text-amber-600" 
              bgColor="bg-amber-50"
              borderColor="border-amber-100"
              title="Locust Warning" 
              desc="Nearby detection in North District. Check leaf undersides."
            />
          </div>
        </div>

        {/* HARVEST PREDICTION: COMPACT & CLEAN */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
               <h3 className="text-lg font-bold">Projected Yield</h3>
               <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold border border-emerald-500/30">CONFIRMED</span>
            </div>
            <p className="text-slate-400 text-xs font-medium max-w-xs">Analysis based on current satellite imagery and soil moisture metrics.</p>
          </div>
          
          <div className="flex items-center gap-10 relative z-10">
            <div className="text-center">
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Total Output</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">4.5</span>
                <span className="text-xs font-bold text-emerald-400 italic">T/Ha</span>
              </div>
            </div>
            <div className="w-px h-8 bg-slate-800"></div>
            <div className="text-center">
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Market Quality</p>
              <p className="text-2xl font-bold">Grade A</p>
            </div>
            <button className="bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors shadow-lg shadow-emerald-500/20">
              View Details
            </button>
          </div>
          {/* Subtle Background Pattern */}
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none translate-x-10 -translate-y-10">
             <Fields size={200} />
          </div>
        </div>
      </main>
    </div>
  );
};

/* --- SUB-COMPONENTS (OPTIMIZED FOR DESKTOP) --- */

const NavItem = ({ icon, label, active = false, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
      active ? 'bg-emerald-50 text-emerald-600' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
    }`}
  >
    {icon}
    <span className="text-xs font-bold">{label}</span>
  </div>
);

const AlertRow = ({ icon, color, bgColor, borderColor, title, desc }) => (
  <div className={`flex items-center justify-between p-4 rounded-xl border ${borderColor} ${bgColor} group hover:shadow-md transition-all`}>
    <div className="flex items-center gap-4">
      <div className={`w-9 h-9 ${color} bg-white rounded-lg flex items-center justify-center shadow-sm`}>
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-800">{title}</h4>
        <p className="text-xs text-slate-500 font-medium">{desc}</p>
      </div>
    </div>
    <button className={`text-[10px] font-black uppercase tracking-tighter px-3 py-1.5 rounded-lg border ${borderColor} bg-white hover:bg-slate-50 transition-colors`}>
      Resolve
    </button>
  </div>
);

export default AdvisoryPage;