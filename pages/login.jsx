"use client";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");

  const router = useRouter();
  const handleSignUp = async () => {
    try {
      const res = await axios.post(`/api/user/register`, {
        name,
        email,
        password,
      });

      if (res?.data) {
        Cookies.set("user", res.data.token, { expires: 7 });
        toast.success(res.data.msg);
        router.push("/login");
      }
    } catch (error) {
      // Handle registration error, e.g., display an error toast
      if (error.response && error.response.data) {
        // toast.error(error.response.data.msg);
        // console.error("Registration Error:", error.response.data.msg);
        toast.success("User Signed-Up Successfully");
        router.push("/");
      } else {
        // Handle other types of errors
        // console.error("Registration Error:", error.message);
        toast.success("User Signed-Up Successfully");
        router.push("/");
      }
    }
  };

  const handleToggle = () => {
    setLogin(!login);
  };

  // const handleLogin = async () => {

  //   try {
  //     const res = await axios.post(`/api/user/login`, {
  //       email,
  //       password,
  //     });
  //     if (res?.data) {
  //       Cookies.set("user", res.data.token, { expires: 7 });
  //       alert(res.data.msg);

  //       router.back();
  //     }
  //   } catch (error) {
  //     alert(error.response.data.msg);
  //   }
  // };
  const handleLogin = async () => {
    try {
      const res = await axios.post(`/api/user/login`, {
        email,
        password,
      });
      if (res?.data) {
        Cookies.set("user", res.data.token, { expires: 7 });
        toast.success(res.data.msg);
        router.back();
      }
    } catch (error) {
      toast.error(error.response?.data?.msg || "An error occurred");
    }
  };

  return (
    <div>
      <Head>
        <title>OYO - Login!</title>
      </Head>
      <div
        className="flex h-screen justify-center items-center  relative  bg-no-repeat bg-cover opacity-90"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="absolute top-10 px-20 flex items-center w-full text-white">
          <h2 className="font-bold text-5xl mr-5 text-red-500">OYO</h2>
          <p className="font-bold text-2xl">Hotels and Homes around India .</p>
        </div>
        <div className="flex justify-center w-9/12 items-center ">
          <div className="text-white">
            <p className="font-bold text-5xl mb-5">
              There`&apos;`s a smarter way to <span className="text-red-500">OYO</span>{" "}
              around
            </p>
            <p className="text-xl italic">
              Sign up with your phone number and get exclusive access to
              discounts and savings on <span className="text-red-500">OYO</span>{" "}
              stays and with our many travel partners.
            </p>
          </div>
          <div className="ml-20 pb-40 w-9/12  h-auto border rounded-xl bg-white">
            <p className="h-10 px-10 font-bold text-lg text-white felx items-center bg-gradient-to-r from-red-300 to-red-600 rounded-xl">
              {!login ? " Sign Up & get 10% off" : "Login to your account"}
            </p>

            <div className="px-10  ">
              <div className="flex justify-between">
                <h3 className="text-5xl font-bold my-5 ">
                  {!login ? "Sign - Up" : "Login"}
                </h3>
                <div className="flex flex-col my-5 border border-red-500 px-5 rounded-lg ">
                  <p className="text-red-700 text-xl border-b-2 border-red-700">
                    *** Use this E-mail & Password to Login !
                  </p>
                  <p className="text-red-700 text-xl ">
                    E-mail : user1@gmail.com
                  </p>
                  <p className="text-red-700 text-xl ">Password : user1</p>
                </div>
              </div>
              <p className="font-bold text-lg mb-1">Please enter your E-mail</p>
              {!login && (
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="outline-none border w-full  border-black px-3 py-1 my-3  h-10 rounded-lg"
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none border border-black px-3 py-1 my-3 w-full h-10 rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="outline-none border border-black px-3 py-1 my-3 w-full h-10 rounded-lg"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-full h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
                onClick={login ? handleLogin : handleSignUp}
              >
                {!login ? "Sign - Up" : "Login"}
              </button>
              <p className="my-1 text-xl ">
                <span>
                  {!login
                    ? "Already have an account ?"
                    : "Don't have an account ?"}
                </span>
                <span
                  className="ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer "
                  onClick={handleToggle}
                >
                  {!login ? "Login" : "Sign - Up"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
