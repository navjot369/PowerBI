"use client";

import Link from "next/link";
import AppLogo from "@/app/ui/logo";

export default function NavMenu(){
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
