export default function VideoSec() {
    return(<div className="my-8 mx-auto w-full max-w-6xl flex flex-col items-center px-11">
        <div className="text-3xl sm:text-7xl font-bold text-center mt-16 mb-8">What is Skill Craft ?</div>
        <div className="w-full p-4">
            <video className="w-full rounded-3xl" src="./sample_vid.mp4" controls></video>
        </div>
    </div>);
}