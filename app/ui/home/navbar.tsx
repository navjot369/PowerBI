"use client";

import Link from "next/link";
import Image from 'next/image';
import AppLogo from "@/app/ui/logo";
import { useState, useEffect } from 'react';

export default function NavMenu() {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener('resize', () => {
    if(window.innerWidth > 936) setOpen(false);
  })});
  return(
    <div>
    <div className="fixed bg-white z-10 flex justify-between items-center px-2 sm:px-11 w-full">
      <AppLogo />
      <div className="flex items-center">
      <div className="hidden min-[936px]:flex items-center flex-row w-fit">
        <Link href="/" className="text-xl hover:text-[#444] px-4">Home</Link>
        <Link href="/" className="text-xl hover:text-[#444] px-4">Programs</Link>
        <Link href="/" className="text-xl hover:text-[#444] px-4">Resources</Link>
        <Link href="/" className="text-xl hover:text-[#444] px-4">Meet the Team</Link>
        <Link href="/" className="text-xl hover:text-[#444] px-4">Contact Us</Link>
      </div>
      <div className="px-2 min-[936px]:hidden shrink-0" onClick={() => {setOpen(!isOpen)}}>
        {isOpen? <Image src="/Icons/cross.svg" className="w-9" width="50" height="50" alt="Cross"/> :<Image src="/Icons/menu.svg" className="w-9" width="50" height="50" alt="Cross"/>}</div>
      <div className="text-xl border-2 border-black rounded-md flex items-center px-4 h-fit">Login</div>
      </div>
      </div>
      {isOpen && <div className={isOpen ?"fixed min-[936px]:hidden w-full py-4 flex items-centerease-in duration-500 bg-white top-10 z-2" : "top-[-100%]"}>
      <div className="flex items-center flex-col justify-center w-full">
        <Link href="/" className="text-xl hover:text-[#444] px-4">Home</Link>
        <Link href="/" className="text-xl hover:text-[#444] px-4">Programs</Link>
        <Link href="/" className="text-xl hover:text-[#444] px-4">Resources</Link>
        <Link href="/" className="text-xl hover:text-[#444] px-4">Meet the Team</Link>
        <Link href="/" className="text-xl hover:text-[#444] px-4">Contact Us</Link>
      </div>
        </div>}
    </div>
  )
}

function NavMenuTemp(){
  return (
    <div className="z-50 flex justify-center w-full top-0 left-0 fixed text-[black] bg-[white]">
      <div className="w-full flex flex-row justify-between py-2 max-w-6xl">
        <AppLogo />
        <div className="flex w-auto">
          <Link
            href="/program"
            className="text-center text-[1.2rem] z-[13] no-underline transition-[0.3s] mx-[3px] my-0 px-2.5 py-1 hover:text-[grey]"
          >
            Programs
          </Link>
          <Link
            href="/resources"
            className="text-center text-[1.2rem] z-[13] no-underline transition-[0.3s] mx-[3px] my-0 px-2.5 py-1 hover:text-[grey]"
          >
            Resources
          </Link>
          <Link
            href="/speaker"
            className="text-center text-[1.2rem] z-[13] no-underline transition-[0.3s] mx-[3px] my-0 px-2.5 py-1 hover:text-[grey]"
          >
            Speakers
          </Link>
        </div>
      </div>
    </div>
  );
}
