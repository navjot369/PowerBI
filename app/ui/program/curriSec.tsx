"use client";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { apiLink } from "@/app/api";
import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";

const arrList = ["lessons", "hours", "tasks"];
const arrSrc = ["/Icons/play.svg", "/Icons/time.svg", "Icons/tasks.svg"];

export default function CurriculumSec() {
  const [data, setData] = useState({ course: { modules: [] } });

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get(
          apiLink + "/course/" + "65dadfed4f55cc9363c750e4"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    };
    getCourses();
  }, []);

  useEffect(() => {
    console.log(data.course.modules);
  }, [data]);

  return (
    <div className="mx-auto my-8 sm:my-20 px-2 max-w-6xl">
      <div className="flex flex-col items-start">
        <h3 className="w-full text-3xl font-bold sm:font-normal text-center sm:text-left sm:text-6xl">What you will learn</h3>
        <p className="w-full my-2 sm:my-6 text-center sm:text-left px-1">
          You'll learn to create impactful data visualizations, analyze complex
          datasets, and master advanced Power BI techniques. Gain the skills to
          make data-driven decisions confidently and propel your career forward.
        </p>
      </div>
      {data.course.modules.length > 0? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-6 mx-auto">
          {data.course.modules.map((course: any, ind) => (
            <Box
              imgSrc={`/Images/Courses_banner/banner${ind+1}.jpg`}
              title={course.title}
              link={`/courses/65dadfed4f55cc9363c750e4/lecture/${
                ind + 1
              }/videos/${course.videos.length > 0 ? "1" : "1"}`}
              desp={course.description}
              arr={[4, 12, course.length]}
              vid={course.videos}
              asg={course.assignments}
            />
          ))}
        </div>
      ) : (
        <h1 className="w-full text-4xl h-60 font-bold flex justify-center items-center">
          <BeatLoader loading={true} color="#008080" size={40}/>
        </h1>
      )}
    </div>
  );
}

function Box({
  imgSrc,
  title,
  desp,
  arr,
  link,
  vid,
  asg,
}: {
  imgSrc: string;
  title: string;
  desp: string;
  arr: number[];
  link: string;
  vid: any;
  asg: any;
}) {
  let arrTemp: any[] = [];
  for (let i = 0; i < 3; i++) {
    if (arr[i] > 0) {
      arrTemp.push(
        <Image
          className="grayscale"
          src={arrSrc[i]}
          width="20"
          height="20"
          alt="icons"
          key={"Image-" + i}
        />
      );
      arrTemp.push(
        <span className="text-sm ml-2 mr-4" key={"span-" + i}>
          {arr[i]} {arrList[i]}
        </span>
      );
    }
  }
  return (
    <div className="w-full rounded-xl bg-[#f6f6f6] hover:bg-[#f3f5f5] duration-500 border-2 border-[#ddd7d7] hover:shadow-2xl">
      <div className="w-full rounded-xl p-1 sm:p-4">
        <Image
          className="rounded-xl h-72 md:h-80"
          src={imgSrc}
          height="500"
          width="1000"
          alt="course banner"
        />
      </div>
      <div className="p-2 sm:p-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-4xl font-bold mb-4">{title}</h3>
            <div className="flex w-fit flex-row items-center mb-4 gap-2 sm:gap-6">
              <span className="flex gap-2">
                {" "}
                <Image
                  className="grayscale"
                  src={arrSrc[0]}
                  width="20"
                  height="20"
                  alt="icons"
                />
                {vid.length} Lessons
              </span>
              <span className="flex gap-2">
                {" "}
                <Image
                  className="grayscale"
                  src={arrSrc[2]}
                  width="20"
                  height="20"
                  alt="icons"
                />
                {asg.length} Assignments
              </span>
            </div>
          </div>
          <Link
            href={link}
            className="flex mx-1 md:mx-11 hover:scale-110 justify-center items-center w-14 h-14 pl-1 text-3xl text-black rounded-full duration-1000 border-2 border-black hover:shadow-lg "
          >&#9654;</Link>
        </div>
        <div className="text-sm">{desp}</div>
      </div>
    </div>
  );
}
