import Link from "next/link";
import Image from "next/image";

export default function Section2() {
  return (
    <div className="mx-auto lg:max-w-6xl flex flex-wrap justify-evenly p-4 md:p-11">
      <Box
        banner="/Images/data-science.jpg"
        title="BI-The Next AI"
        desp="with Courses for careers"
        linkSrc="/program"
      />
    </div>
  );
}

function Box({
  banner,
  title,
  desp,
  linkSrc,
}: {
  banner: string;
  title: string;
  desp: string;
  linkSrc: string;
}) {
  return (
    <div className="bg-[white] w-full m-2 flex flex-col md:flex-row justify-between items-center shadow-[4px_4px_10px_4px_#ccc] transition-all duration-500 px-0 md:px-4 rounded-lg">
      <div className="w-full md:w-1/2">
        <Image
          src={banner}
          alt="Banner"
          width={400}
          height={300}
          className="w-full rounded-lg"
        />
      </div>
      <div className="py-4 px-11 flex flex-col items-start md:w-1/2">
        <div className="text-2xl md:text-5xl font-bold mt-4 uppercase text-[#444B58]">
          {title}
        </div>
        <div className="text-[#555] text-xl">{desp}</div>
        <div className="text-[#555] text-l">
          <ul className="flex flex-col gap-2 mt-4 list-disc ml-5">
            <li>10 Hours to a BI Expert</li>
            <li>Assured PL-300 Certification</li>
            <li>100% Money Back Gurantee</li>
          </ul>
        </div>
        <div className="w-full my-4 md:my-11 flex items-center justify-center">
          <Link
            href={linkSrc}
            className="w-[80%] block bg-[#008182] px-1 py-2 md:my-2 ml-auto mr-10 text-center text-[white] hover:bg-[#088] rounded-full"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
}
