"use client";
import React from "react";


function Header2() {
  const List = [
    {
      name: "Banglore",
    },
    {
      name: "Chennai",
    },
    {
      name: "Delhi",
    },
    {
      name: "Hyderabad",
    },
    {
      name: "Kolkata",
    },
    {
      name: "Mumbai",
    },
  ];
  return (
    <div>
      <div className="flex px-10 py-3 bg-gray-100 justify-between">
        {List.map((item) => {
          return (
            <div key={item.name}>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header2;
