import Image from "next/image";
import Block from "./Block";
import { IoCallOutline } from "react-icons/io5";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
const Header1 = () => {
  return (
    <div className=" h-20 px-5 flex justify-between  shadow-md  items-center ">
      <Image
        src="/logo.png"
        alt="logo"
        width={200}
        height={200}
        className="w-24 h-28"
      />
      <div className="border-r-2 border-gray-300 h-full flex">
        <Block
          icon={<MdOutlineLocalOffer />}
          title={"Become a member"}
          para={"Additional 0% off on stays."}
        />
        <Block
          icon={<PiSuitcaseSimpleLight />}
          title={"Become a member"}
          para={"Trusted by 1000+ businesses."}
        />
        <Block
          icon={<HiOutlineBuildingOffice2 />}
          title={"OYO for Business"}
          para={"Start earning in 30 min ."}
        />
        <Block
          icon={<IoCallOutline />}
          title={"98765-43210"}
          para={"Call us to book now."}
        />
        <div className="flex items-center px-3 ">
          <FaRegUserCircle className="text-2xl mr-5" />
          <Link href="/login">
            <h3 className="font-bold">Login / SignUp</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header1;
