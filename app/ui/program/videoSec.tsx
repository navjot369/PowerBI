import Link from 'next/link';

export default function VideoSec() {
    return(<div className="my-6 bg-black py-6 px-2">
        <div className="max-w-6xl mx-auto">
            <div className="text-white px-2  md:pt-11 pb-4">
                <h3 className="text-4xl font-bold text-center md:text-left">Check out the Sample Video</h3>
                <p className="my-2 text-lg font-bold text-center md:text-left">This Video will give you a very brief insight into the dynamics of Power BI Assured with Skill Craft</p>
            </div>
            <div className="relative overflow-hidden pt-[66.6%] w-full">
        <iframe width="560" className="absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-3xl" height="316" src="https://www.youtube.com/embed/X6CsbhSVUEc?si=tmi-RFpeDDVjJ4Y5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        </div>
    </div>)
}