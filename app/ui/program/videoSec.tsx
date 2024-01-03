import Link from 'next/link';

export default function VideoSec() {
    return(<div className="my-6 bg-black py-6 px-2">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 mx-auto">
            <div className="flex h-auto flex-col justify-center items-center md:items-start text-white px-2">
                <h3 className="text-4xl font-bold">Check out the Sample Video</h3>
                <div className="text-xl text-center md:text-justify my-2"> This Video will give you a very brief insight into the dynamics of data science</div>
                <Link href="/resources" className="bg-white text-black p-2 text-md rounded-full box-border font-bold hover:bg-slate-300">Free Resources</Link>
            </div>
            <div className="relative overflow-hidden pt-[66.6%] w-full">
        <iframe width="560" className="absolute top-0 bottom-0 left-0 right-0 w-full h-full" height="316" src="https://www.youtube.com/embed/X6CsbhSVUEc?si=tmi-RFpeDDVjJ4Y5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        </div>
    </div>)
}