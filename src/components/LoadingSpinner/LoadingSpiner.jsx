import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 z-50">
      <div className="relative flex items-center justify-center">
 
        <div className="w-24 h-24 rounded-full border-4 border-transparent border-t-indigo-500 border-r-pink-500 animate-spin shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div>

        <div className="absolute w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 animate-pulse blur-sm"></div>
      </div>

      <span className="absolute bottom-24 text-gray-700 text-lg font-semibold tracking-wide animate-pulse">
        Loading...
      </span>
    </div>
  );
};

export default LoadingSpinner;
