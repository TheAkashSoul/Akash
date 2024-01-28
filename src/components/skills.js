import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { TbBrandReact } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoMdGitBranch } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";

export default function Skills() {
  return (
    <main
      id="skills"
      className="max-w-3xl flex flex-col mx-auto px-6 mt-14 items-center justify-center rounded-2xl"
    >
      <div className="flex flex-row items-center justify-between gap-6 mb-8">
        <div style={{ height: 0.5, width: 100, backgroundColor: "#CCC" }}></div>

        <p
          style={{
            color: "#242F65",
            fontWeight: "600",
            fontSize: 20,
            letterSpacing: 1,
          }}
        >
          Skills
        </p>

        <div style={{ height: 0.5, width: 100, backgroundColor: "#CCC" }}></div>
      </div>

      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-row gap-3 flex-wrap">
          <div className="flex flex-row gap-1 items-center justify-center border-[#2F2F2F] hover:bg-[#F5FFFA] hover:scale-110 hover:border-[#E96228] border-2 px-2 py-1 rounded-md cursor-pointer">
            <SiHtml5 color="#E96228" size={14} />
            <p className="font-bold text-xs text-[#E96228]">HTML</p>
          </div>

          <div className="flex flex-row gap-1 items-center justify-center border-[#2F2F2F] hover:bg-[#F5FFFA] hover:scale-110 hover:border-[#2862E9] border-2 px-2 py-1 rounded-md cursor-pointer">
            <SiCss3 color="#2862E9" size={14} />
            <p className="font-bold text-xs text-[#2862E9]">CSS</p>
          </div>

          <div className="flex flex-row gap-1 items-center justify-center border-[#2F2F2F] hover:bg-[#F5FFFA] hover:scale-110 hover:border-[#E8D44D] border-2 px-2 py-1 rounded-md cursor-pointer">
            <SiJavascript color="#E8D44D" size={14} />
            <p className="font-bold text-xs text-[#E8D44D]">JAVASCRIPT</p>
          </div>
        </div>

        <div className="flex flex-row gap-3 flex-wrap">
          <div className="flex flex-row gap-1 items-center justify-center border-[#2F2F2F] hover:bg-[#F5FFFA] hover:scale-110 hover:border-[#00D1F7] border-2 px-2 py-1 rounded-md cursor-pointer">
            <GrReactjs color="#00D1F7" size={14} />
            <p className="font-bold text-xs text-[#00D1F7]">REACT.JS</p>
          </div>

          <div className="flex flex-row gap-1 items-center justify-center border-[#2F2F2F] hover:bg-[#F5FFFA] hover:scale-110 hover:border-[#4E5A90] border-2 px-2 py-1 rounded-md cursor-pointer">
            <TbBrandReact color="#4E5A90" size={14} />
            <p className="font-bold text-xs text-[#4E5A90]">REACT NATIVE</p>
          </div>

          <div className="flex flex-row gap-1 items-center justify-center border-[#2F2F2F] hover:bg-[#F5FFFA] hover:scale-110 hover:border-[#00001F] border-2 px-2 py-1 rounded-md cursor-pointer">
            <SiExpo color="#00001F" size={14} />
            <p className="font-bold text-xs text-[#00001F]">EXPO</p>
          </div>
        </div>

        <div className="flex flex-row gap-3 flex-wrap">
          <div className="flex flex-row gap-1 items-center justify-center border-[#2F2F2F] hover:bg-[#F5FFFA] hover:scale-110 hover:border-[#000000] border-2 px-2 py-1 rounded-md cursor-pointer">
            <SiNextdotjs color="#000000" size={14} />
            <p className="font-bold text-xs text-[#000000]">NEXT.JS</p>
          </div>

          <div className="flex flex-row gap-1 items-center justify-center border-[#2F2F2F] hover:bg-[#F5FFFA] hover:scale-110 hover:border-[#36B6F2] border-2 px-2 py-1 rounded-md cursor-pointer">
            <SiTailwindcss color="#36B6F2" size={14} />
            <p className="font-bold text-xs text-[#36B6F2]">TAILWIND CSS</p>
          </div>

          <div className="flex flex-row gap-1 items-center justify-center border-[#2F2F2F] hover:bg-[#F5FFFA] hover:scale-110 hover:border-[#7248B6] border-2 px-2 py-1 rounded-md cursor-pointer">
            <TbBrandRedux color="#7248B6" size={14} />
            <p className="font-bold text-xs text-[#7248B6]">REDUX</p>
          </div>
        </div>

        <div className="flex flex-row gap-3 flex-wrap">
          <div className="flex flex-row gap-1 items-center justify-center border-[#2F2F2F] hover:bg-[#F5FFFA] hover:scale-110 hover:border-[#509941] border-2 px-2 py-1 rounded-md cursor-pointer">
            <SiNodedotjs color="#509941" size={14} />
            <p className="font-bold text-xs text-[#509941]">NODE.JS</p>
          </div>

          <div className="flex flex-row gap-1 items-center justify-center border-[#2F2F2F] hover:bg-[#F5FFFA] hover:scale-110 hover:border-[#09090C] border-2 px-2 py-1 rounded-md cursor-pointer">
            <SiExpress color="#09090C" size={14} />
            <p className="font-bold text-xs text-[#09090C]">EXPRESS.JS</p>
          </div>

          <div className="flex flex-row gap-1 items-center justify-center border-[#2F2F2F] hover:bg-[#F5FFFA] hover:scale-110 hover:border-[#419432] border-2 px-2 py-1 rounded-md cursor-pointer">
            <DiMongodb color="#419432" size={14} />
            <p className="font-bold text-xs text-[#419432]">MONGODB</p>
          </div>
        </div>

        <div className="flex flex-row gap-3 flex-wrap">
          <div className="flex flex-row gap-1 items-center justify-center border-[#2F2F2F] hover:bg-[#F5FFFA] hover:scale-110 hover:border-[#E84D31] border-2 px-2 py-1 rounded-md cursor-pointer">
            <IoMdGitBranch color="#E84D31" size={14} />
            <p className="font-bold text-xs text-[#E84D31]">GIT</p>
          </div>

          <div className="flex flex-row gap-1 items-center justify-center border-[#2F2F2F] hover:bg-[#F5FFFA] hover:scale-110 hover:border-[#000000] border-2 px-2 py-1 rounded-md cursor-pointer">
            <FaSquareGithub color="#000000" size={14} />
            <p className="font-bold text-xs text-[#000000]">GITHUB</p>
          </div>

          <div className="flex flex-row gap-1 items-center justify-center border-[#2F2F2F] hover:bg-[#F5FFFA] hover:scale-110 hover:border-[#F76935] border-2 px-2 py-1 rounded-md cursor-pointer">
            <SiPostman color="#F76935" size={14} />
            <p className="font-bold text-xs text-[#F76935]">POSTMAN</p>
          </div>
        </div>
      </div>
    </main>
  );
}
