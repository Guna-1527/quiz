"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import HeroAnimate from "../components/HeroAnimate"
import HeroImage from "../../../public/heroImage.png"

const Hero = () => {
  return (
    <div className='bg-[#fbf4f6] pt-14'>
      <div className='flex justify-between gap-8 w-[1400px] m-auto'>
      <div className="left flex flex-1 flex-col justify-center ">
        <motion.h1 initial={{y:100, opacity:0}} animate={{ y: 0, opacity:1 }} transition={{ duration: 1.5, stiffness: 100 }} className='text-5xl font-bold '>Master you exams with free quizzes!</motion.h1>
        <motion.p initial={{y:100, opacity:0}} animate={{ y: 0, opacity:1 }} transition={{ duration: 1, delay: 0.5, stiffness: 100 }} className='my-4'>Select your subject, take quizzes, and improve your score instantly. Join thousands of successful students today.</motion.p>
        <motion.button initial={{y:100, opacity:0}} animate={{ y: 0, opacity:1 }} transition={{ duration: 1, delay: 1, stiffness: 100 }} className="btn bg-black text-white">Start Practicing Now</motion.button>
      </div>
      <div className="right flex flex-1 ">
        <HeroAnimate />
      </div>
    </div>
    </div>
  )
}

export default Hero