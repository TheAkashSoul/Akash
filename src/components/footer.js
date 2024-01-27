"use client";
import Link from "next/link";
import copy from "clipboard-copy";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { useState } from "react";
import { FaCopy } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const [isCopied, setIsCopied] = useState(false);
  const emailAddress = "akashpatromail@gmail.com";

  const handleCopyToClipboard = async () => {
    try {
      await copy(emailAddress);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 10000);
    } catch (error) {
      console.error("Failed to copy to clipboard", error);
    }
  };

  return (
    <main className="w-full bg-[#E6DDFA]">
      <section className="max-w-3xl flex flex-col mx-auto px-6 mt-10 items-center justify-center">
        <div className="h-40 flex items-center">
          <h2 className="font-semibold text-2xl text-center text-[#242F65]">
            Turning Ideas into Reality with the Power of React
          </h2>
        </div>

        <div
          style={{ height: 0.3, width: "100%", backgroundColor: "#D092BA" }}
        ></div>

        <div className="flex flex-row items-center justify-between w-full px-8 md:px-16 my-10">
          <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-4">
              <Link href="#home" className="text-[#242F65] font-medium text-xs">
                Home
              </Link>
              <Link
                href="#skills"
                className="text-[#242F65] font-medium text-xs"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-[#242F65] font-medium text-xs"
              >
                Projects
              </Link>
              <Link
                href="#about"
                className="text-[#242F65] font-medium text-xs"
              >
                About
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <BsTwitterX />
              <FaLinkedin />
              <GrInstagram />
              <FaGithub />
            </div>
          </div>

          <div className="md:bg-[#FFFFFF] flex flex-row md:h-16 items-center gap-2 px-3 rounded-lg">
            <p className="font-semibold text-xs hidden md:block text-[#242F65]">
              Interested in working together? Drop me a line
            </p>
            <div className="bg-[#242F65] rounded-md flex flex-row gap-1 items-center justify-center  px-2 py-1">
              <FaCopy color="#FF774C" size={12} />

              <button
                onClick={handleCopyToClipboard}
                className="text-[#FFF] font-normal text-xs"
              >
                {isCopied ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>
        </div>
        <div
          style={{ height: 0.3, width: "100%", backgroundColor: "#D092BA" }}
        ></div>
        <div className="py-2">
          <p className="text-[#242F65] text-xs font-medium">
            Copyright &copy; 2024 Akash. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
