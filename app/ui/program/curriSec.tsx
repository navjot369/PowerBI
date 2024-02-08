'use client';

import Image from 'next/image';


const arrList = ["lessons", "hours", "tasks"];
const arrSrc = ["/Icons/play.svg", "/Icons/time.svg", "Icons/tasks.svg"];

export default function CurriculumSec() {
    return(<div className="mx-auto my-20 px-2 max-w-6xl">
        <div className="flex flex-col items-start">
            <h3 className="text-6xl">What you will learn</h3>
            <p className="w-full my-6">You'll learn to create impactful data visualizations, analyze complex datasets, and master advanced Power BI techniques. Gain the skills to make data-driven decisions confidently and propel your career forward.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6 mx-auto">
            <Box imgSrc="/Images/ecourse-template.jpg" title="Introduction" desp="Quis ultricies vestibulum aliquet dolor scelerisque nibh orci adipiscing consectetur diam vel vulputate felis, pretium sociis imperdiet praesent lorem enim donec porttitor." arr={[4,12,0]} />
            <Box imgSrc="/Images/ecourse-template.jpg" title="The Basics" desp="Quis ultricies vestibulum aliquet dolor scelerisque nibh orci adipiscing consectetur diam vel vulputate felis, pretium sociis imperdiet praesent lorem enim donec porttitor." arr={[3,11,4]} />
            <Box imgSrc="/Images/ecourse-template.jpg" title="Working with Data" desp="Quis ultricies vestibulum aliquet dolor scelerisque nibh orci adipiscing consectetur diam vel vulputate felis, pretium sociis imperdiet praesent lorem enim donec porttitor." arr={[5,12,3]} />
            <Box imgSrc="/Images/ecourse-template.jpg" title="Validating" desp="Quis ultricies vestibulum aliquet dolor scelerisque nibh orci adipiscing consectetur diam vel vulputate felis, pretium sociis imperdiet praesent lorem enim donec porttitor." arr={[6,0,2]} />
        </div>
    </div>);
}

function Box({imgSrc, title, desp, arr} : {
    imgSrc : string,
    title: string,
    desp: string,
    arr: number[]
}) {
    let arrTemp :any[] = []
    for(let i = 0; i < 3; i++) {
        if(arr[i] > 0) {
            arrTemp.push(<Image className="grayscale" src={arrSrc[i]} width="20" height="20" alt="icons" />)
            arrTemp.push(<span className="text-sm ml-2 mr-4">{arr[i]} {arrList[i]}</span>)
        }
    }
    return(<div className="w-full rounded-xl bg-[#f6f6f6] hover:bg-[#f3f5f5] duration-500 border-2 border-[#ddd7d7] hover:shadow-2xl">
        <div className="w-full rounded-xl p-4">
            <Image className="rounded-xl" src={imgSrc} height="500" width="1000" alt="course banner" /> 
        </div>
        <div className="p-6">
        <div className="flex justify-between items-center">
            <div>
            <h3 className="text-4xl font-bold">{title}</h3>
            <div className="flex w-fit flex-row items-center mb-4">
                {arrTemp}
            </div>
            </div>
            <div className="flex mx-11 hover:mx-10 justify-center items-center h-11 w-11 text-4xl text-black rounded-full duration-1000 border-2 border-black hover:shadow-lg ">&gt;</div>
        </div>
            <div className="text-sm">{desp}</div>
        </div>
    </div>)
}