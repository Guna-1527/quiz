import React from "react";
import Image from "next/image";
import Category from "../../../public/category-black-filled-icon-style-free-vector.jpg";
import Quiz from "../../../public/3407038.png";
import Result from "../../../public/11501754.png";

const GuideType = [
  {
    id: 1,
    image: Category,
    header: "Choose Category",
    description:
      "Browse through various subjects and select your preferred topic",
  },
  {
    id: 2,
    image: Quiz,
    header: "Start Quiz",
    description: "quiz description",
  },
  {
    id: 3,
    image: Result,
    header: "Watch Result",
    description: "Result screen",
  },
];

const Guide = () => {
  return (
    <div className="w-full  flex h-auto flex-col p-12 items-center bg-[#fbf4f6]">
      <h1 className="text-2xl font-bold ">How to get started?</h1>
      <div className="flex flex-wrap justify-around gap-10 mt-10">
        {GuideType.map((item) => (
          <div
            key={item.id}
            className="flex bg-white w-[330px] justify-center text-center items-center flex-col rounded-md shadow-lg px-8 py-4"
          >
            <div className="image w-[100px] h-[100px]">
              <Image src={item.image} alt="logo" />
            </div>
            <div className="text">
              <h2 className="font-bold mb-2">{item.header}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;
