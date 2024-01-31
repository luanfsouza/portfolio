import Image from "next/image";
import Link from "next/link";

export default function Teste() {
  return (
    <div className="flex h-screen">
      <div className="m-auto container lg:pr-20  md:pt-20 md:pr-20 md:pb-20 md:pl-40 text-xl">
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
            <div className="flex gap-8">
              <div className="flex-1 flex flex-col gap-4 border-2 border-blue-800 rounded-2xl h-140 p-6 ">
                <Image
                  className="w-full h-52 rounded-xl"
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
                  <button className="border-2 text-white border-blue-800 p-2 rounded-xl pl-10 pr-10 hover:text-black hover:bg-white">
                    <Link href="#" target="_blank">
                      Source-code
                    </Link>
                  </button>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 border-2 border-blue-800 rounded-2xl h-140 p-6 ">
                <Image
                  className="w-full h-52 rounded-xl"
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
                  <button className="border-2 text-white border-blue-800 p-2 rounded-xl pl-10 pr-10 hover:text-black hover:bg-white">
                    <Link href="#" target="_blank">
                      Source-code
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex-1 flex flex-col gap-4 border-2 border-blue-800 rounded-2xl h-140 p-6 ">
                <Image
                  className="w-full h-52 rounded-xl"
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
                  <button className="border-2 text-white border-blue-800 p-2 rounded-xl pl-10 pr-10 hover:text-black hover:bg-white">
                    <Link href="#" target="_blank">
                      Source-code
                    </Link>
                  </button>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 border-2 border-blue-800 rounded-2xl h-140 p-6 ">
                <Image
                  className="w-full h-52 rounded-xl"
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
                  <button className="border-2 text-white border-blue-800 p-2 rounded-xl pl-10 pr-10 hover:text-black hover:bg-white">
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
