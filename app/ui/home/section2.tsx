import Link from 'next/link';
import Image from 'next/image';

export default function Section2() {
  return (<div className="mx-auto lg:max-w-6xl flex flex-wrap justify-evenly">
        <Box banner="/Images/data-science.jpg" title="Data Science MasterClass" desp="Description of the course" linkSrc="/course"  />
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
            <div className="text-5xl text-center font-bold">{title}</div>
            <div className="text-[#555] text-center">{desp}</div>
            <div className="w-full my-4"><Link href={linkSrc} className="w-full block bg-[#428bca] px-2 py-1 my-2 text-center text-[white] rounded-sm">See more...</Link></div>
        </div>
    </div>)
}

