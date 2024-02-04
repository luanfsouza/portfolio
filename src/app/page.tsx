"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const skills = [
    { title: "React" },
    { title: "React" },
    { title: "React" },
    { title: "React" },
    { title: "React" },
    { title: "React" },
    { title: "React" },
    { title: "React" },
  ];
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
      <div className="container-perfil grid grid-cols-1 gap-4 md:gap-4 lg:gap-10 pt-5 pb-5">
        <div className="flex gap-2 md:gap-5 lg:gap-5">
          <Image
            src="/perfil.jpg"
            alt="profile"
            height={500}
            width={500}
            quality={100}
            className={`rounded-2xl w-20 h-20 md:w-32 md:h-32`}
          />
          <div className="">
            <h1 className="md:text-2xl lg:text-5xl text-lg text-white md:mb-2 lg:mb-2">
              Luan Ferreira
            </h1>
            <p className="lg:text-2xl md:text-2xl text-sm mb-2">
              Back-end developer @
              <Link className="text-blue-800 lg:text-2xl md:text-2xl text-" href="/#">
                Github
              </Link>
            </p>
            <div className="flex-wrap hidden md:flex lg:flex md:gap-2 lg:gap-5 gap-2">
              {skills.map((item, index) => (
                <h2
                  key={index}
                  className="text-white md:text-sm lg:text-2xl bg-gray-800 p-2 pl-5 pr-5 rounded-2xl w-fit"
                >
                  {item.title}
                </h2>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2 flex-wrap flex md:gap-2 gap-2 md:hidden lg:hidden">
          {skills.map((item, index) => (
            <h2
              key={index}
              className="text-white md:text-sm text-xs lg:text-2xl bg-gray-800 p-2 px-2 rounded-2xl w-fit"
            >
              {item.title}
            </h2>
          ))}
        </div>
      </div>
      <div className="container-about p-10 pl-22 pr-5 pl-5 flex flex-col lg:mt-14 md:mt-10 mt-4 border-2 rounded-2xl border-blue-950">
        <h1 className="text-2xl text-white text mb-5">About me</h1>
        <p className="lg:text-base md:text-base text-sm">
          Hello, my name is Luan Ferreira, I am a dedicated back-end developer,
          with extensive experience in technologies such as NodeJS and ReactJS,
          and a track record with rotable clients such as Uber Chip, Correios
          Celular and arrefour, specializing in robust and user-friendly
          solutions to the user, pricritizing scalability, accessibility and
          optimized performance.
        </p>
      </div>
      <div className="container-experiencesAndPosts lg:flex flex flex-col mt-14 gap-8">
        <div className="md:p-14 lg:p-14 p-3 border-2 rounded-2xl border-blue-950 flex-1">
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
        <div className="md:p-14 lg:p-14 p-14 border-2 rounded-2xl border-blue-950 flex-1">
          <h1 className="text-2xl text-white">Lastest Posts</h1>
        </div>
      </div>
      <div className="container-myprojects lg:p-10 md:p-10 p-3 lg:pl-22 lg:pr-5 lg:pl-5  pt-5 flex flex-col mt-14 border-2  rounded-2xl  border-blue-950 lg:text-base md:text-base text-sm">
        <div className="lg:flex mb-5 ">
          <div className="flex lg:pt-10 flex-col flex-1 text-start lg:pr-20 md:pr-20 ">
            <h2 className="text-white mb-5 text-2xl">Easy Aluga</h2>
            <p className="mb-5 lg:mb-0">
              A white-label application to rent any behicle, developed during
              the BRQ Easy Carros, chaleng on FIAP.
            </p>
          </div>
          <div
            className={`flex-1 lg:h-fit md:h-72 h-40 rounded-2xl`}
          >
            <Image
              className={`
               ${
                 isExpandedOne
                   ? "w-5/6 h-2/6 lg:w-5/6 lg:h-4/6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-2xl "
                   : "flex-1 lg:h-fit md:h-72 w-full h-full rounded-2xl hover:cursor-pointer"
               }`}
              src="/perfil.jpg"
              alt=""
              width={1000}
              height={1000}
              onClick={handleImageClickOne}
              quality={100}
            />
          </div>
        </div>

        <div className="lg:flex lg:flex-row mb-5">
          <div className="flex lg:pt-10 flex-col flex-1 text-start lg:pr-20 md:pr-20">
            <h2 className="text-white mb-5 text-2xl">Easy Aluga</h2>
            <p className="mb-5 lg:mb-0">
              A white-label application to rent any behicle, developed during
              the BRQ Easy Carros, chaleng on FIAP.
            </p>
          </div>
          <div
            className={`flex-1 lg:h-fit md:h-72 h-40 rounded-2xl`}
          >
            <Image
              className={`
               ${
                 isExpandedTwo
                   ? "w-5/6 h-2/6 lg:w-5/6 lg:h-4/6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-2xl "
                   : "flex-1 lg:h-fit md:h-72 w-full h-full rounded-2xl hover:cursor-pointer"
               }`}
              src="/perfil.jpg"
              alt=""
              width={1000}
              height={1000}
              onClick={handleImageClickTwo}
              quality={100}
            />
          </div>
        </div>
        <div className="lg:flex mb-5">
          <div className="flex lg:pt-10 flex-col flex-1 text-start lg:pr-20 md:pr-20">
            <h2 className="text-white mb-5 text-2xl">Easy Aluga</h2>
            <p className="mb-5 lg:mb-0">
              A white-label application to rent any behicle, developed during
              the BRQ Easy Carros, chaleng on FIAP.
            </p>
          </div>
          <div className={`flex-1 lg:h-fit md:h-72 h-40 rounded-2xl`}>
            <Image
              className={`
               ${
                 isExpandedThree
                   ? "w-5/6 h-2/6 lg:w-5/6 lg:h-4/6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-2xl "
                   : "flex-1 lg:h-fit md:h-72 w-full h-full rounded-2xl hover:cursor-pointer"
               }`}
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
