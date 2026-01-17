import React from 'react';
import { User, FileText, Upload, Trash2, Download, Edit2, ChevronRight } from 'lucide-react';

const FarmProfile = () => {
  return (
    <div className="min-h-screen w-full bg-[#F8FBF9] font-sans text-gray-900">
      
      {/* FULL WIDTH HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-10 py-5 flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#22C55E] rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-bold">🌱</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900">AgriSense</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-12 text-sm font-black uppercase tracking-widest">
          <a href="#" className="text-gray-400 hover:text-[#22C55E] transition-colors">Dashboard</a>
          <a href="#" className="text-[#22C55E] border-b-2 border-[#22C55E] pb-1">My Farm</a>
          <a href="#" className="text-gray-400 hover:text-[#22C55E] transition-colors">Marketplace</a>
          <a href="#" className="text-gray-400 hover:text-[#22C55E] transition-colors">Weather</a>
        </nav>

        <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#22C55E] shadow-sm">
          <img src="https://i.imgur.com/8Km9tLL.png" alt="Profile" className="object-cover w-full h-full" />
        </div>
      </header>

      {/* MAIN CONTENT AREA - Responsive sizing for laptop */}
      <main className="w-full max-w-[1600px] mx-auto p-8 lg:p-12">
        
        <div className="mb-12">
          <h1 className="text-6xl font-black text-gray-900 mb-3 tracking-tight">My Farm Profile</h1>
          <p className="text-[#22C55E] font-bold text-xl">Manage your personal details and farm records.</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 mb-10">
          
          {/* PERSONAL DETAILS - Bright & Visible */}
          <div className="bg-white p-10 rounded-[48px] shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-10 text-[#22C55E]">
              <User size={28} strokeWidth={3} />
              <h2 className="text-2xl font-black text-gray-900">Personal Details</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center lg:items-start">
              <div className="flex flex-col items-center gap-5">
                <div className="w-48 h-48 rounded-full overflow-hidden border-[8px] border-green-50 shadow-xl">
                   <img src="https://i.imgur.com/8Km9tLL.png" alt="Rajesh" className="w-full h-full object-cover" />
                </div>
                <button className="text-sm font-black text-[#22C55E] hover:underline uppercase tracking-tighter">Change Photo</button>
              </div>

              <div className="flex-1 w-full space-y-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                  <div className="relative">
                    <input type="text" defaultValue="Rajesh Kumar" className="w-full bg-gray-50 border-none rounded-3xl py-5 px-6 font-bold text-lg outline-none focus:ring-2 focus:ring-[#22C55E]/20" />
                    <Edit2 size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Contact Number</label>
                  <div className="relative">
                    <input type="text" defaultValue="+91 98765 43210" className="w-full bg-gray-50 border-none rounded-3xl py-5 px-6 font-bold text-lg outline-none focus:ring-2 focus:ring-[#22C55E]/20" />
                    <Edit2 size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300" />
                  </div>
                </div>
                {/* HIGH VISIBILITY BUTTON */}
                <button className="w-full py-5 bg-[#22C55E] text-white text-xl font-black rounded-3xl hover:bg-[#16a34a] shadow-2xl shadow-green-100 transition-all transform active:scale-95">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* LAND RECORDS - Clean Laptop Layout */}
          <div className="bg-white p-10 rounded-[48px] shadow-sm border border-gray-100 flex flex-col">
            <div className="flex items-center gap-3 mb-10 text-[#22C55E]">
              <FileText size={28} strokeWidth={3} />
              <h2 className="text-2xl font-black text-gray-900">Land Records</h2>
            </div>

            <div className="border-3 border-dashed border-[#22C55E]/30 bg-[#F0FDF4]/40 rounded-[40px] p-12 mb-8 flex flex-col items-center justify-center group cursor-pointer hover:bg-[#F0FDF4] transition-all">
              <div className="w-16 h-16 bg-[#22C55E] rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-green-200 group-hover:scale-110 transition-transform">
                <Upload className="text-white" size={32} />
              </div>
              <p className="font-black text-2xl text-gray-900 mb-1">Upload Land Document</p>
              <p className="text-sm text-gray-400 font-bold">PDF, JPEG, or PNG supported</p>
            </div>

            <div className="space-y-4 overflow-y-auto max-h-[300px] pr-2">
               <FileItem name="Land_Deed_Registry_2020.pdf" detail="2.4 MB • 12 Oct 2023" />
               <FileItem name="Soil_Test_Report_Plot_A.jpg" detail="1.8 MB • 05 Jan 2024" />
            </div>
          </div>
        </div>

        {/* 3. PRODUCTION HISTORY - Wide Table */}
        <div className="bg-white p-12 rounded-[48px] shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4 text-[#22C55E]">
              <span className="text-4xl">🚜</span>
              <h2 className="text-3xl font-black text-gray-900">Production History</h2>
            </div>
            <button className="flex items-center gap-3 px-8 py-4 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-2xl font-black text-sm transition-all border border-gray-100 shadow-sm">
              <Download size={22} />
              Export Report
            </button>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left min-w-[1000px]">
              <thead className="text-[12px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-50">
                <tr>
                  <th className="pb-8 pl-6">Crop Type</th>
                  <th className="pb-8">Harvest Date</th>
                  <th className="pb-8">Total Yield</th>
                  <th className="pb-8">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <TableRow crop="Wheat" sub="Variety: HD-2967" date="April 2023" yieldVal="5.2 Tons" status="Sold" icon="🌾" />
                <TableRow crop="Rice (Paddy)" sub="Variety: Basmati 1121" date="October 2022" yieldVal="4.5 Tons" status="Sold" icon="🌾" />
                <TableRow crop="Corn (Maize)" sub="Variety: Hybrid 55" date="June 2022" yieldVal="3.8 Tons" status="Stored" icon="🌽" />
              </tbody>
            </table>
          </div>
          
          <button className="mt-12 mx-auto flex items-center gap-3 text-[#22C55E] font-black text-lg hover:translate-x-2 transition-transform">
            View All History <ChevronRight size={24} />
          </button>
        </div>
      </main>
    </div>
  );
};

