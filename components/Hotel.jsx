import Image from "next/image";
import Link from "next/link";

const Hotel = () => {
  return (
    <div className="border-2 h-72 border-red-500 rounded-lg  w-full mb-5 p-5">
      <div className="flex  ">
        <Image
          src={
            "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="hotel"
          width={200}
          height={200}
          className="w-96 h-60 rounded-lg large-box mr-3"
        />
        <div className="grid grid-rows-3 ">
          <Image
            src={
              "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28  rounded-lg large-box "
          />
          <Image
            src={
              "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28  rounded-lg large-box "
          />
          <Image
            src={
              "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28  rounded-lg large-box "
          />
          <Image
            src={
              "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="hotel"
            width={200}
            height={200}
            className="w-28  rounded-lg large-box "
          />
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-2xl line-clamp-1 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo a
            possimus asperiores ea rem, iure dolores esse ipsam vero eius!
          </h2>
          <p className="text-justify my-5 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            suscipit fuga aliquid placeat perferendis natus neque consectetur
            iure libero, blanditiis architecto consequuntur alias! Illo, minus
            accusantium. Maxime qui dignissimos consequatur.
          </p>
          <p className="text-2xl my-5 ">
            <span className="font-bold ">Facilities : </span>
            <span>Free Wi-Fi , </span>
            <span>Pet Friendly , </span>
            <span>Swimming Pool , </span>
            <span>Gym , </span>
            <span>Free Parking , </span>
            <span>Spa </span>
          </p>
          <div className="felx items-center">
            <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
              Price : 4500
            </button>
            <Link
              href={"hotels/2"}
              className="text-xl font-bold text-red-600 ml-10 "
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
