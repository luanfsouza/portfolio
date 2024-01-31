import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const skills = [{ title: "React" }, { title: "React" }, { title: "React" }];
  const experiences = [
    {
      title: "Pagtel",
      ocupation: "Full-stack developer",
      data: "2022 - 2023",
      img: "/perfil.jpg",
    },
    {
      title: "Pagtel",
      ocupation: "Full-stack developer",
      data: "2022 - 2023",
      img: "/perfil.jpg",
    },
    {
      title: "Pagtel",
      ocupation: "Full-stack developer",
      data: "2022 - 2023",
      img: "/perfil.jpg",
    },
    {
      title: "Pagtel",
      ocupation: "Full-stack developer",
      data: "2022 - 2023",
      img: "/perfil.jpg",
    },
  ];

  const [isExpandedOne, setIsExpandedOne] = useState(false);
  const handleImageClickOne = () => {
    setIsExpandedOne(!isExpandedOne);
  };
  const [isExpandedTwo, setIsExpandedTwo] = useState(false);
  const handleImageClickTwo = () => {
    setIsExpandedTwo(!isExpandedTwo);
  };
  const [isExpandedThree, setIsExpandedThree] = useState(false);
  const handleImageClickThree = () => {
    setIsExpandedThree(!isExpandedThree);
  };

  return (
    <div className="container-main flex flex-col h-full md:p-16 md:pl-32">
      <div className="container-perfil flex gap-10 pt-5 pb-5">
        <Image
          src="/perfil.jpg"
          alt="profile"
          height={500}
          width={500}
          quality={100}
          className="rounded-2xl w-20 h-20 md:w-32 md:h-32"
        />
        <div>
          <h1 className="md:text-2xl ld:text-5xl text-white mb-2">
            Luan Ferreira
          </h1>
          <p className="lg:text-2xl mb-2">
            Back-end developer @
            <Link className="text-blue-800" href="/#">
              Github
            </Link>
          </p>
          <div className="flex pr-5 pl-5">
            {skills.map((item, index) => (
              <h2
                key={index}
                className="text-white mr-5 md:text-sm lg:text-2xl bg-gray-800 p-2 pl-5 pr-5 rounded-2xl"
              >
                {item.title}
              </h2>
            ))}
          </div>
        </div>
      </div>
      <div className="container-about p-10 pl-22 pr-5 pl-5 flex flex-col mt-14 border-2 rounded-2xl border-blue-950">
        <h1 className="text-2xl text-white text mb-5">About me</h1>
        <p>
          Hello, my name is Erick Nathan, I am a dedicated front-end developer,
          with extensive experience in technologies such as NodeJS and ReactJS,
          and a track record with rotable clients such as Uber Chip, Correios
          Celular and arrefour, specializing in robust and user-friendly
          solutions to the user, pricritizing scalability, accessibility and
          optimized performance.
        </p>
      </div>
      <div className="container-experiencesAndPosts lg:flex mt-14 gap-8">
        <div className="p-14 border-2 rounded-2xl border-blue-950 flex-1">
          <h1 className="text-2xl text-white mb-6">Experiences</h1>
          <div>
            {experiences.map((item, index) => (
              <div key={index} className="flex mb-6">
                <div className="border-2 border-white w-fit h-fit rounded-full mr-5">
                  <Image
                    src={item.img}
                    alt={""}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-white">{item.title}</h2>
                  <p>{item.ocupation}</p>
                  <p>{item.data}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="h-14 w-full bg-blue-700 flex justify-center pt-3 pb-3 rounded-2xl">
            <h2 className="text-white">Download CV</h2>
          </button>
        </div>
        <div className="p-14 border-2 rounded-2xl border-blue-950 flex-1">
          <h1 className="text-2xl text-white">Lastest Posts</h1>
        </div>
      </div>
      <div className="container-myprojects lg:p-10 lg:pl-22 lg:pr-5 lg:pl-5 p-10 pt-5 flex flex-col mt-14 border-2 rounded-2xl border-blue-950">
        <div className="lg:flex mb-5">
          <div className="flex lg:pt-10 flex-col flex-1 text-start pr-20">
            <h2 className="text-white mb-5 text-2xl">Easy Aluga</h2>
            <p>
              A white-label application to rent any behicle, developed during
              the BRQ Easy Carros, chaleng on FIAP.
            </p>
          </div>
          <div
            className={`${
              isExpandedThree
                ? "w-5/6 h-3/6 lg:w-5/6 lg:h-4/6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
                : "flex-1 "
            }`}
          >
            <Image
              className={`
              w-full h-full rounded-2xl hover:cursor-pointer`}
              src="/moldewebsite.png"
              alt=""
              width={1000}
              height={1000}
              onClick={handleImageClickThree}
              quality={100}
            />
          </div>
        </div>
        <div className="lg:flex lg:flex-row md:flex md:flex-col-reverse mb-5">
          <div
            className={`${
              isExpandedOne
                ? "w-5/6 h-3/6 lg:w-5/6 lg:h-4/6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
                : "flex-1 "
            }`}
          >
            <Image
              className={`
              w-full h-full rounded-2xl hover:cursor-pointer`}
              src="/moldewebsite.png"
              alt=""
              width={1000}
              height={1000}
              onClick={handleImageClickOne}
              quality={100}
            />
          </div>
          <div className="flex flex-col flex-1 text-end pl-20 pt-10">
            <h2 className="text-white mb-5 text-2xl">Easy Aluga</h2>
            <p>
              A white-label application to rent any behicle, developed during
              the BRQ Easy Carros, chaleng on FIAP.
            </p>
          </div>
        </div>
        <div className="lg:flex mb-5">
          <div className="flex pt-10 flex-col flex-1 text-start pr-20">
            <h2 className="text-white mb-5 text-2xl">Easy Aluga</h2>
            <p>
              A white-label application to rent any behicle, developed during
              the BRQ Easy Carros, chaleng on FIAP.
            </p>
          </div>
          <div
            className={`${
              isExpandedThree
                ? "w-5/6 h-3/6 lg:w-5/6 lg:h-4/6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
                : "flex-1 "
            }`}
          >
            <Image
              className={`
              w-full h-full rounded-2xl hover:cursor-pointer`}
              src="/moldewebsite.png"
              alt=""
              width={1000}
              height={1000}
              onClick={handleImageClickThree}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
