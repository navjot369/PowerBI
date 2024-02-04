export default function ContBig({ vid_src } : {
    vid_src : string
}) {
    return(<div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] my-11">
        <div className="relative overflow-hidden w-full pt-[56.25%]">
        <iframe width="560" height="315" className="rounded-lg absolute w-full h-full top-0" src={vid_src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div className="flex justify-center items-start flex-col p-11">
            <h1 className="text-4xl font-bold my-4">Title HERE!!</h1>
            <p className="text-lg">Description here</p>
        </div>
    </div>);
}