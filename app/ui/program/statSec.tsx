import Image from 'next/image';

export default function StatSec() {
    return(<div className="border-y-4 border-black my-11 mx-auto w-4/5 grid grid-cols-2">
        <div className="flex flex-row justify-evenly items-center">
        <div className="my-6 flex flex-col items-center">
            <div className="text-5xl font-bold">320</div>
            <div className="text-sm text-gray-500">Lessons</div>
        </div>
        <div className="my-6 flex flex-col items-center">
            <div className="text-5xl font-bold">112</div>
            <div className="text-sm text-gray-500">Hours of learning</div>
        </div>
        <div className="my-6 flex flex-col items-center">
            <div className="text-5xl font-bold">24</div>
            <div className="text-sm text-gray-500">Series</div>
        </div>
        </div>
        <div className="my-2 flex flex-col justify-between">
            <h1 className="text-md text-black font-bold">Be a Master in:</h1>
            <div className="flex h-20">
            <Image src="/Images/unnamed.png"   className="mx-2 h-full" width="100" height="100" alt="Tech Stack"/>
            <Image src="/Images/unnamed-2.png" className="mx-2 h-full" width="100" height="100" alt="Tech Stack"/>
            <Image src="/Images/unnamed-3.png" className="mx-2 h-full" width="100" height="100" alt="Tech Stack"/>
            <Image src="/Images/unnamed-4.png" className="mx-2 h-full" width="100" height="100" alt="Tech Stack"/>
            <Image src="/Images/unnamed-5.png" className="mx-2 h-full" width="100" height="100" alt="Tech Stack"/>
            </div>
        </div>
    </div>)
}