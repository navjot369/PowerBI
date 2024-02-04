"use client";

import Link from "next/link";
import Image from "next/image";
import AppLogo from "@/app/ui/logo";
import { useState, useEffect, Fragment } from "react";

export default function NavMenu({ login }: { login: string }) {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1000) setOpen(false);
    });
  });
  return (
    <div>
      <div className="fixed bg-white z-20 flex items-center justify-between px-2 sm:px-11 w-full top-0 left-0 right-0">
        <AppLogo />
        <div className="flex items-center">
          <div className="hidden min-[1000px]:flex items-center flex-row w-fit">
            <Link
              href="/"
              className="text-md font-bold hover:text-[#444] px-2 uppercase min-[1030px]:px-4"
            >
              Home
            </Link>
            <Link
              href="/program"
              className="text-md font-bold hover:text-[#444] px-2 uppercase min-[1030px]:px-4"
            >
              Programs
            </Link>
            <Link
              href="/resource"
              className="text-md font-bold hover:text-[#444] px-2 uppercase min-[1030px]:px-4"
            >
              Resources
            </Link>
            <Link
              href="/team/hiring_partners"
              className="text-md font-bold hover:text-[#444] px-2 uppercase min-[1030px]:px-4"
            >
              Meet the Team
            </Link>
            <Link
              href="/contact"
              className="text-md font-bold hover:text-[#444] px-2 uppercase min-[1030px]:px-4"
            >
              Contact Us
            </Link>
          </div>
          </div>
          <div
            className="px-2 min-[1000px]:hidden shrink-0 "
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <Image
                src="/Icons/cross.svg"
                className="w-9"
                width="50"
                height="50"
                alt="Cross"
              />
            ) : (
              <Image
                src="/Icons/menu.svg"
                className="w-9"
                width="50"
                height="50"
                alt="Cross"
              />
            )}
          </div>
          {login === "not" ? (
            <button className="text-md font-bold border-2 border-[#078181] text-white bg-[#078181] rounded-md flex items-center px-4 h-fit hover:bg-white hover:text-[#078181]">
              Login
            </button>
          ) : (
            <div className="hidden min-[1000px]:flex flex-row items-center w-fit">
              <Link
                href="/profile"
                className="text-md font-bold border-2 border-[#078181] text-white mx-2 bg-[#078181] rounded-full flex items-center px-4  h-fit hover:bg-white hover:text-[#078181]"
              >
                Profile
              </Link>
              <button className="text-md font-bold border-2 border-[#078181] text-white mx-2 bg-[#078181] rounded-full flex items-center px-4 h-fit hover:bg-white hover:text-[#078181]">
                Sign out
              </button>
            </div>
          )}
        </div>
      {isOpen && (
        <div
          className={
            isOpen
              ? "fixed min-[1000px]:hidden w-full py-4 ease-in flex items-center duration-100 bg-white top-10 z-2"
              : "top-[-100%]"
          }
        >
          <div className="flex items-center flex-col justify-center w-full">
            <Link href="/" className="text-xl hover:text-[#444] px-4">
              Home
            </Link>
            <Link href="/program" className="text-xl hover:text-[#444] px-4">
              Programs
            </Link>
            <Link href="/resource" className="text-xl hover:text-[#444] px-4">
              Resources
            </Link>
            <Link
              href="/team/hiring_partners"
              className="text-xl hover:text-[#444] px-4"
            >
              Meet the Team
            </Link>
            <Link href="/contact" className="text-xl hover:text-[#444] px-4">
              Contact Us
            </Link>
            {login !== "" && (
              <Fragment>
                <Link
                  href="/profile"
                  className="text-md font-bold border-2 border-[#078181] text-white bg-[#078181] rounded-md flex items-center px-4 my-2 h-fit hover:bg-white hover:text-[#078181]"
                >
                  Profile
                </Link>
                <button className="text-md font-bold border-2 border-[#078181] text-white bg-[#078181] rounded-md flex items-center px-4 h-fit hovewhiteblack hover:[#078181]white">
                  Sign out
                </button>
              </Fragment>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
