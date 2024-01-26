import Link from 'next/link';
import Image from 'next/image';

export default function Section2() {
  return (<div className="mx-auto lg:max-w-6xl flex flex-wrap justify-evenly p-4 md:p-11">
        <Box banner="/Images/data-science.jpg" title="Data Science Placement Program" desp="100% Assured Placement Course with No questions asked 100% Money Back guarantee in Data Science." linkSrc="/program"  />
    </div>);
}

function Box({banner, title, desp, linkSrc} : {
    banner: string,
    title: string,
    desp: string, 
    linkSrc: string
}) {
    return(<div className="bg-[white] w-full m-2 flex flex-col md:flex-row justify-evenly items-center shadow-lg rounded-sm">
        <div className="w-full">
            <Image src={banner} alt="Banner" width={400} height={300} className="w-full h-60 md:h-96 rounded-t-sm" />
        </div>
        <div className="p-8 flex flex-col items-center">
            <div className="text-3xl md:text-5xl text-center font-bold my-4 uppercase">{title}</div>
            <div className="text-[#555] text-center">{desp}</div>
            <div className="w-full my-4 flex justify-center"><Link href={linkSrc} className="w-4/5 block bg-[#008182] px-2 py-1 my-2 text-center text-[white] rounded-sm">View Course</Link></div>
        </div>
    </div>)
}

