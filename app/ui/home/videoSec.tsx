export default function VideoSec() {
    return(<div className="my-8 mx-auto w-full max-w-6xl flex flex-col items-center sm:px-11">
        <div className="text-3xl sm:text-6xl font-bold text-center mt-8 sm:mt-16 mb-8">What is Courses for Career&nbsp;?</div>
        <div className="w-full p-1 sm:p-4">
            <video className="w-full rounded-3xl" src="./sample_vid.mp4" controls></video>
        </div>
    </div>);
}