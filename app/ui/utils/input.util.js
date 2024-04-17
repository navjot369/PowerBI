"use client";
import { useState } from "react";
import Image from "next/image";

export default function InputEle({ refer, value, handleChange, type, name }) {
  const [inputType, setType] = useState(type);

  return (
    <div className="bg-white h-14 p-4 my-4 border-2 border-black rounded-full items-center relative">
      <div className="">
        <input
          className="outline-none text-lg auth-input w-full md:w-72 bg-transparent pl-2 placeholder:text-white disabled:bg-white disabled:text-slate-500"
          ref={refer}
          value={value}
          name={name}
          type={inputType}
          onChange={handleChange}
          id={name}
          placeholder="."
          disabled={false}
          required
        ></input>
        <label
          className="absolute left-4 top-0 duration-300 text-9xl"
          htmlFor={name}
        >
          {name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()}
        </label>
        {type == "password" && (
          <div className="flex justify-center items-center h-full absolute top-0 right-2 duration-500">
            {inputType == "password" ? (
              <Image
                src="/Icons/eye-open.svg"
                width="100"
                height="100"
                className="cursor-default w-8"
                onClick={() => setType("text")}
              />
            ) : (
              <Image
                src="/Icons/eye-close.svg"
                width="100"
                height="100"
                className="cursor-default w-8"
                onClick={() => setType("password")}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
