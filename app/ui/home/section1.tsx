import Link from 'next/link';

export default function Section1() {
    return(<div className="justify-center my-11 mx-auto">
    <div className="flex flex-col sm:flex-row w-full mx-auto max-w-6xl items-stretch">
      <div className="px-11">
          <div className="text-5xl font-bold">Data Science Placement Courses</div>
      </div>
      <div className="bg-[#ff9635] shrink-0 w-1"></div>
      <div className="flex flex-col justify-between lg:flex-row px-11 ">
      <div className="text-xl flex items-center text-[#828181] my-6 sm:my-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum accusantium saepe </div>
      <div className="flex items-center shrink-0">
          <Link href="/course/" className="bg-[#ff9635] text-white text-xl py-2 px-6 rounded-3xl no-wrap">View Courses</Link>
      </div>
      </div>
    </div>
  </div>)
}