export default function VideoSec() {
    return(<div className="my-11 mx-auto w-full max-w-6xl flex flex-col items-center">
        <div className="text-3xl sm:text-6xl font-bold text-center">What is Placed?</div>
        <div className="p-6 w-full">
        <iframe width="560" className="w-[80%] mx-auto h-[300px] sm:h-[500px]" height="500" src="https://www.youtube.com/embed/X6CsbhSVUEc?si=tmi-RFpeDDVjJ4Y5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    </div>);
}