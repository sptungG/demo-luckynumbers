import { useState } from "react";
import { motion } from "framer-motion";
import {
  UserIcon,
  GiftIcon,
  TrophyIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

const PrizeConfigScreen = () => {
  const [setUp, setSetUp] = useState({});

  const inputVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSetUp((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = () => {
    console.log("🚀 ~ PrizeConfigScreen ~ setUp:", setUp);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#4e54c8] via-[#8f94fb] to-[#4e54c8] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4e54c8] via-[#8f94fb] to-[#4e54c8] animate-gradient-x opacity-70">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight,
              scale: Math.random() * 1.5,
              opacity: 0,
            }}
            animate={{
              y: -100,
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              opacity: [0, 0.2, 0],
              scale: [
                Math.random() * 1.5,
                Math.random() * 2,
                Math.random() * 1.5,
              ],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-white/10 blur-2xl"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="bg-white/20 backdrop-blur-2xl shadow-2xl rounded-3xl p-8 w-full max-w-lg space-y-6 border border-white/20 relative overflow-hidden"
        >
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-block bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] p-3 rounded-full mb-4"
            >
              <SparklesIcon className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-4xl font-bold text-white drop-shadow-lg">
              Prize Configuration
            </h2>
            <p className="text-white/90 mt-2">Set up your competition prizes</p>
          </div>

          <div className="space-y-5">
            {["participants", "firstPrize", "secondPrize", "thirdPrize"].map(
              (field, index) => {
                const icons = [
                  <UserIcon className="w-5 h-5 mr-2 text-[#2575fc]" />,
                  <TrophyIcon className="w-5 h-5 mr-2 text-yellow-400" />,
                  <GiftIcon className="w-5 h-5 mr-2 text-green-400" />,
                  <GiftIcon className="w-5 h-5 mr-2 text-bronze-400" />,
                ];
                const labels = [
                  "Number of Participants",
                  "First Prize Value",
                  "Second Prize Value",
                  "Third Prize Value",
                ];
                const placeholders = [
                  "Enter participant count",
                  "Enter first prize",
                  "Enter second prize",
                  "Enter third prize",
                ];

                return (
                  <motion.div
                    key={field}
                    variants={inputVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* <label className="text-white/80 mb-2 text-lg flex items-center">
                      {icons[index]}
                      {labels[index]}
                    </label> */}
                    <div className="relative">
                      <input
                        type="number"
                        onChange={handleInputChange}
                        name={field}
                        className="w-full pl-10 pr-4 py-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#2575fc]/50 transition-all duration-300 placeholder-white/60"
                        placeholder={placeholders[index]}
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">
                        {icons[index]}
                      </div>
                    </div>
                  </motion.div>
                );
              }
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:brightness-110 transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95"
              onClick={handleOnSubmit}
            >
              Configure Prizes
            </motion.button>
          </div>

          <div className="absolute -bottom-10 -right-10 opacity-20">
            <SparklesIcon className="w-40 h-40 text-white" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrizeConfigScreen;
