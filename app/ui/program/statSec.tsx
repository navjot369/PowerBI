import CountUp from "react-countup";

export default function StatSec() {
  return (
    <div className="my-4 sm:my-11 mx-auto w-4/5 max-w-6xl">
      <div className="flex flex-row justify-evenly items-center">
        <div className="my-6 flex flex-col items-center justify-center">
          <div className="text-2xl text-center sm:text-6xl font-bold">
            <CountUp start={0} end={50} duration={2} delay={0.4} />+
          </div>
          <div className="text-center text-sm text-gray-500">Lessons</div>
        </div>
        <div className="my-6 flex flex-col items-center justify-center">
          <div className="text-2xl text-center sm:text-6xl font-bold">
            <CountUp start={0} end={10} duration={2} delay={0.4} />+
          </div>
          <div className="text-center text-sm text-gray-500">
            Hours of learning
          </div>
        </div>
        <div className="my-6 flex flex-col items-center justify-center">
          <div className="text-2xl text-center sm:text-6xl font-bold">
            <CountUp start={0} end={6} duration={2} delay={0.4} />
          </div>
          <div className="text-center text-sm text-gray-500">Series</div>
        </div>
      </div>
    </div>
  );
}
