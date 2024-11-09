import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, SparklesIcon } from '@heroicons/react/24/solid';

interface RandomDrawerScreenProps {
  isOpen: boolean;
  onClose: () => void;
  participants: number;
}

const RandomDrawerScreen: React.FC<RandomDrawerScreenProps> = ({
  isOpen,
  onClose,
  participants,
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [randomNumbers, setRandomNumbers] = useState<number[]>(Array(10).fill(0));
  const [finalNumbers, setFinalNumbers] = useState<number[]>([]);
  const intervalRefs = useRef<any[]>([]);

  const generateUniqueNumber = (existingNumbers: number[], max: number): number => {
    const available = Array.from({ length: max }, (_, i) => i + 1).filter(
      (num) => !existingNumbers.includes(num),
    );

    if (available.length === 0) return Math.floor(Math.random() * max) + 1;

    const randomIndex = Math.floor(Math.random() * available.length);
    return available[randomIndex];
  };

  const stopSpinning = () => {
    setIsSpinning(false);
    intervalRefs.current.forEach(clearInterval);
    intervalRefs.current = [];
    setFinalNumbers(randomNumbers);
  };

  const startSpinning = () => {
    if (isSpinning) {
      stopSpinning();
      return;
    }

    setIsSpinning(true);

    const newIntervalRefs = Array(10)
      .fill(null)
      .map((_, index) => {
        return setInterval(() => {
          setRandomNumbers((prev) => {
            const newNumbers = [...prev];
            newNumbers[index] = generateUniqueNumber(
              newNumbers.filter((_, i) => i !== index),
              participants,
            );
            return newNumbers;
          });
        }, 100);
      });

    intervalRefs.current = newIntervalRefs;
  };

  useEffect(() => {
    return () => {
      intervalRefs.current.forEach(clearInterval);
    };
  }, []);

  const drawerVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
      },
    },
    exit: { y: '100%', opacity: 0 },
  };

  const numberVariants = {
    animate: (index: number) =>
      isSpinning
        ? {
            scale: [0.8, 1.1, 1],
            rotate: [0, 20, -20, 0],
            opacity: 1,
            transition: {
              duration: 0.3,
              repeat: Infinity,
              // repeatType: 'reverse',
            },
          }
        : {
            scale: 1,
            opacity: 1,
            rotate: 0,
            transition: {
              type: 'spring',
              damping: 10,
              stiffness: 300,
              delay: index * 0.1,
            },
          },
    spinning: {
      transition: {
        duration: 0.5,
        repeat: Infinity,
      },
    },
    final: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 200,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 bg-gradient-to-br from-[#4e54c8] via-[#8f94fb] to-[#4e54c8] flex flex-col'
          variants={drawerVariants}
          animate='visible'
          exit='exit'
        >
          <div className='p-6 flex justify-between items-center'>
            <h2 className='text-3xl font-bold text-white'>
              {isSpinning ? 'Spinning...' : finalNumbers.length > 0 ? 'Results' : 'Lucky Draw'}
            </h2>
            <motion.button
              onClick={onClose}
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <XMarkIcon className='w-10 h-10 text-white' />
            </motion.button>
          </div>

          <div className='flex-1 grid grid-cols-5 gap-2 p-8'>
            {(isSpinning ? randomNumbers : finalNumbers).map((number, index) => (
              <motion.div
                key={index}
                variants={numberVariants}
                animate={isSpinning ? 'spinning' : finalNumbers.length > 0 ? 'final' : 'animate'}
                className='bg-white/30 backdrop-blur-md rounded-xl 
                  flex items-center justify-center 
                  text-5xl font-bold text-white
                  shadow-md border border-white/30
                  min-h-[120px]
                  hover:bg-white/40 
                  transition-colors
                  cursor-pointer'
              >
                {number}
              </motion.div>
            ))}
          </div>

          {/* Spin Button */}
          <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2'>
            <motion.button
              onClick={startSpinning}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='bg-white/20 backdrop-blur-md rounded-full p-4 flex items-center justify-center'
            >
              <SparklesIcon className='w-10 h-10 text-white' />
              <span className='ml-2 text-white font-bold'>
                {isSpinning ? 'Stop' : finalNumbers.length > 0 ? 'Spin Again' : 'Spin'}
              </span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RandomDrawerScreen;
