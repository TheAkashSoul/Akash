import Image from "next/image";
import arm from "../../assets/arm.png";

export default function About() {
  return (
    <main
      id="about"
      className="max-w-3xl bg-[#FFFAFA] flex flex-col mx-auto px-6 mt-10 items-center justify-center rounded-2xl"
    >
      <div className="py-10 items-center flex flex-col justify-center gap-2">
        <div className="flex flex-row gap-1 items-center justify-center">
          <h1 className="font-bold text-4xl text-[#242F65] text-center">
            Hi, I'm Akash!
          </h1>
          <Image src={arm} alt="Arm logo" height={30} width={40} />
        </div>
        <h2 className="text-[#242F65] font-medium text-lg text-center">
          a{" "}
          <span className="text-[#FF774C] text-2xl font-bold">
            React Developer
          </span>
        </h2>
        <h3 className="text-[#242F65] font-medium text-lg text-center">
          with a passion for turning ideas into seamless
        </h3>
        <h3 className="text-[#242F65] font-medium text-lg text-center">
          digital{" "}
          <span className="text-[#7AA3F3] text-xl font-semibold">
            Experiences
          </span>
        </h3>
      </div>
    </main>
  );
}
