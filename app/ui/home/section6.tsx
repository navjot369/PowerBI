import Image from 'next/image';
import { open_sans } from '../fonts';

export default function Section6() {
    return(<div className="mx-auto max-w-6xl my-6">
        <div className="flex flex-col w-full sm:flex-row justify-between items-stretch">
            <div className="w-full sm:w-1/2 flex justify-center items-center">
                <div className="text-6xl font-bold mx-4 my-4">What Our Students Say</div>
            </div>
            <div className="sm:w-1/2 flex justify-end items-center">
                    <Image className="h-72" src="/Images/testimonial-sec-pic.svg" width="400" height="400" alt="SVG"/>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Review title="Emma Hall" desp="Massa amet, at dolor tellus pellentesque aenean in eget massa tincidunt habitasse volutpat adipiscing sed id sit auctor eu vivamus nulla." image="/Images/Simran_img.jpeg"/>
            <Review title="Emma Hall" desp="Massa amet, at dolor tellus pellentesque aenean in eget massa tincidunt habitasse volutpat adipiscing sed id sit auctor eu vivamus nulla." image="/Images/Simran_img.jpeg"/>
            <Review title="Emma Hall" desp="Massa amet, at dolor tellus pellentesque aenean in eget massa tincidunt habitasse volutpat adipiscing sed id sit auctor eu vivamus nulla." image="/Images/Simran_img.jpeg"/>
            <Review title="Emma Hall" desp="Massa amet, at dolor tellus pellentesque aenean in eget massa tincidunt habitasse volutpat adipiscing sed id sit auctor eu vivamus nulla." image="/Images/Simran_img.jpeg"/>
        </div>
    </div>);
}

function Review({title, desp, image} : {
    title: string,
    desp: string,
    image: string
}) {
    return(<div className="p-2 pt-4 w-full">
        <div className="bg-white px-10 rounded-lg p-1 pb-6 relative shadow-[4px_4px_10px_4px] shadow-[#D1554B]">
            <div className="flex justify-start items-end my-4">
            <Image src={image} width="100" height="100" className="w-16 h-16 mr-4 rounded-full shadow-lg" alt="profile" />
            <div className="font-bold text-3xl">{title}</div>
            </div>
            <div className={ open_sans.className + "-mt-4 text-md text-[#444] font-light"}>&quot;{desp}&quot;</div>
            <div className="absolute bottom-0 right-0 tracking-widest text-[#ff9635]">&#9733; &#9733; &#9733; &#9733; &#9733; </div>
        </div>
    </div>)
}