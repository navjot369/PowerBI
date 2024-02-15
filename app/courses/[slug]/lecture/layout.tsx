'use client'
import {useContext, useState} from 'react';
import CourseContext from '@/app/courses/contexts';
import Link from 'next/link';
import SideBar from '@/app/ui/lecture/sidebar';
import clsx from 'clsx';

export default function Layout({children, params} : {
    children: JSX.Element,
    params: any
}) {
    const course:any = useContext(CourseContext);
    const [sideOpen, setOpen] = useState(true);
    return(<div className="duration-300">
        <SideBar course={course} link={"/courses/" + params.slug + "/lecture/"} isOpen={sideOpen} setOpen={setOpen}/>
        <div className={clsx("duration-300", {"ml-80" : sideOpen, "ml-11" : !sideOpen})}>{children}</div>
    </div>)
}