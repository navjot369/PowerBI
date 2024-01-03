export default function StatSec() {
    return(<div className="border-y-4 border-grey my-11 mx-auto w-4/5 flex flex-col sm:flex-row justify-evenly">
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
    </div>)
}