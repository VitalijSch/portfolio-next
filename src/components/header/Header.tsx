import { navLinks } from "@/data/header";
import Logo from "@/ui/Logo";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 max-w-[1440px] w-full flex justify-between items-center py-[19px] px-[72px] mx-auto text-[#F8F9FA] bg-black">
      <Logo />
      {navLinks.map((nav, index) => (
        <div key={index} className="group w-[105px] h-[42px] flex justify-center items-center relative cursor-pointer">
          <Link
            href={`/${nav.link}`}
            className="text-[18px] font-[700] leading-[120%]"
          >
            {nav.name}
          </Link>
          <Image
          className="transition-all group-hover:opacity-100 opacity-0 duration-300 ease-out"
            src={`/images/header/${nav.link}.svg`}
            alt={`${nav.link} logo`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
      <div className="flex items-center gap-[10px] text-[#FFFFFF]">
        <span className="font-[600] leading-[120%]">EN</span>
        <div className="w-[32px] h-[8px] border border-[#F8F9FA] rounded-lg bg-[#F87A55] relative">
          <div className="w-[16px] h-[16px] bg-[#3355FF] border border-[#F8F9FA] rounded-full absolute top-1/2 -translate-y-1/2 -left-1"></div>
        </div>
        <span className="font-[600] leading-[120%]">DE</span>
      </div>
    </header>
  );
}
