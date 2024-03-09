"use client";
import { apiLink } from "@/app/api";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Sec1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.post(apiLink + "/contact", formData);
      // Reset form data after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      console.log(res);
      alert("thanks for reaching us!!");
      // Optionally, display a success message or redirect the user
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (display error message, log to console, etc.)
    }
  };

  return (
    <div className="flex flex-col md:flex-row pt-24 max-w-7xl mx-auto mb-14 md:mb-24">
      <div className="w-full md:w-1/2 px-4 md:px-11">
        <div className="text-6xl font-bold">Contact Us</div>
        <div className="w-28 my-2 h-1 bg-[repeating-linear-gradient(135deg,transparent_0%,transparent_10%,#ff9635_10%,#ff9635_30%)]"></div>
        <div className="text-md text-justify text-[#9f9696] my-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
        </div>
        <div className="my-11">
          <div className="my-2 flex items-end text-[#9f9696] text-lg">
            <Image
              className="w-6 mr-4"
              src="/Icons/location.svg"
              width="50"
              height="50"
              alt="Icons"
            />
            <span className="">Rajpura, Punjab</span>
          </div>
          <div className="my-2 flex items-end text-[#9f9696] text-lg">
            <Image
              className="w-6 mr-4"
              src="/Icons/mail.svg"
              width="50"
              height="50"
              alt="Icons"
            />
            <span className="">contact@example.com</span>
          </div>
          <div className="my-2 flex items-end text-[#9f9696] text-lg">
            <Image
              className="w-6 mr-4"
              src="/Icons/phone.svg"
              width="50"
              height="50"
              alt="Icons"
            />
            <span className="">+91 12334343</span>
          </div>
        </div>
        <div className="flex">
          <span className="text-lg font-bold mr-8">Keep in touch</span>
          <Link href="" className="mx-2">
            <Image
              className="w-7 hover:scale-110 duration-300"
              src="/Icons/facebook.png"
              width="50"
              height="50"
              alt="Social Media Icon"
            />
          </Link>
          <Link href="" className="mx-2">
            <Image
              className="w-7 hover:scale-110 duration-300"
              src="/Icons/instagram.png"
              width="50"
              height="50"
              alt="Social Media Icon"
            />
          </Link>
          <Link href="" className="mx-2">
            <Image
              className="w-7 hover:scale-110 duration-300"
              src="/Icons/twitter.png"
              width="50"
              height="50"
              alt="Social Media Icon"
            />
          </Link>
          <Link href="" className="mx-2">
            <Image
              className="w-7 hover:scale-110 duration-300"
              src="/Icons/youtube.png"
              width="50"
              height="50"
              alt="Social Media Icon"
            />
          </Link>
        </div>
        <div>
          <iframe
            className="h-44 w-full my-8"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1751352098286!2d76.65720287664696!3d30.516086474689523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1704803282071!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-0 md:px-11">
        <div className="bg-white md:shadow-2xl rounded-2xl px-4 md:px-11 py-6">
          <div className="text-3xl font-bold my-8">Have Questions?</div>
          <div className="text-[#9f9696]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="bg-[#fafafa] p-4 border-[#444] border-[1px] border-opacity-30 w-full my-3 focus:bg-white focus:border-dotted outline-none font-light"
              type="text"
              placeholder="Name"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="bg-[#fafafa] p-4 border-[#444] border-[1px] border-opacity-30 w-full my-3 focus:bg-white focus:border-dotted outline-none font-light"
              type="email"
              placeholder="Email Address"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className="bg-[#fafafa] p-4 border-[#444] border-[1px] border-opacity-30 w-full my-3 focus:bg-white focus:border-dotted outline-none font-light"
              type="text"
              placeholder="Subject"
              required
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              className="bg-[#fafafa] p-4 border-[#444] border-[1px] border-opacity-30 w-full my-3 focus:bg-white focus:border-dotted outline-none font-light "
              placeholder="Your Message"
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <button
              className="py-2 px-6 rounded-full bg-[#ff9635] text-white text-lg font-bold my-3"
              type="submit"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
