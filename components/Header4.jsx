"use client";

import Image from "next/image";

const Header4 = () => {
  return (
    <div className="flex my-14 items-center border rounded-lg justify-between border-gray-300 px-5 py-2">
      <div className="flex  items-center ">
        <Image
          src={"/fire.jpg"}
          alt="fire"
          width={200}
          height={200}
          className="w-32 h-32 rounded-full"
        />
        <div className="text-xl">
          <p className="font-bold ">Get access to exclusive deals</p>
          <p>Only the best deals reach your inbox</p>
        </div>{" "}
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter your email"
          className="px-6 py-2   rounded-lg outline-none w-80 h-16  mr-5 border border-gray-300 "
        />
        <button className="h-16 px-3 py-2 bg-red-500 cursor-pointer w-48 rounded-lg text-white text-xl transition">
          Notify
        </button>
      </div>
    </div>
  );
};

export default Header4;
