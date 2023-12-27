import Image from "next/image";
import MainLogo from "/public/assets/images/main_logo.png";

export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-12/12 relative ">
        <Image src={MainLogo} alt="main-logo" />
      </div>
    </div>
  );
}
