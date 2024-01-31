"use client";

import React, { useState } from "react";
import Sidebar from "./sidebar";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import HomePage from "./homePage";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <HomePage />
  );
}
