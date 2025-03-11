import React from "react";

const CTA = () => {
  return (
    <div className="w-full h-[300px] bg-gray-800 flex justify-center items-center">
      <div className="w-[1300px] m-auto">
        <h1 className="text-gray-100 font-bold text-4xl">
          Unlock Your Knowledge Today!
        </h1>
        <p className="text-gray-100 my-4">
          Join our community and discover fun quizzes that challenge your mind
          and expand your horizons.
        </p>
        <div className="flex gap-3">
          <button className="btn bg-gray-100 ">Start</button>
          <button className="btn border-1 border-gray-100 text-gray-100 bg-transparent">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
