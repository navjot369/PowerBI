'use client'
import {useContext, useState, useEffect} from 'react';
import CourseContext from '@/app/courses/contexts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SideBar from '@/app/ui/lecture/sidebar';
import clsx from 'clsx';

export default function Layout({children, params} : {
    children: JSX.Element,
    params: any
}) {
    const course:any = useContext(CourseContext);
    const [sideOpen, setOpen] = useState(true);
    const [prevWork, setPrevWork] = useState(true);
    const [nextWork, setNextWork] = useState(true);
    let strtemp: string[] = [];
    const [linkArr, setLinkArr] = useState(strtemp);
    let path = usePathname();
    console.log(course);
    console.log(path);
    if(Object.keys(course).length > 0) {
        let arr = getLinkArr(course, params.slug);
        setLinkArr(arr);
        let curr = linkArr.indexOf(path);
        if(curr == 0) {
            setPrevWork(false)
        }
        if(curr = linkArr.length - 1) {
            setNextWork(false);
        }
    }
    
    const handlePrev = () => {
        
    }
    return(<div className="duration-300 w-full box-border">
        <SideBar course={course} link={"/courses/" + params.slug + "/lecture/"} isOpen={sideOpen} setOpen={setOpen}/>
        <div className={clsx("w-full h-11 bg-slate-700 flex justify-center duration-300 text-white", {"pl-80": sideOpen, "pl-11": !sideOpen})}>
            <button className={clsx("font-bold text-md w-1/2 hover:bg-slate-500", {"text-slate-950" : !prevWork})} onClick={handlePrev}>&#9664; Prev</button>
            <button className="font-bold text-md w-1/2 hover:bg-slate-500" onClick={handlePrev}>Next &#9654;</button>
        </div>
        <div className={clsx("duration-300 w-full p-1", {"pl-80" : sideOpen, "pl-11" : !sideOpen})}>{children}</div>
    </div>)
}

const getLinkArr = (course: any, slug: string) => {
    let link = "/courses/" + slug + "/lecture/";
    let linkArr: string[] = [];
    for(let i = 0; i < course.modules.length; i++) {
        let module = course.modules[i];
        for(let j = 0; j < module.videos.length; j++) {
            linkArr.push(link + (i+1) + "/videos/" + (j+1));
        }
        for(let j = 0; j < module.assignments.length; j++) {
            linkArr.push(link + (i+1) + "/assignment/" + (j+1));
        }
    }
    return linkArr;
}