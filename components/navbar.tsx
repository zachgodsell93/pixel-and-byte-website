import Image from "next/image";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="flex flex-row items-center justify-between py-8 max-w-[83rem] mx-auto">
      <div className="flex flex-row justify-between items-center space-x-1">
        <Image src="/logo-light.png" alt="logo" width={150} height={200} />
      </div>
      <div className="md:flex flex-row flex-1 hidden items-center  justify-center space-x-14 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
        <a href="/work">
          <span>Development</span>
        </a>
        <a href="/#services">
          <span>Salesforce</span>
        </a>
        <a href="/packages">
          <span>Consulting</span>
        </a>
        <a href="/templates">
          <span>About</span>
        </a>
      </div>
      <a
        href="mailto:youremail@yourgmail.com"
        className="hidden md:block relative px-0.5 py-1 text-zinc-600 text-sm rounded-full font-semibold bg-gradient-to-br from-[rgba(5,45,255,.6)] to-[rgba(62,243,255,.6)] hover:shadow-md  hover:shadow-blue-500/30 transition duration-200"
      >
        <span className="w-24 h-10 flex items-center justify-center bg-zinc-100 rounded-full mx-0.5 ">
          Contact
        </span>
      </a>
      <div className="flex md:hidden">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
        </svg>
      </div>
    </div>
  );
}
