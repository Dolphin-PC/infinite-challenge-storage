import Image from "next/image";
import MainLogo from "/public/main_logo.png";

export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative w-8/12 ">
        <Image src={MainLogo} alt="main-logo" />
      </div>
    </div>
  );
}
