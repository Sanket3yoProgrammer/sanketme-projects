import React from "react";
import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <motion.div
        className="text-center p-10 bg-black bg-opacity-30 rounded-2xl shadow-2xl backdrop-blur-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-bold text-primary drop-shadow-md">Welcome to YoPost</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-md">
          A modern, futuristic, and professional file-sharing/gallery system.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-6 py-3 bg-primary text-black font-semibold rounded-xl shadow-md hover:scale-105 transform transition-all duration-300">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-400 text-gray-300 font-semibold rounded-xl hover:bg-gray-700 transition-all duration-300">
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default App;
