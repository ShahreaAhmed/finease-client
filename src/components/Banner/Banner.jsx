import React from "react";
import { motion } from "framer-motion";


const Banner = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[85vh] overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      
      {/* Background Animation */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 px-6 md:px-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
          Take <span className="text-blue-400">Control</span> of Your Money  
          <br />
          Build a <span className="text-emerald-400">Smarter Future</span> with FinEase
        </h1>

        <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Track every expense, plan every goal, and watch your savings grow —  
          all in one intelligent dashboard.
        </p>
      </motion.div>

      {/*Tagline Badge */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute top-10 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 text-sm text-blue-300 shadow-sm"
      >
        💡 "Master Your Finances, Empower Your Future"
      </motion.div>
    </section>
  );
};

export default Banner;
