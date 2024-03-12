"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { apiLink } from "@/app/api";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

export default function FormLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [resMessage, setResMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const userRef: any = useRef(null);
  const passRef: any = useRef(null);
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setResMessage("");
    userRef.current.toggleAttribute("disabled", true);
    passRef.current.toggleAttribute("disabled", true);

    try {
      const res = await axios.post(apiLink + "/auth/login", formData);
      localStorage.setItem("user", formData.username);
      window.location.href = "/";
    } catch (error) {
      setResMessage("Invalid Username or Password!!");
      userRef.current.toggleAttribute("disabled", false);
      passRef.current.toggleAttribute("disabled", false);
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <form
      className="w-full flex flex-col items-stretch justify-center md:items-center mt-11 md:px-4"
      onSubmit={handleSubmit}
    >
      <div className="text-md text-red-700 font-bold">{resMessage}</div>
      <div className="bg-white h-11 p-2 my-2 rounded-xl grid grid-cols-[40px_1fr] grid-rows-1 items-center relative">
        <Image
          className="w-8 h-8"
          src="/Icons/user-login.svg"
          width="100"
          height="100"
          alt="Icon"
        ></Image>
        <div className="pt-2">
          <input
            className="outline-none auth-input w-full md:w-72 placeholder:text-white disabled:bg-white disabled:text-slate-500"
            ref={userRef}
            value={formData.username}
            type="text"
            name="username"
            onChange={handleChange}
            id="username"
            placeholder="."
            disabled={false}
            required
          ></input>
          <label
            className="absolute left-12 top-0 duration-300"
            htmlFor="username"
          >
            Username
          </label>
        </div>
      </div>
      <div className="bg-white h-11 p-2 my-2 rounded-xl grid grid-cols-[40px_1fr] grid-rows-1 items-center relative overflow-hidden">
        <Image
          className="w-7 h-7"
          src="/Icons/lock-login.svg"
          width="100"
          height="100"
          alt="Icon"
        ></Image>
        <div className="pt-2">
          <input
            className="outline-none auth-input w-full md:w-72 placeholder:text-white disabled:bg-white disabled:text-slate-500"
            ref={passRef}
            value={formData.password}
            name="password"
            type={showPass ? "text" : "password"}
            onChange={handleChange}
            id="pass"
            placeholder="."
            disabled={false}
            required
          ></input>
          <label className="absolute left-12 top-0 duration-300" htmlFor="pass">
            Password
          </label>
          <p
            className="absolute text-sm h-full top-0 right-0 bg-white p-2 flex items-center text-black font-bold cursor-default"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? "Hide" : "Show"}
          </p>
        </div>
      </div>
      <div className="w-full">
        {isLoading ? (
          <div className="w-full p-3 flex h-11 justify-center items-center rounded-xl my-2 bg-[#289492]">
            <BeatLoader
              color="white"
              loading={true}
              size={10}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <button
            className="w-full p-2 text-xl text-white flex h-11 justify-center items-center my-2 rounded-xl bg-[#1e4847] hover:brightness-150 font-bold duration-200"
            type="submit"
          >
            Continue
          </button>
        )}
      </div>
    </form>
  );
}
