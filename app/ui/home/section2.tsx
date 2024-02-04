import Link from 'next/link';
import Image from 'next/image';

export default function Section2() {
  return (<div className="mx-auto lg:max-w-6xl flex flex-wrap justify-evenly p-4 md:p-11">
        <Box banner="/Images/data-science.jpg" title="Power BI Assured" desp="with Skill craft" linkSrc="/program"  />
    </div>);
}

function Box({banner, title, desp, linkSrc} : {
    banner: string,
    title: string,
    desp: string, 
    linkSrc: string
}) {
    return(<div className="bg-[white] w-full m-2 flex flex-col md:flex-row justify-evenly items-center shadow-[4px_4px_10px_0_#aaa] hover:shadow-[4px_4px_10px_4px_#ccc] hover:scale-[1.01] transition-all duration-500 rounded-lg">
        <div className="w-1/2">
            <Image src={banner} alt="Banner" width={400} height={300} className="w-full h-60 md:h-96 rounded-t-sm" />
        </div>
        <div className="p-8 flex flex-col items-start">
            <div className="text-3xl md:text-5xl font-bold my-2 uppercase">{title}</div>
            <div className="text-[#555] text-xl">{desp}</div>
            <div className="w-full my-11 flex justify-center"><Link href={linkSrc} className="w-fit block bg-[#008182] px-4 py-2 my-2 ml-auto mr-11 text-center text-[white] hover:bg-[#088] rounded-full">View Course</Link></div>
        </div>
    </div>)
}

