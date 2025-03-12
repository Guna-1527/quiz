'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const QuizHero = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#1E1E2E] to-[#282A36] text-white">
      {/* Glowing Background Blur */}
      <div className="absolute w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full top-1/3 left-1/4"></div>
      <div className="absolute w-96 h-96 bg-blue-500 opacity-30 blur-3xl rounded-full bottom-1/4 right-1/4"></div>

      <h1 className="text-5xl font-extrabold mb-10 text-center tracking-wide">
        🚀 Are You Ready for a Challenge?
      </h1>

      {/* Quiz Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative w-[420px] h-[250px] bg-[#2D2E3A] shadow-2xl rounded-2xl flex flex-col justify-center items-center cursor-pointer border border-gray-600"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Floating Light Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-transparent rounded-2xl blur-2xl"
        />

        {/* Flip Animation */}
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="text-center text-2xl font-semibold px-8"
        >
          {isFlipped ? "What's your JavaScript expertise?" : "Tap to Reveal a Quiz Question"}
        </motion.div>
      </motion.div>

      {/* Start Button */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: '#7B61FF' }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="mt-8 px-8 py-4 bg-purple-600 text-white text-lg font-bold rounded-full shadow-md hover:bg-purple-700"
      >
        Start Quiz Now
      </motion.button>
    </div>
  );
};

export default QuizHero;
