import Image from "next/image";
import Link from "next/link";


const Hotel = ({ hotel }) => {
  return (
    <div className="border-2 h-86 border-red-500 rounded-lg  w-full mt-5 mb-5 p-5">
      <div className="flex  ">
        <Image
          src={hotel?.banner}
          alt="hotel"
          width={200}
          height={200}
          className="w-96 h-80 rounded-lg large-box mr-3 self-center"
        />
        <div className="flex flex-col justify-between ">
          {hotel
            ? hotel.gallery?.map((img) => (
                <Image
                  src={img}
                  alt="hotel"
                  width={200}
                  height={200}
                  className="w-28 h-14  rounded-lg large-box "
                  key={img}
                />
              ))
            : ""}
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-2xl line-clamp-1 ">{hotel?.name}</h2>
          <p className="text-justify my-5 text-lg">{hotel?.description}</p>
          <div className="text-2xl my-5 ">
            <span className="font-bold ">Facilities : </span>

            <ul className="flex ">
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
          <div className="felx items-center">
            <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
              Price : &#8377; {hotel?.price}
            </button>
            <Link
              href={`/hotels/${hotel?._id}`}
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
