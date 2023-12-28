import Image from 'next/image';
import Link from 'next/link';

export default function Section3() {
    return(<div className="mx-auto lg:max-w-6xl flex flex-wrap justify-evenly">
        <Box banner="/Images/data-science.jpg" title="Data Science MasterClass" desp="Description of the course" linkSrc="/course"  />
        <Box banner="/Images/data-science.jpg" title="Data Science MasterClass" desp="Description of the course" linkSrc="/course"  />
        <Box banner="/Images/data-science.jpg" title="Data Science MasterClass" desp="Description of the course" linkSrc="/course"  />
    </div>);
}

function Box({banner, title, desp, linkSrc} : {
    banner: string,
    title: string,
    desp: string, 
    linkSrc: string
}) {
    return(<div className="bg-[white] w-[30%] m-2 shadow-lg rounded-sm min-w-[300px]">
        <div className="">
            <Image src={banner} alt="Banner" width={400} height={300} className="w-full h-48 rounded-t-sm" />
        </div>
        <div className="p-4">
            <div className="text-5xl font-bold">{title}</div>
            <div className="text-[#555]">{desp}</div>
            <div className="w-full my-4"><Link href={linkSrc} className="w-full block bg-[#428bca] px-2 py-1 my-2 text-center text-[white]">See more...</Link></div>
        </div>
    </div>)
}