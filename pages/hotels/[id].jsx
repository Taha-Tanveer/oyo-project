import Image from "next/image";

const SingleHotel = () => {
  return (
    <div className="w-7/12 mx-auto my-10">
      <Image
        src={
          "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt="hotel"
        width={2000}
        height={2000}
        className="w-full h-large-box rounded-lg my-5 large-box mb-5 "
      />
      <div className="">
        <h3 className="font-bold text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, nam.
        </h3>
        <p className="text-xl my-5 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut libero
          repellendus officiis? Inventore modi tempora placeat praesentium
          officiis, officia earum perspiciatis soluta tempore aspernatur sequi
          quisquam quae reiciendis voluptates quaerat, ducimus iusto veniam
          nostrum repudiandae enim ad eaque doloremque? Vel nobis laudantium
          maxime! Dolores quaerat odit beatae rerum assumenda odio?
        </p>
        <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
          Price : 4500
        </button>
        <p className="text-3xl font-bold my-5">Facilities : </p>
        <ul className="flex text-xl justify-between">
          <li>Wifi</li>
          <li>AC</li>
          <li>Swimming Pool</li>
          <li>Gym</li>
          <li>Spa</li>
        </ul>
      </div>
      <button className="w-full cursor-pointer text-white h-14 rounded-lg bg-red-400 text-lg my-5">
        Book Now
      </button>
    </div>
  );
};

export default SingleHotel;
