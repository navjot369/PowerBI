'use client';

import Image from 'next/image';


const arrList = ["lessons", "hours", "tasks"];
const arrSrc = ["/Icons/play.svg", "/Icons/time.svg", "Icons/tasks.svg"];

export default function CurriculumSec() {
    return(<div className="mx-auto my-11 px-2 max-w-6xl">
        <div className="text-center flex flex-col items-center">
            <h3 className="text-5xl font-bold">What you will learn</h3>
            <p className="w-full md:w-2/3 my-6">Tellus nulla lectus faucibus vitae, non sem sollicitudin nunc ipsum volutpat dolor nec facilisis pulvinar mus ut egestas ultrices amet, ridiculus senectus at.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 mx-auto px-4">
            <Box imgSrc="/Images/ecourse-template.jpg" title="Introduction" desp="Quis ultricies vestibulum aliquet dolor scelerisque nibh orci adipiscing consectetur diam vel vulputate felis, pretium sociis imperdiet praesent lorem enim donec porttitor." arr={[4,12,0]} />
            <Box imgSrc="/Images/ecourse-template.jpg" title="The Basics" desp="Quis ultricies vestibulum aliquet dolor scelerisque nibh orci adipiscing consectetur diam vel vulputate felis, pretium sociis imperdiet praesent lorem enim donec porttitor." arr={[3,11,4]} />
            <Box imgSrc="/Images/ecourse-template.jpg" title="Working with Data" desp="Quis ultricies vestibulum aliquet dolor scelerisque nibh orci adipiscing consectetur diam vel vulputate felis, pretium sociis imperdiet praesent lorem enim donec porttitor." arr={[5,12,3]} />
            <Box imgSrc="/Images/ecourse-template.jpg" title="Validating" desp="Quis ultricies vestibulum aliquet dolor scelerisque nibh orci adipiscing consectetur diam vel vulputate felis, pretium sociis imperdiet praesent lorem enim donec porttitor." arr={[6,0,2]} />
            <Box imgSrc="/Images/ecourse-template.jpg" title="Loops" desp="Quis ultricies vestibulum aliquet dolor scelerisque nibh orci adipiscing consectetur diam vel vulputate felis, pretium sociis imperdiet praesent lorem enim donec porttitor." arr={[7,2,4]} />
            <Box imgSrc="/Images/ecourse-template.jpg" title="Testing" desp="Quis ultricies vestibulum aliquet dolor scelerisque nibh orci adipiscing consectetur diam vel vulputate felis, pretium sociis imperdiet praesent lorem enim donec porttitor." arr={[3,12,4]} />
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
            if(i > 0) {
                arrTemp.push(<div className="text-[#dfe0e2] text-xl ml-4 mr-2">|</div>)
            }
            arrTemp.push(<Image src={arrSrc[i]} width="20" height="20" alt="icons" />)
            arrTemp.push(<span className="text-sm">{arr[i]} {arrList[i]}</span>)
        }
    }
    return(<div className="w-full rounded-xl  hover:bg-[#f3f5f5] duration-500 border-2 border-[#ddd7d7] hover:shadow-2xl">
        <div className="w-full rounded-xl relative">
            <Image className="rounded-xl" src={imgSrc} height="500" width="1000" alt="course banner" /> 
            <div className="flex justify-center items-center h-11 w-11 absolute bg-[#00807d] text-white font-bold rounded-full right-4 bottom-0 translate-y-[50%] hover:scale-125 duration-1000 hover:shadow-lg shadow-[#00807d]">&rarr;</div>
        </div>
        <div className="p-11">
            <h3 className="text-4xl font-bold">{title}</h3>
            <div className="flex w-fit flex-row items-center my-4">
                {arrTemp}
            </div>
            <div className="text-sm">{desp}</div>
        </div>
    </div>)
}