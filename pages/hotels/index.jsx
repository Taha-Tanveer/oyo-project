import Filters from "@/components/Filters";
import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Hotels = ({ hotels }) => {
  const [list, setList] = useState([]);
  const [price, setPrice] = useState(3500);
  const [checkedList, setCheckedList] = useState([]);
  const handlePrice = async (e) => {
    const res = await axios.get(`api/facilities/range/?price=${price}`);
    const data = await res.data;
    if (data?.hotels) {
      setList(data?.hotels);
    }
  };
  const handleCheckedList = async (e) => {
    const { data } = await axios.get(
      `api/facilities/search/?val=${checkedList}`
    );
    if (data?.hotels) {
      let newArr = data?.hotels;
      setList(newArr);
    }
  };

  useEffect(() => {
    if (checkedList) {
      handleCheckedList();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Hotels </title>
      </Head>
      <Header1 />

      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Filters
            price={price}
            setPrice={setPrice}
            handlePrice={handlePrice}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
          />
        </div>
        <div className="col-span-9">
          {list.length > 0
            ? list.map((e) => {
                return <Hotel hotel={e} key={e._id} />;
              })
            : hotels
            ? hotels.map((hotel) => {
                return (
                  <div className=" m-5 " key={hotel._id}>
                    <Hotel hotel={hotel} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
    );
    const data = await res.json();
    // console.log(data);
    return {
      props: {
        hotels: data.hotels ? data.hotels : data.allHotels,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default Hotels;
