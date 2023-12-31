export default function Section5() {
    return(<div className="flex w-full flex-col md:flex-row justify-stretch max-w-7xl m-auto">
        <div className="px-14 flex-grow">
            <div className="font-bold">Features of our course</div>
            <div className="text-5xl my-6 font-bold">Why Choose Us?</div>
            <div className="text-[#999]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div className="px-14 flex-grow">
            <SingleTitle title="Best Industry Leaders" desp="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
            <SingleTitle title="Learn online at your own pace" desp="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
            <SingleTitle title="Professional Certificatoin" desp="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
        </div>
    </div>)
}

function SingleTitle({title, desp} : {
    title: string,
    desp: string
}) {
    return(<div className="flex my-4 flex-row items-start">
        <div className="w-[40px] h-[40px] rounded-full bg-[#ff9635] p-2 flex flex-shrink-0 justify-center items-center">i</div>
        <div className="px-4">
            <div className="text-2xl font-bold">{title}</div>
            <div className="font-light text-[#999]">{desp}</div>
        </div>
    </div>)
}