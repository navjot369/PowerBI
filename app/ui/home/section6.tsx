import Image from 'next/image';


export default function Section6() {
    return(<div className="mx-auto max-w-7xl my-6">
        <div className="flex flex-col w-full sm:flex-row justify-between items-stretch">
            <div className="w-full sm:w-1/2">
                <div className="text-6xl font-bold mx-4 my-4">What Our Students Say</div>
            </div>
            <div className="sm:w-1/2 flex justify-center items-center">
                <div className="text-7xl font-bold text-[#22323d]">4.8</div>
                <div className="flex flex-col justify-between">
                    <div className="text-[#ff9635]">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
                    <div className="">2,345 ratings</div>
                    <div className="">Google Reviews</div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
            <Review title="Emma Hall" desp="Massa amet, at dolor tellus pellentesque aenean in eget massa tincidunt habitasse volutpat adipiscing sed id sit auctor eu vivamus nulla." image="/Images/Simran_profile.jpeg"/>
            <Review title="Emma Hall" desp="Massa amet, at dolor tellus pellentesque aenean in eget massa tincidunt habitasse volutpat adipiscing sed id sit auctor eu vivamus nulla." image="/Images/Simran_profile.jpeg"/>
            <Review title="Emma Hall" desp="Massa amet, at dolor tellus pellentesque aenean in eget massa tincidunt habitasse volutpat adipiscing sed id sit auctor eu vivamus nulla." image="/Images/Simran_profile.jpeg"/>
            <Review title="Emma Hall" desp="Massa amet, at dolor tellus pellentesque aenean in eget massa tincidunt habitasse volutpat adipiscing sed id sit auctor eu vivamus nulla." image="/Images/Simran_profile.jpeg"/>
        </div>
    </div>);
}

function Review({title, desp, image} : {
    title: string,
    desp: string,
    image: string
}) {
    return(<div className="p-2 pt-16 w-full">
        <div className="bg-white shadow-sm px-10 rounded-xl pb-2 relative">
            <Image src={image} width="100" height="100" className="w-20 h-20 rounded-lg shadow-lg relative bottom-10" alt="profile" />
            <div className="-mt-4 text-xl text-[#444] font-light">&quot;{desp}&quot;</div>
            <div className="font-bold text-xl my-6">{title}</div>
            <div className="absolute bottom-0 right-0 tracking-widest text-[#ff9635]">&#9733; &#9733; &#9733; &#9733; &#9733; </div>
        </div>
    </div>)
}