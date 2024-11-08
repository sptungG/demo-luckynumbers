import React, { useState } from "react";
import { motion } from "framer-motion";

const PrizeConfigScreen = () => {
  const [participants, setParticipants] = useState("");
  const [firstPrize, setFirstPrize] = useState("");
  const [secondPrize, setSecondPrize] = useState("");
  const [thirdPrize, setThirdPrize] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">
          Prize Configuration
        </h2>

        <div className="space-y-4">
          {/* Participants Input */}
          <div className="relative">
            <input
              type="number"
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
              className="w-full px-4 py-3 border-2 border-indigo-200 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         transition duration-300 ease-in-out"
              placeholder="Total Participants"
            />
            <span className="absolute right-4 top-3 text-gray-400">👥</span>
          </div>

          {/* First Prize Input */}
          <div className="relative">
            <input
              type="number"
              value={firstPrize}
              onChange={(e) => setFirstPrize(e.target.value)}
              className="w-full px-4 py-3 border-2 border-indigo-200 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         transition duration-300 ease-in-out"
              placeholder="First Prize Count"
            />
            <span className="absolute right-4 top-3 text-gray-400">🥇</span>
          </div>

          {/* Second Prize Input */}
          <div className="relative">
            <input
              type="number"
              value={secondPrize}
              onChange={(e) => setSecondPrize(e.target.value)}
              className="w-full px-4 py-3 border-2 border-indigo-200 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         transition duration-300 ease-in-out"
              placeholder="Second Prize Count"
            />
            <span className="absolute right-4 top-3 text-gray-400">🥈</span>
          </div>

          {/* Third Prize Input */}
          <div className="relative">
            <input
              type="number"
              value={thirdPrize}
              onChange={(e) => setThirdPrize(e.target.value)}
              className="w-full px-4 py-3 border-2 border-indigo-200 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         transition duration-300 ease-in-out"
              placeholder="Third Prize Count"
            />
            <span className="absolute right-4 top-3 text-gray-400">🥉</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl 
                     hover:bg-indigo-700 transition duration-300 
                     flex items-center justify-center space-x-2"
        >
          <span>Next Step</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PrizeConfigScreen;
