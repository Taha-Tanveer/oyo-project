"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Filters = ({
  price,
  setPrice,
  handlePrice,
  checkedList,
  setCheckedList,
}) => {
  const [list, setList] = useState([]);

  const handleCheckList = (e) => {
    let newList = [];
    if (e.target.checked) {
      newList.push(e.target.value);
      setCheckedList(newList);
      return;
    }
    newList = newList.filter((item) => item !== e.target.value);
    setCheckedList(newList);
  };

  const fetchFacilities = async () => {
    try {
      const { data } = await axios.get(`/api/facilities`);
      // console.log(data);
      if (data?.facilities) {
        setList(data?.facilities);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <>
      <div className="border-2 border-red-500 m-5 rounded-lg h-auto py-10 px-3">
        <label htmlFor="price" className="text-xl mr-3 font-bold">
          Price :{" "}
        </label>
        <input
          type="range"
          name="price"
          id="price"
          min="0"
          max="3000"
          onChange={(e) => setPrice(e.target.value)}
          defaultValue={price ? price : 0}
        />
        <span className="ml-10 ">&#8377; {price}</span>
        <div>
          <button
            onClick={handlePrice}
            className=" w-40 h-10  bg-red-500 text-white px-3 py-2 cursor-pointer"
          >
            Search
          </button>
        </div>
        <div className="my-10">
          <h3 className="text-xl font-bold my-3">Facilities : </h3>
          {list?.map((facility) => (
            <p className="grid grid-cols-4 my-3" key={facility}>
              <label htmlFor="checkbox" className="col-span-2">
                {facility}
              </label>
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="w-5 h-5 ml-3 col-span-1"
                value={facility}
                onChange={handleCheckList}
              />
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filters;
