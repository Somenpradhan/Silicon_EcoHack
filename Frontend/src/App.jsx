import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage' // Your new Dashboard
import FarmProfile from './pages/FarmProfile' 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'profile'

  // Helper to render the correct view
  const renderContent = () => {
    if (currentPage === 'home') {
      return <HomePage onNavigate={() => setCurrentPage('profile')} />;
    }
    return <FarmProfile onNavigate={() => setCurrentPage('home')} />;
  };

  return (
    <div className="antialiased min-h-screen">
      {!isLoggedIn ? (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      ) : (
        renderContent()
      )}
    </div>
  )
}

export default App
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaSeedling, FaCloudSun, FaStore, FaUser, FaMicrophone, FaSignOutAlt } from 'react-icons/fa';

import Login from './pages/login';
// Import Pages (To be created below)
// import Dashboard from './pages/Dashboard';
// ... etc

const Navbar = () => (
  <nav className="bg-green-700 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
    <h1 className="text-2xl font-bold flex items-center gap-2"><FaSeedling /> AgriSense</h1>
    <div className="flex gap-6 items-center font-medium">
      <Link to="/dashboard" className="hover:text-green-200 transition">Dashboard</Link>
      <Link to="/field" className="hover:text-green-200 transition">Field</Link>
      <Link to="/advisory" className="hover:text-green-200 transition">Advisory</Link>
      <Link to="/market" className="hover:text-green-200 transition">Market</Link>
      <Link to="/weather" className="hover:text-green-200 transition">Weather</Link>
      <Link to="/profile" className="hover:text-green-200 transition flex items-center gap-1"><FaUser /> Profile</Link>
      <button className="bg-red-500 px-3 py-1 rounded-md flex items-center gap-1 hover:bg-red-600 transition">
        <FaSignOutAlt /> Logout
      </button>
    </div>
  </nav>
);

const App = () => {
  const [isVoiceOpen, setVoiceOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-green-50 text-gray-800 font-sans">
        <Navbar />
        
        <main className="p-6 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/field" element={<FieldDetails />} />
            <Route path="/weather" element={<WeatherPage />} />
            {/* Add other routes here */}
          </Routes>
        </main>

        {/* Voice Assistant Floating Button */}
        <button 
          onClick={() => setVoiceOpen(!isVoiceOpen)}
          className="fixed bottom-8 right-8 bg-green-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition animate-pulse z-50"
        >
          <FaMicrophone size={28} />
        </button>

        <AnimatePresence>
          {isVoiceOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-24 right-8 bg-white p-6 rounded-2xl shadow-2xl border-2 border-green-500 w-80 z-50"
            >
              <p className="font-bold text-green-700 mb-2">AgriSense Voice Assistant</p>
              <div className="bg-gray-100 p-3 rounded-lg text-sm italic">
                "Your soil is suitable for rice. Heavy rain expected next week. I recommend organic compost today."
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;
