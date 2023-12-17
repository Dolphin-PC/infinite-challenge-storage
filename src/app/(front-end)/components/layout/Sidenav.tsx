import Link from "next/link";
import NavLinks from "./NavLinks";
import Image from "next/image";
import SwitchDarkMode from "../SwitchDarkMode";
import LogoImage from "/public/logo.png";

export default function Sidenav() {
  return (
    <div
      className={`color flex h-full flex-col items-center justify-between  border-solid md:border-r-4`}
    >
      <div className="w-full">
        <Link href="/" className="h-1/12 flex items-center justify-center">
          <div className="m-3 flex w-6/12 justify-center md:w-full">
            <Image src={LogoImage} alt="logo" priority={true} />
          </div>
        </Link>
        <NavLinks />
      </div>
      <SwitchDarkMode />
    </div>
  );
}
