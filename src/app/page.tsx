"use client";

import React, { useState } from "react";
import Sidebar from "./sidebar";
import Main from "./main";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <div className="h-full container w-full lg:pr-20  md:pt-20 md:pr-20 md:pb-20 md:pl-40 ">
        <Main/>
      </div>
    </div>
  );
}
