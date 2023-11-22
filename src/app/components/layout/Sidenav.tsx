import Link from "next/link";
import NavLinks from "./NavLinks";
import Image from "next/image";
import Switch from "../Switch";

export default function Sidenav() {
  return (
    <div
      className={`flex h-full flex-col border-solid border-r-primary sm:border-b-4 md:border-r-4`}
    >
      <Link href="/" className={``}>
        <div className="m-3 flex justify-center">
          <Image src={"/logo.png"} width={200} height={180} alt="logo" />
        </div>
      </Link>
      <NavLinks />
      <Switch />
    </div>
  );
}
