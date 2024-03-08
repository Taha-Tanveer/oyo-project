import Script from "next/script";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
const Payment = () => {
  const router = useRouter();
  const makePayment = async () => {
    const val = {
      id: router.query?.id,
    };
    try {
      const { data } = await axios.post("/api/razorpay", val);
      //   console.log(data);

      const options = {
        key: process.env.RAZORPAY_KEY,
        name: "TRiX",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank You !",
        handler: function (response) {},
        prefill: {
          name: "TRiX",
          email: "trix@example.com",
          contact: "9999999999",
        },
      };
      const paymentObj = new window.Razorpay(options);
      paymentObj.open();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    makePayment();
  });
  return (
    <>
      <Head>
        <title>Booking Page </title>
      </Head>
      <div>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      </div>
    </>
  );
};

export default Payment;
