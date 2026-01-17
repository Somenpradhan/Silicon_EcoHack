import React from 'react';
import { 
  User, 
  FileText, 
  Upload, 
  Trash2, 
  Download, 
  Edit2, 
  ChevronRight,
  LayoutDashboard,
  ShoppingCart,
  CloudSun,
  LogOut
} from 'lucide-react';

const FarmProfile = () => {
  return (
    /* THE FIX: min-h-screen and w-full without horizontal overflow */
    <div className="min-h-screen w-full bg-[#F8FBF9] font-sans text-gray-900 overflow-x-hidden">
      
      {/* 1. FULL WIDTH HEADER - Touches both edges */}
      
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#22C55E] rounded-xl flex items-center justify-center shadow-lg shadow-green-100">
            <span className="text-white text-xl font-bold">🌱</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-gray-900">AgriSense</span>
        </div>
  


      {/* 2. MAIN CONTENT - Set to w-full to prevent right-side grey gaps */}
      <main className="w-full px-6 lg:px-12 py-10">
        
        {/* TITLE SECTION */}
        <div className="mb-12">
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-4 tracking-tighter">My Farm Profile</h1>
          <p className="text-[#22C55E] font-extrabold text-xl lg:text-2xl uppercase tracking-tight">
            Manage your personal details and farm records.
          </p>
        </div>

        {/* 3. TOP GRID - Personal & Land Records */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          
          {/* PERSONAL DETAILS CARD */}
          <div className="bg-white p-8 lg:p-12 rounded-[50px] shadow-sm border border-gray-100 h-full">
            <div className="flex items-center gap-4 mb-12 text-[#22C55E]">
              <div className="p-3 bg-green-50 rounded-2xl">
                <User size={32} strokeWidth={3} />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Personal Details</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center lg:items-start">
              <div className="flex flex-col items-center gap-6">
                <div className="w-56 h-56 rounded-full overflow-hidden border-[12px] border-[#F0FDF4] shadow-2xl transform hover:rotate-3 transition-transform">
                   <img src="https://i.imgur.com/8Km9tLL.png" alt="Rajesh" className="w-full h-full object-cover" />
                </div>
                <button className="text-sm font-black text-[#22C55E] hover:underline uppercase tracking-widest bg-green-50 px-6 py-2 rounded-full">
                  Change Photo
                </button>
              </div>

              <div className="flex-1 w-full space-y-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2">Full Name</label>
                  <div className="relative group">
                    <input type="text" defaultValue="Rajesh Kumar" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#22C55E] rounded-3xl py-6 px-8 font-bold text-xl outline-none transition-all group-hover:bg-gray-100" />
                    <Edit2 size={22} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-[#22C55E] transition-colors" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2">Contact Number</label>
                  <div className="relative group">
                    <input type="text" defaultValue="+91 98765 43210" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#22C55E] rounded-3xl py-6 px-8 font-bold text-xl outline-none transition-all group-hover:bg-gray-100" />
                    <Edit2 size={22} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-[#22C55E] transition-colors" />
                  </div>
                </div>
                
                {/* SAVE BUTTON - Optimized for visibility */}
                <button className="w-full py-6 bg-[#22C55E] text-white text-2xl font-black rounded-3xl hover:bg-[#16a34a] shadow-xl shadow-green-100 transition-all transform active:scale-95 flex items-center justify-center gap-3">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* LAND RECORDS CARD */}
          <div className="bg-white p-8 lg:p-12 rounded-[50px] shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="flex items-center gap-4 mb-12 text-[#22C55E]">
              <div className="p-3 bg-green-50 rounded-2xl">
                <FileText size={32} strokeWidth={3} />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Land Records</h2>
            </div>

            <div className="border-4 border-dashed border-[#22C55E]/20 bg-[#F0FDF4]/30 rounded-[40px] p-12 lg:p-16 mb-8 flex flex-col items-center justify-center group cursor-pointer hover:bg-[#F0FDF4] hover:border-[#22C55E]/50 transition-all">
              <div className="w-20 h-20 bg-[#22C55E] rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-green-200 group-hover:scale-110 transition-transform">
                <Upload className="text-white" size={40} />
              </div>
              <p className="font-black text-3xl text-gray-900 mb-2">Upload Land Document</p>
              <p className="text-lg text-gray-400 font-bold uppercase tracking-tighter">Drag and drop or Click to browse</p>
            </div>

            <div className="space-y-4 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
               <FileItem name="Land_Deed_Registry_2020.pdf" detail="2.4 MB • 12 Oct 2023" />
               <FileItem name="Soil_Test_Report_Plot_A.jpg" detail="1.8 MB • 05 Jan 2024" />
            </div>
          </div>
        </div>

        {/* 4. PRODUCTION HISTORY - Full Wide View */}
        <div className="bg-white p-8 lg:p-12 rounded-[50px] shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-6">
            <div className="flex items-center gap-5 text-[#22C55E]">
              <div className="w-16 h-16 bg-orange-100 rounded-3xl flex items-center justify-center text-4xl shadow-sm">🚜</div>
              <h2 className="text-4xl font-black text-gray-900 tracking-tight">Production History</h2>
            </div>
            <button className="flex items-center gap-4 px-10 py-5 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl">
              <Download size={24} />
              Export Report
            </button>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left min-w-[1000px]">
              <thead className="text-[13px] font-black text-gray-400 uppercase tracking-[0.3em] border-b-2 border-gray-50">
                <tr>
                  <th className="pb-8 pl-6">Crop Type</th>
                  <th className="pb-8">Harvest Date</th>
                  <th className="pb-8">Total Yield</th>
                  <th className="pb-8 text-right pr-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <TableRow crop="Wheat" sub="Variety: HD-2967" date="April 2023" yieldVal="5.2 Tons" status="Sold" icon="🌾" />
                <TableRow crop="Rice (Paddy)" sub="Variety: Basmati 1121" date="October 2022" yieldVal="4.5 Tons" status="Sold" icon="🌾" />
                <TableRow crop="Corn (Maize)" sub="Variety: Hybrid 55" date="June 2022" yieldVal="3.8 Tons" status="Stored" icon="🌽" />
              </tbody>
            </table>
          </div>
          
          <button className="mt-12 mx-auto flex items-center gap-4 text-[#22C55E] font-black text-xl hover:translate-x-3 transition-transform group">
            View All History <ChevronRight size={28} className="group-hover:translate-x-1" />
          </button>
        </div>
      </main>
    </div>
  );
};

/* REUSABLE HELPERS */

const FileItem = ({ name, detail }) => (
  <div className="flex items-center gap-6 p-6 border-2 border-gray-50 rounded-[30px] hover:bg-gray-50 hover:border-green-100 transition-all group">
    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-red-500 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
      <FileText size={32} />
    </div>
    <div className="flex-1">
      <p className="font-black text-gray-900 text-xl">{name}</p>
      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{detail}</p>
    </div>
    <button className="p-4 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all">
      <Trash2 size={28} />
    </button>
  </div>
);

const TableRow = ({ crop, sub, date, yieldVal, status, icon }) => (
  <tr className="group hover:bg-[#F0FDF4]/40 transition-all">
    <td className="py-12 pl-6">
      <div className="flex items-center gap-8">
        <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center text-4xl shadow-sm group-hover:scale-110 transition-transform">{icon}</div>
        <div>
          <p className="text-2xl font-black text-gray-900">{crop}</p>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">{sub}</p>
        </div>
      </div>
    </td>
    <td className="py-12 text-2xl font-bold text-gray-700">{date}</td>
    <td className="py-12 text-3xl font-black text-gray-900">{yieldVal}</td>
    <td className="py-12 text-right pr-6">
      <span className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] inline-flex items-center gap-3 shadow-sm ${
        status === 'Sold' ? 'bg-[#F0FDF4] text-[#22C55E]' : 'bg-gray-100 text-gray-500'
      }`}>
        <span className={`w-3 h-3 rounded-full ${status === 'Sold' ? 'bg-[#22C55E] animate-pulse' : 'bg-gray-400'}`}></span>
        {status}
      </span>
    </td>
  </tr>
);

export default FarmProfile;