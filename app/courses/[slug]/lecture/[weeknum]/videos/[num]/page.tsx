"use client";
import CourseContext from "@/app/courses/contexts";
import { useState, useEffect, useContext } from "react";
import { usePathname } from "next/navigation";
import { BeatLoader } from "react-spinners";
import Link from "next/link";
import AppLogo from "@/app/ui/logo";
import Image from "next/image";

export default function Page({ params }: { params: any }) {
  const course: any = useContext(CourseContext);
  let module: any = useState({});
  let videoData: any = useState({});
  let link = "/courses/" + params.slug + "/module/" + params.weeknum;
  if (Object.keys(course).length === 0) {
    return (
      <div className="fixed top-0  right-0 w-full h-[100vh] font-bold text-4xl flex bg-white justify-center items-center">
        <BeatLoader loading={true} color="#008080" size={40} />
      </div>
    );
  } else {
    if (course.modules.length > 0) {
      module = course.modules[params.weeknum - 1];
      videoData = module.videos[params.num - 1];
      if (module.videos.length < params.num) {
      }
    } else {
      return (
        <div className="fixed top-0 left-0 right-0 w-full h-[100vh] font-bold text-3xl flex bg-white justify-center items-center">
          No data found...!
        </div>
      );
    }
  }
  console.log(params.num, "hello");
  return (
    <div className="w-full pt-24 grid grid-cols-1 items-start justify-start px-11 relative">
      {/* Blur effect overlay */}

      {(params.weeknum == 1 || params.weeknum == 2 || params.weeknum == 5) &&
      params.num == 1 ? (
        <></>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-100 flex justify-around items-center z-50 flex-col">
          <div className="flex flex-col w-full items-center ">
            <div className="text-black w-full text-center flex justify-center items-center gap-4 flex-col">
              <Image
                src="/logo_blacktext.png"
                width={300}
                height={300}
                className=" py-2 shrink-0"
                alt="Placed logo"
              />
              <p className="text-3xl mb-5  font-bold text-black">
                We are Launching Soon
              </p>
            </div>

            <div className="flex gap-5 m-4">
              <div className="rounded-md p-2 bg-[--pc] text-white font-bold cursor-pointer">
                <Link href="/contact">Contact Us</Link>
              </div>
              <div className="rounded-lg p-2 bg-[--pc] text-white font-bold">
                <Link href="/">About Us</Link>
              </div>
            </div>

            <div className="flex flex-row align-center justify-center w-full">
              <Link href="https://www.linkedin.com/company/coursesforcareers-dot-tech/">
                <Image
                  src="/Icons/linkedin.svg"
                  width="50"
                  height="50"
                  className="w-8 h-8 mr-2"
                  alt="Social media Logo"
                />
              </Link>
              <Link href="https://www.instagram.com/coursesforcareers.tech?igsh=a2VoYmlrdXdsMHRr">
                <Image
                  src="/Icons/instagram.png"
                  width="50"
                  height="50"
                  className="w-8 h-8 mr-2"
                  alt="Social media Logo"
                />
              </Link>
            </div>
          </div>

          <div>
            <Image src="/wait.svg" width={500} height={500} alt="waiting" />
          </div>
        </div>
      )}
      <div className="grid grid-cols-2 w-full bg-slate-200"></div>
      <h1 className="text-6xl font-bold">{videoData.title}</h1>
      <div className="bg-slate-200 py-1 px-4 rounded-lg mt-11 flex items-center">
        <Link href={link}>{course.title}</Link>
        <span className="text-lg mx-2 font-bold text-[--pc]">&gt;</span>
        <Link href={link}>{module.title}</Link>
        <span className="text-lg mx-2 font-bold text-[--pc]">&gt;</span>
        <Link href="">{videoData.title}</Link>
      </div>
      <div className="w-full my-11 relative pt-[50%]">
        <iframe
          className="w-5/6 mx-auto h-full absolute top-0 right-0 left-0"
          width="560"
          height="315"
          src={videoData.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}
