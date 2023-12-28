import Link from 'next/link';

export default function Section2() {
  return (
    <div className="flex justify-center my-11 mx-2">
      <div className="grid grid-cols-[2fr_2px_3fr_1fr] w-full max-w-6xl">
        <div className="">
            <div className="text-xl">Top Categories</div>
            <div className="text-5xl font-bold">Popular Courses</div>
        </div>
        <div className="bg-[#ff9635]"></div>
        <div className="text-xl px-11 flex items-center text-[#828181]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum accusantium saepe </div>
        <div className="flex items-center">
            <Link href="/course/" className="bg-[#ff9635] text-white text-xl py-2 px-6 rounded-3xl no-wrap">View Courses</Link>
        </div>
      </div>
    </div>
  );
}
