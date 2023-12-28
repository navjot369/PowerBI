import Link from 'next/link';


export default function Section4() {
    return(<div className="my-14 bg-sec4-bg bg-fixed w-full">
        <div className="bg-[#007991] bg-opacity-80 full pt-24 px-11 lg:flex justify-evenly">
            <div className="w-full lg:w-4/6 flex flex-col sm:flex-row justify-evenly">
            <Box title="Experience" desp="Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvinar dapibus. "/>
            <Box title="Education" desp="Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvinar dapibus. "/>
            <Box title="Certification" desp="Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvinar dapibus. "/>
            </div>
            <div className="bg-white p-8 w-full sm:w-1/2 lg:w-2/6 my-11 lg:my-0">
                <div className="text-xl my-4">Study at your pace</div>
                <div className="text-4xl my-6 leading-8">Boost Your Career by Learning Skills in High Demand</div>
                <div className=""><Link href="/program" className="">&#x27A4; Get Started</Link></div>
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
        <div className="text-md text-white">{desp}</div>
    </div>)
}