import { getMemeLife } from "@/app/lib/firestore";
import MbtiLogo from "/public/assets/images/mbti_logo.jpg";

import Image from "next/image";
import { Button } from "@mui/material";
export default function page() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image
        className="h-6/12 w-6/12 rounded-2xl"
        src={MbtiLogo}
        alt="mbti logo"
      />
      <h4 className="m-5 text-2xl">나와 가장 유사한 MBTI의 무한도전 멤버는?</h4>
      <button className="rounded-lg bg-primary pb-2 pl-10 pr-10 pt-2 text-white">
        MBTI 테스트하기
      </button>
    </div>
  );
}
