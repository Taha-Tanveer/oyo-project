import Head from "next/head";

const Login = () => {
  return (
    <div>
      <Head>
        <title>OYO - Login!</title>
      </Head>
      <div className="flex h-screen justify-center items-center  relative bg-login-backgriund bg-no-repeat bg-cover opacity-90">
        <div className="absolute top-10 px-20 flex items-center w-full text-white">
          <h2 className="font-bold text-5xl mr-5">OYO</h2>
          <p className="font-bold text-2xl">Hotels and Homes around India .</p>
        </div>
        <div className="flex justify-center w-9/12 items-center ">
          <div className="text-white">
            <p className="font-bold text-5xl">
              There's a smarter way to OYO around
            </p>
            <p className="text-xl italic">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners.
            </p>
          </div>
          <div className="ml-20 pb-40 w-9/12  h-auto border rounded-xl bg-white">
            <p className="h-10 px-10 font-bold text-lg text-white felx items-center bg-gradient-to-r from-red-300 to-red-600 rounded-xl">
              Sign Up & get 10% off
            </p>
            <div className="px-10  ">
              <h3 className="text-5xl font-bold my-5 "> Login / Sign-Up</h3>
              <p className="font-bold text-lg mb-1">
                Please enter your E-mail
              </p>
              <input
                type="text"
                placeholder="Enter your name"
                className="outline-none border w-full  border-black px-3 py-1 my-3  h-10 rounded-lg"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none border border-black px-3 py-1 my-3 w-full h-10 rounded-lg"
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="outline-none border border-black px-3 py-1 my-3 w-full h-10 rounded-lg"
              />
              <button
                type="submit"
                className="w-full h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
              >
                Sign - Up
              </button>
              <p className="my-1 text-xl ">
                <span>Already have an account ?</span>
                <span className="ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer ">
                  Login
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
