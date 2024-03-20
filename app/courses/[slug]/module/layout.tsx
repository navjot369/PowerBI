'use client';
import {useContext} from 'react';
import CourseContext from '../../contexts';
import SideBar from '@/app/ui/module/SideBarList';

import NavMenu from "@/app/ui/home/navbar";

export default function Layout({children} : {
    children : JSX.Element
}) {
    const course: any = useContext(CourseContext);
    return(<div>
        <NavMenu login="Simran" />
        <div className="fixed h-full top-0 left-0 w-14 bg-[#078181]"></div>
        <div className="pl-4 grid grid-cols-[350px_1fr] mt-24 gap-11">
            <div className="h-full min-h-fit py-11 px-11 grid">
            <h1 className="text-xl text-center text-[#444B58] font-bold my-4 ">Course Material</h1>
                <SideBar modules={course.modules}/>
            </div>
            <div>{children}</div>
        </div>
    </div>);
}