/* REUSABLE HELPERS */

const FileItem = ({ name, detail }) => (
  <div className="flex items-center gap-5 p-5 border border-gray-50 rounded-[28px] hover:bg-gray-50 transition-all group">
    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-red-500 shadow-sm border border-gray-100">
      <FileText size={28} />
    </div>
    <div className="flex-1">
      <p className="font-black text-gray-900 text-base">{name}</p>
      <p className="text-xs font-bold text-gray-400">{detail}</p>
    </div>
    <button className="p-3 text-gray-200 hover:text-red-500 transition-colors">
      <Trash2 size={24} />
    </button>
  </div>
);

const TableRow = ({ crop, sub, date, yieldVal, status, icon }) => (
  <tr className="group hover:bg-[#F0FDF4]/20 transition-all">
    <td className="py-10 pl-6">
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">{icon}</div>
        <div>
          <p className="text-xl font-black text-gray-900">{crop}</p>
          <p className="text-sm font-bold text-gray-400">{sub}</p>
        </div>
      </div>
    </td>
    <td className="py-10 text-xl font-bold text-gray-700">{date}</td>
    <td className="py-10 text-2xl font-black text-gray-900">{yieldVal}</td>
    <td className="py-10">
      <span className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest inline-flex items-center gap-2 ${
        status === 'Sold' ? 'bg-[#F0FDF4] text-[#22C55E]' : 'bg-gray-100 text-gray-500'
      }`}>
        <span className={`w-2 h-2 rounded-full ${status === 'Sold' ? 'bg-[#22C55E]' : 'bg-gray-400'}`}></span>
        {status}
      </span>
    </td>
  </tr>
);

export default FarmProfile;