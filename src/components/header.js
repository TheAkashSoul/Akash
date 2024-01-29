import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="max-w-3xl h-12 mx-auto flex flex-row items-center justify-between px-6 gap-4">
      <Link href="/" className="flex flex-row gap-1">
        {/* <Image src={logo} alt="Logo of Portfolio" width={20} height={20} /> */}
        <h1 className="font-bold text-[#FF774C]">Akash</h1>
      </Link>
      <div className="md:flex flex-row gap-6 text-xs font-semibold hidden">
        <Link
          href="#about"
          className="hover:text-[#FFF] px-2 py-1 rounded-full hover:bg-[#141414]"
        >
          About
        </Link>
        <Link
          href="#skills"
          className="hover:text-[#FFF] px-2 py-1 rounded-full hover:bg-[#141414]"
        >
          Skills
        </Link>
        <Link
          href="#projects"
          className="hover:text-[#FFF] px-2 py-1 rounded-full hover:bg-[#141414]"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="hover:text-[#FFF] px-2 py-1 rounded-full hover:bg-[#141414]"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
