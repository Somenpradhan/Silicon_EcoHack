import { useState } from 'react';
import { Mail, Lock, ArrowRight, Smartphone, User } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) onLogin();
  };

  return (
    <div className="flex flex-col min-h-screen w-screen lg:flex-row font-sans bg-white overflow-hidden">
      
      {/* Left Section: Branding & Image */}
      <div className="relative flex flex-col justify-between w-full p-8 md:p-12 text-white lg:w-1/2 min-h-[450px] lg:min-h-screen">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80" 
            alt="AgriSense Farm" 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/20 lg:bg-black/10" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="flex items-center justify-center w-10 h-10 bg-[#22C55E] rounded-full shadow-lg">
               <span className="text-xl">🌱</span>
            </div>
            <span className="text-3xl font-bold tracking-tight">AgriSense</span>
          </div>
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Growing a<br />smarter future.
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed opacity-95 max-w-md">
              Access real-time soil data, AI-driven crop advice, and a community 
              of sustainable farmers.
            </p>
          </div>
        </div>

        <div className="relative z-10 flex gap-6 text-sm font-medium text-gray-200">
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 bg-white px-6 py-12">
        <div className="w-full max-w-md mx-auto">
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-[#22C55E] font-semibold text-lg">
              {isLogin 
                ? 'Please enter your details to access your farm.' 
                : 'Join AgriSense to start your smart farming journey.'}
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex p-1.5 mb-8 bg-gray-50 border border-gray-100 rounded-2xl">
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${
                isLogin 
                  
                  ? 'text-gray-900 bg-white shadow-sm border border-gray-100' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Create Account
            </button>
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${
                !isLogin 
                  ?  'text-gray-400 bg-white shadow-sm border border-gray-100' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Login
            </button>
          </div>

          <div className="space-y-6">
            {/* Show Full Name field only for signup */}
            {!isLogin && (
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-800">Full Name</label>
                <div className="relative">
                  <User className="absolute w-5 h-5 text-[#22C55E] -translate-y-1/2 left-4 top-1/2" />
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full py-4 pl-12 pr-4 text-black bg-gray-50/50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#22C55E] outline-none transition-all"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-800">Email Address</label>
              <div className="relative">
                <Mail className="absolute w-5 h-5 text-[#22C55E] -translate-y-1/2 left-4 top-1/2" />
                <input 
                  type="email" 
                  placeholder="farmer@example.com"
                  className="w-full py-4 pl-12 pr-4 bg-gray-50/50 border text-black border-gray-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#22C55E] outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-gray-800">Password</label>
                {isLogin && (
                  <a href="#" className="text-sm font-bold text-[#22C55E] hover:underline">
                    Forgot password?
                  </a>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute w-5 h-5 text-[#22C55E] -translate-y-1/2 left-4 top-1/2" />
                <input 
                  type="password" 
                  placeholder="Password"
                  className="w-full py-4 pl-12 pr-4 text-black bg-gray-50/50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#22C55E] outline-none transition-all"
                />
              </div>
            </div>

            {/* Show Confirm Password field only for signup */}
            {!isLogin && (
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-800">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute w-5 h-5 text-[#22C55E] -translate-y-1/2 left-4 top-1/2" />
                  <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="w-full py-4 pl-12 pr-4 text-black bg-gray-50/50 border border-gray-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#22C55E] outline-none transition-all"
                  />
                </div>
              </div>
            )}

            <button 
              onClick={handleSubmit}
              className="flex items-center justify-center w-full gap-2 py-4 mt-6 font-bold text-white bg-[#22C55E] rounded-2xl hover:bg-[#16a34a] transition-all shadow-lg shadow-green-100 text-lg active:scale-[0.98]"
            >
              {isLogin ? 'Sign In to AgriSense' : 'Create AgriSense Account'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <span className="px-4 bg-white">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 border border-gray-100 bg-white rounded-2xl hover:bg-gray-50 transition-all shadow-sm font-bold text-gray-800">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-md text-[12px] flex items-center justify-center font-black">G</span>
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-4 border border-gray-100 bg-white rounded-2xl hover:bg-gray-50 transition-all shadow-sm font-bold text-gray-800">
              <Smartphone className="w-5 h-5 text-gray-800" />
              Phone
            </button>
          </div>

          <p className="mt-10 text-center text-sm font-medium text-gray-500">
            Need help? <a href="#" className="font-bold text-gray-900 hover:underline">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;