import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import logo from '../assets/modal2.png';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      // Small delay for smooth animation
      setTimeout(() => setIsVisible(true), 10);
    } else {
      document.body.style.overflow = 'unset';
      setIsVisible(false);
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      {/* Backdrop with gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-purple-900/95 to-indigo-900/95 backdrop-blur-sm"></div> */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-green-800/95 to-green-600/95 backdrop-blur-sm"></div>

      {/* Modal Content */}
      <div
        className={`relative bg-gradient-to-br from-white via-green-50/30 to-teal-50/30 rounded-3xl shadow-[0_0_60px_rgba(99,102,241,0.4),0_0_100px_rgba(147,51,234,0.3),0_0_140px_rgba(236,72,153,0.2)] max-w-5xl w-full mx-4 my-8 sm:my-12 lg:my-16 transform transition-all duration-500 overflow-hidden ${
          isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        } ${isVisible ? 'animate-bounce-slow' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated gradient border - Enhanced glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-green-600 via-emerald-500 to-green-700 rounded-3xl blur-sm opacity-90 animate-pulse"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 rounded-3xl blur-lg opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-emerald-400 via-green-500 to-teal-600 rounded-3xl blur-2xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white rounded-full p-2.5 shadow-xl hover:bg-red-50 transition-all duration-200 hover:scale-110 group border-2 border-gray-100"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-gray-800 group-hover:text-red-600 transition-colors" />
        </button>

        {/* Content Container - Horizontal Layout */}
        <div className="relative bg-gradient-to-br from-white via-green-50/30 to-teal-50/30 rounded-3xl flex flex-col sm:flex-row">
          {/* Image Section - Left Side */}
          <div className="relative w-full sm:w-2/5 flex-shrink-0">
        <div className="relative h-full overflow-hidden rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none sm:rounded-br-none">
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-teal-500/10 to-green-500/10 z-10"></div>
          
          <img
            src={logo}
            alt="1% Freedom Movement"
            className="w-full h-full object-cover min-h-[300px] sm:min-h-[400px]"
          />
          
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-green-400/50 rounded-tl-2xl"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-teal-400/50 rounded-br-2xl"></div>
        </div>
          </div>

          {/* Text and Button Section - Right Side */}
          <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-8 lg:p-10">
        {/* Message Section */}
        <div className="text-center space-y-4 w-full">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-lg">
            <span className="inline-block animate-pulse">১%</span> ল্যান্ড ফ্রিডম মুভমেন্টে
          </h2>
          <div className="space-y-3">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 font-bold leading-relaxed">
            <span className="text-white">
            আপনাকে স্বাগতম।
            </span>
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-semibold">
          যেখানে সাধারণ পরিবার গড়বে অসাধারণ ভবিষ্যৎ।
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6 sm:mt-8 flex justify-center w-full">
            <button
            onClick={onClose}
            className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-green-700 via-green-600 via-emerald-600 to-teal-700 text-white font-extrabold text-lg sm:text-xl rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50 active:scale-95 overflow-hidden"
            >
            {/* Animated gradient overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-teal-700 via-emerald-600 via-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            
            {/* Shine effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
            
            {/* Button text */}
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
          <span className="drop-shadow-lg">শুরু করতে ট্যাপ করুন</span>
          <svg 
          className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-2 transition-transform duration-300 drop-shadow-lg" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
            </span>
            
            {/* Multiple glowing effects */}
            <span className="absolute -inset-2 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-full blur-xl opacity-60 group-hover:opacity-100 animate-pulse -z-10"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-full blur-lg opacity-50 group-hover:opacity-80 animate-pulse -z-10" style={{ animationDelay: '0.3s' }}></span>
            </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-6 flex justify-center items-center space-x-3">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-ping shadow-lg shadow-green-500/50"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-teal-500 rounded-full animate-ping shadow-lg shadow-teal-500/50" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 rounded-full animate-ping shadow-lg shadow-emerald-500/50" style={{ animationDelay: '0.4s' }}></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-600 rounded-full animate-ping shadow-lg shadow-green-600/50" style={{ animationDelay: '0.6s' }}></div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

