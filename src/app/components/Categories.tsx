import React from "react";
import Image from "next/image";
import Logo from "../../../public/vercel.svg";

const category = [
  {
    id: 1,
    image: Logo,
    title: "General knowledge",
    test: "150 quiz",
  },
  {
    id: 2,
    image: Logo,
    title: "General knowledge",
    test: "150 quiz",
  },
  {
    id: 3,
    image: Logo,
    title: "General knowledge",
    test: "150 quiz",
  },
  {
    id: 4,
    image: Logo,
    title: "General knowledge",
    test: "150 quiz",
  },
  {
    id: 5,
    image: Logo,
    title: "General knowledge",
    test: "150 quiz",
  },
  {
    id: 6,
    image: Logo,
    title: "General knowledge",
    test: "150 quiz",
  },
];

const Categories = () => {
  return (
    <div className="w-full h-[400px] flex flex-col p-12 items-center">
      <h1 className="text-2xl font-bold text-black">
        Popular Quiz Categories
      </h1>
      <div className="flex flex-wrap justify-around max-w-5xl gap-10 mt-10">
        {category.map((item) => (
          <div className="flex items-center border-1 rounded-md border-gray-300 px-8 py-4 gap-4">
            <div className="image w-[40px] h-[40px]">
              <Image src={item.image} alt="logo" />
            </div>
            <div className="font-bold">
              <h2 className="font-bold">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.test}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
