import Image from "next/image";
import photo from "../../assets/Photo.png";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard() {
  return (
    <main className="mb-6">
      <div className="flex flex-col-reverse md:flex-row bg-[#EDF0F9] px-8  rounded-xl gap-3 items-center md:items-center">
        <div className="py-10 flex flex-col gap-2 text-center md:text-start items-center md:items-start">
          <h1 className="font-bold text-[#242F65]">
            Title of the app with the caption
          </h1>
          <div className="flex flex-row gap-2">
            <p
              style={{
                borderWidth: 1,
                borderColor: "#6878AC",
              }}
              className="bg-[#EDF0F9] text-xs font-light px-2 py-1 rounded-md text-[#6878AC] items-center justify-center"
            >
              React Native
            </p>
            <p
              style={{
                borderWidth: 1,
                borderColor: "#6878AC",
              }}
              className="bg-[#EDF0F9] text-xs font-light px-2 py-1 rounded-md text-[#6878AC] items-center justify-center"
            >
              Expo
            </p>
          </div>
          <p className="text-xs max-w-80 font-normal">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <a
            href="https://github.com/TheAkashSoul/iVoice"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit flex flex-row gap-2 bg-[#000000] items-center justify-between px-4 py-2 rounded-lg"
          >
            <p className="text-[#FFF] font-medium text-xs">Source code</p>

            <FaGithub color="white" size={18} />
          </a>
        </div>

        <div className="flex items-center justify-end w-[50%] pt-10 md:py-2">
          <Image className="" src={photo} alt="photo" width={170} />
        </div>
      </div>
    </main>
  );
}
