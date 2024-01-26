import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="max-w-3xl bg-slate-400 h-12 mx-auto flex flex-row items-center justify-between px-6 gap-4">
      <Link href="/" className="flex flex-row gap-1">
        <Image src={logo} alt="Logo of Portfolio" width={30} height={30} />
        <h1 className="font-bold">Akash</h1>
      </Link>
      <div className="md:flex flex-row gap-10 text-xs font-semibold hidden">
        <Link href="#about">About</Link>
        <Link href="">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="/">Contact</Link>
      </div>
    </header>
  );
}
