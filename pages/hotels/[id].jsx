"use client";
import Head from "next/head";
import Image from "next/image";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SingleHotel = ({ hotel }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const key = Cookies.get("user");
    if (key) {
      setAuth(true);
      return;
    }
    setAuth(false);
  }, []);
  // console.log(hotel)
  return (
    <>
      <Head>
        <title>{hotel?.name}</title>
      </Head>
      <div className="w-7/12 mx-auto my-10 flex flex-col  items-center">
        <Carousel className=" max-w-screen-lg mb-10">
          <CarouselContent>
            {hotel.gallery?.map((img) => (
              <CarouselItem key={img}>
                <Image
                  src={img}
                  alt="hotel"
                  width={200}
                  height={200}
                  className="w-full h-full  rounded-lg  "
                  key={img}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="">
          <h3 className="font-bold text-2xl">{hotel?.name}</h3>
          <p className="text-xl my-5 text-justify">{hotel?.description}</p>
          <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
            Price : &#8377; {hotel?.price}
          </button>
          <p className="text-3xl font-bold my-5">Facilities : </p>
          <ul className="flex text-xl justify-between">
            {hotel
              ? hotel?.facilities?.map((facility) => (
                  <li
                    key={facility.name}
                    className="mr-10 mb-3 flex items-center mt-5"
                  >
                    <span>
                      <Image
                        src={facility.img}
                        alt="hotel"
                        width={200}
                        height={200}
                        className="w-8 h-8 rounded-full"
                      />
                    </span>
                    <span className="ml-2">{facility.name}</span>
                  </li>
                ))
              : ""}
          </ul>
        </div>
        {auth ? (
          <Link href={`/payment/${hotel?._id}`}>
            <button className="w-96 cursor-pointer text-white h-14 rounded-lg bg-red-400 text-lg my-5">
              Book Now
            </button>
          </Link>
        ) : (
          <span className="text-2xl text-red-500 font-bold">
            Please ---
            <Link href={"/login"} className="text-blue-500">
              {" "}
              <button className="w-96 cursor-pointer text-white h-14 rounded-lg bg-red-400 text-lg my-5">
                Log - In
              </button>
            </Link>
            --- to get Offers !
          </span>
        )}
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  // console.log(ctx.query.id);
  const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      hotel: data.hotel,
    },
  };
}

export default SingleHotel;
