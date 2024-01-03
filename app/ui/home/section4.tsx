import Link from 'next/link';
import { open_sans } from '../fonts';

export default function Section4() {
    return(<div className="my-14 bg-sec4-bg md:bg-fixed bg-center w-full">
        <div className="bg-[#007991] bg-opacity-80 full pt-24 px-11 lg:flex justify-evenly">
            <div className="w-full lg:w-4/6 flex flex-col sm:flex-row justify-evenly">
            <Box title="Selection" desp="Show your Potential by clearing an entrance test for being a part of Placed"/>
            <Box title="Education" desp="Get taught by the Best in the Industry and Become a Highly-skilled Data Science in less than a year"/>
            <Box title="Placement" desp=" We are not an Ed-tech platform, we Teach people to make them Industry ready!"/>
            </div>
            <div className="bg-white p-8 w-full sm:w-1/2 lg:w-2/6 my-11 lg:my-0">
                <div className="text-xl my-4">Potential Meets Opportunity</div>
                <div className="text-3xl my-6 leading-8">Do you have The Potential But Don't have the opportunity? Placed is for you</div>
                <div className=""><Link href="/program" className="">&#x27A4;  Explore</Link></div>
            </div>
        </div>
    </div>)
}

function Box({title, desp} : {
    title: string,
    desp: string
}){
    return(<div className="flex w-full my-5 sm:m-0 sm:w-1/3 h-fit flex-col justify-evenly px-4">
        <div className="w-20 h-1 bg-[repeating-linear-gradient(135deg,transparent_0%,transparent_10%,#ff9635_10%,#ff9635_30%)]"></div>
        <div className="text-4xl my-4 text-white">{title}</div>
        <div className={open_sans.className + "text-md text-white"}>{desp}</div>
    </div>)
}