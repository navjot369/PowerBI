import Image from 'next/image';
import Link from 'next/link';

export default function VideoList({videos, linkLec} : {
    videos: object[],
    linkLec: string
}) {
    return(<div className="py-4 ">
        {videos && videos.map((item: any, ind) => {
            return(<Link key={ind} className="w-full px-2 py-4 hover:bg-slate-200 flex items-center rounded-lg" href={linkLec + ""}>
                <Image src="/Icons/play-video.svg" className="mx-4"  width="30" height="30" alt="video icon"/>
                {item.title}
            </Link>)
        })}
    </div>);
}