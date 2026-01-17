import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSeedling, FaLock, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple Local Authentication Mock
    if (email && password) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
      // Redirect to Dashboard
      navigate('/dashboard');
    } else {
      alert('Please enter your details to continue.');
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-green-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-w-5xl w-full border border-green-100"
      >
        {/* Left Side: Visual/Branding (Desktop Only) */}
        <div className="hidden md:flex md:w-1/2 bg-green-700 p-12 text-white flex-col justify-between relative overflow-hidden">
          <div className="z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white p-3 rounded-2xl text-green-700 shadow-lg">
                <FaSeedling size={32} />
              </div>
              <h1 className="text-4xl font-black tracking-tight">AgriSense</h1>
            </div>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Growing smarter <br /> Together.
            </h2>
            <p className="text-green-100 text-lg max-w-xs">
              AI-powered tools designed specifically for the modern sustainable farmer.
            </p>
          </div>

          <div className="z-10 flex items-center gap-4 bg-green-800/50 p-6 rounded-2xl backdrop-blur-sm border border-green-600/50">
            <div className="w-12 h-12 rounded-full bg-green-400 border-4 border-white overflow-hidden flex-shrink-0">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Farmer"
                alt="Farmer"
              />
            </div>
            <p className="italic text-sm">
              "AgriSense helped me increase my wheat yield by 20% this year!" <br />
              <strong>— Farmer Ramesh</strong>
            </p>
          </div>

          {/* Decorative background shapes */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-green-600 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-0 right-0 w-60 h-60 bg-green-500 rounded-full blur-3xl opacity-30"></div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center md:text-left">
            <h3 className="text-3xl font-extrabold text-gray-800 mb-2">Welcome Back</h3>
            <p className="text-gray-500 font-medium">
              Please enter your account details to access your farm.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-green-600 transition">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-0 focus:border-green-500 transition-all text-lg font-medium outline-none"
                  placeholder="name@farm.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-green-600 transition">
                  <FaLock />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:ring-0 focus:border-green-500 transition-all text-lg font-medium outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <span className="text-sm font-bold text-gray-600">Remember Me</span>
              </label>
              <a
                href="#"
                className="text-sm font-bold text-green-700 hover:text-green-800 underline decoration-2 underline-offset-4"
              >
                Forgot?
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-green-200 transition-all flex items-center justify-center gap-3 text-xl"
            >
              Log In to My Farm <FaArrowRight />
            </motion.button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-gray-500 font-bold uppercase text-xs tracking-[0.2em] mb-4">
              New to AgriSense?
            </p>
            <Link
              to="/signup"
              className="inline-block w-full py-3 border-2 border-green-200 text-green-700 font-black rounded-2xl hover:bg-green-50 transition"
            >
              CREATE NEW ACCOUNT
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;