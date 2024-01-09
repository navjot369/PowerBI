export default function VideoSec() {
    return(<div className="my-20 mx-auto w-full max-w-6xl flex flex-col items-center px-11">
        <div className="text-3xl sm:text-8xl font-bold text-center my-16">What is Placed ?</div>
        <div className="relative overflow-hidden pt-[66.6%] w-full">
        <iframe width="560" className="absolute top-0 bottom-0 left-0 right-0 w-full h-full" height="316" src="https://www.youtube.com/embed/X6CsbhSVUEc?si=tmi-RFpeDDVjJ4Y5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    </div>);
}