"use client";
import { ReactNode } from "react";
import SearchLayout from "../episode_info/layout";
import { RecoilRoot } from "recoil";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <SearchLayout>
      <RecoilRoot>{children}</RecoilRoot>
    </SearchLayout>
  );
}
