"use client";

import { apiLink } from "@/app/api";
import Image from "next/image";
import AppLogo from "@/app/ui/logo";

import Link from "next/link";
import { Router, useRouter } from "next/navigation";
import axios from "axios";

export default function PaymentSec() {
  return (
    <div className="my-8 md:my-28 max-w-6xl mx-auto px-2">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl text-center font-bold my-2">
          Transform Your Lives
        </h2>
        <p className="w-full md:w-2/3 text-md text-center my-2">
          Become a Part at Skill Craft Academy. Do check the Pricing Page once
          and read all the Instructions. The price charged Below is a token
          Money for Help you and us!
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Box
          top="Power BI Assured With Skill Craft"
          desp=""
          price={199}
          arrTick={[
            "Bonuses upto ₹3000",
            "Free Power BI Master Guides",
            "Job Assitance to a BI Analyst",
            "Power BI Templates to Lucky Winners",
            "10 Days to a Power BI Expert",
          ]}
          arrMinus={[]}
          arrPlus={[]}
          courseId="65dadfed4f55cc9363c750e4"
        />
        {/* <Box
          top="Pro"
          desp="Nunc arcu et eget tellus nunc quis gravida est ullamcorper orci scelerisque."
          price={30000}
          arrTick={[
            "Proin gravida nibh vel velit auctor",
            "Bibendum auctor nisi elit consequat",
            "Ipsum nec sagittis sem nibh elit",
            "Sollicitudin lorem quis id",
            "Duis sed odio sit amet",
            "Orci sit gravida vestibulum",
            "Pretium nibh lobortis egestas",
            "Dolor purus tincidunt",
          ]}
          arrMinus={[]}
          arrPlus={[]}
        />
        <Box
          top="Team"
          desp="Nunc arcu et eget tellus nunc quis gravida est ullamcorper orci scelerisque."
          price={50000}
          arrTick={[
            "Proin gravida nibh vel velit auctor",
            "Bibendum auctor nisi elit consequat",
            "Ipsum nec sagittis sem nibh elit",
            "Sollicitudin lorem quis id",
            "Duis sed odio sit amet",
            "Orci sit gravida vestibulum",
            "Pretium nibh lobortis egestas",
            "Dolor purus tincidunt",
          ]}
          arrMinus={[]}
          arrPlus={["Sem cursus proin", "Condimentum morbi"]}
        /> */}
      </div>
    </div>
  );
}

function Box({ top, desp, price, arrTick, arrMinus, arrPlus, courseId }) {
  const router = useRouter();
  const tickTemp = arrTick.map((item, ind) => (
    <div key={ind} className="flex flex-row my-2">
      <Image src="/Icons/tick-circle.svg" height="20" width="20" alt="Icon" />
      <p className="text-slate-500 ml-2 ">{item}</p>
    </div>
  ));
  const minusTemp = arrMinus.map((item, ind) => (
    <div key={ind} className="flex flex-row my-2">
      <Image src="/Icons/minus-circle.svg" height="20" width="20" alt="Icon" />
      <p className="text-slate-300 ml-2 ">{item}</p>
    </div>
  ));
  const plusTemp = arrPlus.map((item, ind) => (
    <div key={ind} className="flex flex-row my-2">
      <Image src="/Icons/plus-circle.svg" height="20" width="20" alt="Icon" />
      <p className="text-slate-500 ml-2 font-bold">{item}</p>
    </div>
  ));
  //payment starts here
  const amount = 500;
  const currency = "INR";
  const receiptId = "qwsaq1";

  const paymentHandler = async (e) => {
    if (localStorage.getItem("user") === null) {
      router.push("/auth/login");
      return;
    }
    const response = await fetch(apiLink + "/pay/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order, process.env.NEXT_PUBLIC_KEY_ID);

    var options = {
      key: process.env.NEXT_PUBLIC_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Courses For Career", //your business name
      description: "Purchase Course",
      image:
        "https://coursesforcareers.tech/_next/image?url=%2Fcolour_logo.png&w=256&q=75",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(apiLink + "/pay/order/validate", {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const jsonRes = await validateRes.json();
        if (jsonRes.msg == "success") {
          let username = localStorage.getItem("user");
          const response = await axios.post(
            apiLink + "/enroll/" + "65dadfed4f55cc9363c750e4" + "/" + username
          );
          // const response = await axios.post(apiLink + "/enroll");
          console.log(response);
          if (response.data.message == "success") {
            alert("thanks for paying");
          }
        }
        console.log(jsonRes, "dddd");
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3091a4",
      },
      reminder_enable: true,
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };

  const test = async () => {
    let username = localStorage.getItem("user");
    const response = await axios.post(
      apiLink + "/enroll/" + "65dadfed4f55cc9363c750e4" + "/" + username
    );
    // const response = await axios.post(apiLink + "/enroll");
    if (response.data.message == "success") {
      alert("thanks for paying");
    }
  };

  return (
    <div className="w-full md:w-1/2 mt-10 rounded-2xl overflow-hidden shadow-lg relative pb-24 z-0">
      <div className="bg-[#3091a4] p-6">
        <h1 className="font-bold text-bold text-2xl break-words">{top}</h1>
        <h3 className="my-4 text-slate-300">{desp}</h3>
        <h3 className="text-4xl font-bold">
          <span className="text-3xl line-through text-gray-500">
            &#8377; 500
          </span>{" "}
          &#8377; {price}
        </h3>
      </div>
      <div className="px-4 py-8">
        {tickTemp}
        {minusTemp}
        {plusTemp}
      </div>
      <div className="my-6 absolute left-4 bottom-4 group">
        <button
          className="py-2 px-4 rounded-full border-2 border-black pr-6 group-hover:pr-4 duration-300"
          onClick={paymentHandler}
        >
          Start Learning{" "}
          <span className="pl-2 group-hover:pl-4 duration-300">&rarr;</span>
        </button>
        {/* <button
          onClick={() => {
            test();
          }}
        >
          test
        </button> */}
      </div>
    </div>
  );
}

//
