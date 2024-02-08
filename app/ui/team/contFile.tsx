import Image from 'next/image';

export default function Container({ source, desig, name, desp } : {
    source : string,
    desig: string,
    name: string,
    desp: string
}) {
    return(<div className="my-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="p-4">
            <Image src={source} className="rounded-full w-2/3 aspect-sqaure mx-auto md:w-full shadow-xl" width="500" height="500" alt="Speaker" />
        </div>
        <div className="flex flex-col items-center md:items-start justify-center px-11">
            <div className="text-xl font-bold my-4">{desig}</div>
            <div className="text-5xl font-bold my-2 text-center md:text-left">{name}</div>
            <div className="text-md my-4 text-center md:text-left">{desp}</div>
        </div>
    </div>);
}