"use client";
import Image from "next/image";
import Block from "./Block";
import { IoCallOutline } from "react-icons/io5";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect , useState } from "react";
const Header1 = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const key =  Cookies.get("user");
    if(key){
      setAuth(true);
      return
    }
    setAuth(false);
  }, [auth]);
  const router = useRouter();
  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push("/");
  };
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
          title={"OYO for Business"}
          para={"Trusted by 1000+ businesses."}
        />
        <Block
          icon={<HiOutlineBuildingOffice2 />}
          title={"OYO for Hotels"}
          para={"Start earning in 30 min ."}
        />
        <Block
          icon={<IoCallOutline />}
          title={"98765-43210"}
          para={"Call us to book now."}
        />
        <div className="flex items-center px-3 ">
          <FaRegUserCircle className="text-2xl mr-5" />
          {auth ? (
            <h3 className="font-bold cursor-pointer" onClick={handleLogout}>
              Logout
            </h3>
          ) : (
            <Link href="/login">
              <h3 className="font-bold">Login / SignUp</h3>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;
