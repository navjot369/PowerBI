"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";
import AppLogo from "@/app/ui/logo";

export default function NavMenu() {
  let [cName, setName] = useState("onTop");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        setName("scrolled");
      } else {
        setName("onTop");
      }
    });
  });
  return (
    <div className={clsx("z-50 flex justify-center w-full top-0 left-0 ",
    {"absolute text-[white]" : cName === "onTop"},
    {"fixed text-[black] bg-[white]" : cName === "scrolled"})}>
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
