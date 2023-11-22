import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative w-8/12 ">
        <Image
          className=""
          width={389}
          height={322}
          src="/main_logo.png"
          layout="responsive"
          alt="main-logo"
        />
      </div>
    </div>
  );
}
