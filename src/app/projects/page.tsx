import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects',
};
export default function Teste() {
  return (
    <div className="flex h-screen md:p-10 md:pl-20">
      <div className="m-auto container lg:pr-20 md:pl-2 text-base md:text-xl lg:text-xl">
        <div>
          <h1 className="text-white text-4xl mb-6 font-bold">My Projects</h1>
          <p>
            Here are some of the projects i have worked on, you can find more on
            my{" "}
            <Link
              className="text-blue-800 underline cursor-pointer hover:text-gray-400 duration-300"
              href="https://github.com/luanfsouza"
            >
              Github
            </Link>
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white text-2xl mb-6 font-bold">Back-end</h2>
          <div className="flex flex-col gap-8">
            <div className="flex md:flex-row lg:flex-row flex-col gap-8">
              <div className="flex-1 flex flex-col gap-4 border-2 border-blue-800 rounded-2xl h-140 p-6 ">
                <Image
                  className="w-full  h-36 md:h-52 lg:h-52 rounded-xl"
                  src="/banner.jpeg"
                  height={500}
                  width={500}
                  quality={100}
                  alt=""
                />
                <h3 className="text-white font-semibold">Easy Aluga</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit,
                  eligendi architecto at Mollitia.
                </p>
                <div className="flex gap-5 text-sm">
                  <button className="bg-blue-700 p-2  text-white rounded-xl pl-10 pr-10 hover:text-blue-700 hover:bg-white">
                    <Link href="#" target="_blank">
                      Visit
                    </Link>
                  </button>
                  <button className="border-2 text-white border-blue-800 p-0 md:p-2 lg:p-2 rounded-xl md:pl-10 lg:pl-10 md:pr-10 lg:pr-10 pl-5 pr-5 hover:text-black hover:bg-white">
                    <Link href="#" target="_blank">
                      Source-code
                    </Link>
                  </button>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 border-2 border-blue-800 rounded-2xl h-140 p-6 ">
                <Image
                  className="w-full  h-36 md:h-52 lg:h-52 rounded-xl"
                  src="/banner.jpeg"
                  height={500}
                  width={500}
                  quality={100}
                  alt=""
                />
                <h3 className="text-white font-semibold">Easy Aluga</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit,
                  eligendi architecto at Mollitia.
                </p>
                <div className="flex gap-5 text-sm">
                  <button className="bg-blue-700 p-2  text-white rounded-xl pl-10 pr-10 hover:text-blue-700 hover:bg-white">
                    <Link href="#" target="_blank">
                      Visit
                    </Link>
                  </button>
                  <button className="border-2 text-white border-blue-800 p-0 md:p-2 lg:p-2 rounded-xl md:pl-10 lg:pl-10 md:pr-10 lg:pr-10 pl-5 pr-5 hover:text-black hover:bg-white">
                    <Link href="#" target="_blank">
                      Source-code
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row lg:flex-row flex-col gap-8">
              <div className="flex-1 flex flex-col gap-4 border-2 border-blue-800 rounded-2xl h-140 p-6 ">
                <Image
                  className="w-full  h-36 md:h-52 lg:h-52 rounded-xl"
                  src="/banner.jpeg"
                  height={500}
                  width={500}
                  quality={100}
                  alt=""
                />
                <h3 className="text-white font-semibold">Easy Aluga</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit,
                  eligendi architecto at Mollitia.
                </p>
                <div className="flex gap-5 text-sm">
                  <button className="bg-blue-700 p-2  text-white rounded-xl pl-10 pr-10 hover:text-blue-700 hover:bg-white">
                    <Link href="#" target="_blank">
                      Visit
                    </Link>
                  </button>
                  <button className="border-2 text-white border-blue-800 p-0 md:p-2 lg:p-2 rounded-xl md:pl-10 lg:pl-10 md:pr-10 lg:pr-10 pl-5 pr-5 hover:text-black hover:bg-white">
                    <Link href="#" target="_blank">
                      Source-code
                    </Link>
                  </button>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 border-2 border-blue-800 rounded-2xl h-140 p-6 ">
                <Image
                  className="w-full  h-36 md:h-52 lg:h-52 rounded-xl"
                  src="/banner.jpeg"
                  height={500}
                  width={500}
                  quality={100}
                  alt=""
                />
                <h3 className="text-white font-semibold">Easy Aluga</h3>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit,
                  eligendi architecto at Mollitia.
                </p>
                <div className="flex gap-5 text-sm">
                  <button className="bg-blue-700 p-2  text-white rounded-xl pl-10 pr-10 hover:text-blue-700 hover:bg-white">
                    <Link href="#" target="_blank">
                      Visit
                    </Link>
                  </button>
                  <button className="border-2 text-white border-blue-800 p-0 md:p-2 lg:p-2 rounded-xl md:pl-10 lg:pl-10 md:pr-10 lg:pr-10 pl-5 pr-5 hover:text-black hover:bg-white">
                    <Link href="#" target="_blank">
                      Source-code
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
