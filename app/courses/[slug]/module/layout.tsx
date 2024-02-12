'use client';
import {useContext} from 'react';
import CourseContext from '../../contexts';
import SideBar from '@/app/ui/module/SideBarList';

import NavMenu from "@/app/ui/home/navbar";

export default function Layout({children} : {
    children : JSX.Element
}) {
    const course = useContext(CourseContext);
    return(<div>
        <NavMenu login="Simran" />
        <div className="grid grid-cols-[350px_1fr] mt-24 gap-11">
            <div className="h-full min-h-fit py-11 px-11 mt-14 border-solid rounded-[0_10px_10px_0] bg-[#078181] shadow-lg">
                <h1 className="text-4xl text-center text-white mb-11">{course.title}</h1>
                <SideBar modules={course.modules}/>
            </div>
            <div>{children}</div>
        </div>
    </div>);
}