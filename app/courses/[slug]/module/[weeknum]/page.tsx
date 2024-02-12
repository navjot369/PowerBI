'use client';
import {useContext} from 'react';
import CourseContext from '@/app/courses/contexts';
import VideoList from '@/app/ui/module/videoLists';
import AssingmentList from '@/app/ui/module/assignment';

interface courseObject {
    title: string,
    modules: object[]
}
export default function Page({ params }: {
    params: {
        slug: string,
        weeknum: number
    }
}) {
    const course = useContext(CourseContext) as {title:string, modules: object[]};
    let module: any;
    let linkLec = "/course/"+ params.slug +"/lecture/";
    if(Object.keys(course).length === 0){
        return(<div className="fixed top-0 left-0 right-0 w-full h-[100vh] font-bold text-3xl flex bg-white justify-center items-center">Loading....</div>);
    }
    else{
        if(course.modules.length > 0) {
            module = course.modules[params.weeknum-1];
        }
        else{
            return(<div className="fixed top-0 left-0 right-0 w-full h-[100vh] font-bold text-3xl flex bg-white justify-center items-center">No data found...!</div>);
        }
    }
    return(<div className="w-full px-4">
        <h1 className="text-center text-5xl font-bold mb-11">{module.title}</h1>
        <div className="rounded-lg border-2 border-black mx-11 shadow-lg my-2 p-4 overflow-hidden">
        <h3 className="text-3xl border-b-2 border-slate-600 pb-2">Videos</h3>
        <VideoList videos={module.videos} linkLec={linkLec}/>
        </div>
        <div className="rounded-lg border-2 border-black mx-11 shadow-lg my-2 p-4 overflow-hidden">
        <h3 className="text-3xl border-b-2 border-slate-600 pb-2">Assignment</h3>
        <AssingmentList assings={module.assignments} linkLec={linkLec}/>
        </div>
    </div>);
}