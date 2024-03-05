'use client';
import CourseContext from "@/app/courses/contexts";
import {useState, useEffect, useContext} from 'react';
import {usePathname} from 'next/navigation';
import { BeatLoader } from "react-spinners";
import Link from 'next/link';

export default function Page({params} : {
    params: any
}) {
    const course: any = useContext(CourseContext);
    let module: any = useState({});
    let videoData: any = useState({});
    let path = usePathname();
    let link = "/courses/" + params.slug + "/module/" + (params.weeknum);
    if(Object.keys(course).length === 0){
        return(<div className="fixed top-0  right-0 w-full h-[100vh] font-bold text-4xl flex bg-white justify-center items-center">
            <BeatLoader loading={true} color="#008080" size={40}/>
        </div>);
    }
    else{
        if(course.modules.length > 0) {
            module = course.modules[params.weeknum-1];
            videoData = module.videos[params.num-1];
        }
        else{
            return(<div className="fixed top-0 left-0 right-0 w-full h-[100vh] font-bold text-3xl flex bg-white justify-center items-center">No data found...!</div>);
        }
    }
    console.log(videoData);
    console.log(module);
    return(<div className="w-full pt-24 grid grid-cols-1 items-start justify-start px-11">
        <h1 className="text-6xl font-bold">{videoData.title}</h1>
        <div className="bg-slate-200 py-1 px-4 rounded-lg mt-11 flex items-center">
            <Link href={link}>{course.title}</Link>
            <span className="text-lg mx-2 font-bold text-[--pc]">&gt;</span>
            <Link href={link}>{module.title}</Link>
            <span className="text-lg mx-2 font-bold text-[--pc]">&gt;</span>
            <Link href="">{videoData.title}</Link>
        </div>
        <div className="w-full my-11 relative pt-[50%]">
        <iframe className="w-5/6 mx-auto h-full absolute top-0 right-0 left-0" width="560" height="315" src={videoData.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    </div>)
}