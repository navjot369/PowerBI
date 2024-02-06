import Image from 'next/image';
import Link from 'next/link';

export default function WelSec({ name } : {
    name: string
}) {
    return(<div className="relative w-full mx-auto mt-11 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 w-full h-full">
            <Image src="/Images/profile_background.svg" className="w-full h-full top-0 left-0 right-0" width="1000" height="1000" alt="Backround-graphics" />
        </div>
        <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#14BAB7] shadow-[0_0_100px_100px_#14BAB7]"></div>
        <div className="relative pt-52 px-32 max-w-6xl mx-auto">
            <div className="w-full grid grid-cols-1 md:grid-cols-[6fr_5fr]">
                <div className="relative h-full">
                    <div className="absolute top-4 left-4 rounded-full bg-[#00807E] w-11 h-11 shadow-[0_0_100px_100px_#00807E]"></div>
                    <div className="relative h-full px-6 py-11 rounded-lg bg-[#F1F1F1] flex flex-col items-center">
                        <Image src="/Images/Simran_img.jpeg" className="rounded-full border-2 border-[#00807E] w-32 h-32" width="100" height="100" alt="Profile pic" />
                        <h1 className="my-4 text-3xl font-bold text-center">Simrandeep Singh</h1>
                        <p className="mt-6 text-sm text-slate-500">It is a long established fact that a reader will be distracted by the readable content of a page. It is a long established fact that a reader will be distracted by the readable content of a page</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 items-center pl-11 h-full gap-4">
                    <Link className="flex h-full bg-[#00807E] rounded-lg py-4 flex-col items-center justify-center hover:scale-95 duration-300" href="/profile">
                        <Image src="/Images/profile_course1.svg" className="w-16 h-16 my-4" width="100" height="100" alt="Icon" />
                        <h3 className="text-white font-bold text-xl">Enrolled Courses</h3>
                    </Link>
                    <Link className="flex h-full bg-[#00807E] rounded-lg py-4 flex-col items-center justify-center hover:scale-95 duration-300" href="/profile">
                        <Image src="/Images/profile_course2.svg" className="w-16 h-16 my-4" width="100" height="100" alt="Icon" />
                        <h3 className="text-white font-bold text-xl">Course Available</h3>
                    </Link>
                </div>
            </div>
            <div className="w-full mt-24 pb-11">
                <Image src="/Images/profile_stats.svg" className="block mx-auto" width="500" height="500" alt="Stats" />
            </div>
        </div>
    </div>);
}