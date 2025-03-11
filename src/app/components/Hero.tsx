import React from "react";
import Image from "next/image";
import HeroImage from "../../../public/quiz-sign-mark-free-free-png.webp";

const Hero = () => {
  return (
    <div className="flex w-[1300px] h m-auto gap-10">
      <div className="flex flex-1">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="font-bold text-5xl">
            {" "}
            "Think You’re Smart? Prove It!"
          </h1>
          <p>
            Test your knowledge, challenge friends, and learn something new with
            fun interactive quizzes!
          </p>
          <button className="btn cursor-pointer bg-gray-800 text-white py-2">
            Start Quiz
          </button>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className="w-[400px] h-[400px] flex">
          <Image src={HeroImage} alt="asdf" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
