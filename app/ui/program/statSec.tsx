import Image from "next/image";

export default function StatSec() {
  return (
    <div className="my-11 mx-auto w-4/5 max-w-6xl">
      <div className="flex flex-row justify-evenly items-center">
        <div className="my-6 flex flex-col items-center">
          <div className="text-6xl font-bold">50+</div>
          <div className="text-sm text-gray-500 mr-6">Lessons</div>
        </div>
        <div className="my-6 flex flex-col items-center">
          <div className="text-6xl font-bold">10+</div>
          <div className="text-sm text-gray-500">Hours of learning</div>
        </div>
        <div className="my-6 flex flex-col items-center">
          <div className="text-6xl font-bold">6</div>
          <div className="text-sm text-gray-500">Series</div>
        </div>
      </div>
    </div>
  );
}
