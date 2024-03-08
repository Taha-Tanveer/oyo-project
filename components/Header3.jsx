"use client";
import Link from "next/link";
import { useState } from "react";

const Header3 = () => {
  const [city, setCity] = useState("");

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-60">
      <div className="mx-10">
        <h2 className="font-bold text-4xl text-center text-white">
          Over 10,000+ Hotels and Homes across 35 + Countries
        </h2>
        <div className="flex justify-center my-5 mx-20">
          <input
            type="text"
            placeholder="Search..."
            className=" h-16 outline-none px-3 text-lg border-r-2 border-r-gray-400 w-6/12 rounded-l-xl"
            onChange={(e) => setCity(e.target.value)}
          />
          {/* <input
            type="date"
            placeholder="Search..."
            className=" h-16 outline-none px-3 text-lg border-r-2 border-r-gray-400 col-span-1"
          />
          <input
            type="date"
            placeholder="Search..."
            className=" h-16 outline-none px-3 text-lg border-r-2 col-span-1 "
          /> */}
          <Link
            href={`/hotels?city=${city}`}
            className="h-16 px-3 py-2 w-60  bg-green-300 hover:cursor-pointer hover:bg-green-600 text-white text-xl transition flex justify-center items-center rounded-r-xl"
          >
            <button type="submit" className="text-center">
              Search
            </button>
          </Link>
        </div>
        <div className="flex mx-20 my-5">
          <button
            type="submit"
            className="h-16 px-3 py-2   hover:cursor-pointer  text-white text-xl transition mr-5"
          >
            Continue your search
          </button>
          <button
            type="submit"
            className="h-16 px-3 py-2   hover:cursor-pointer   text-white text-xl transition mr-5 border-black border hover:bg-black hover:text-red-500 rounded-xl"
          >
            Homestay in Indian Hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;
