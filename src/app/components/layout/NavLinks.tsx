"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import AccountCircle from "../images/AccountCircle";
import ArrowCircle from "../images/ArrowCircle";
import Home from "../images/Home";
import clsx from "clsx";

export const menuObj = {
  meme_life: "meme_life",
  episode_info: "episode_info",
  mbti_test: "mbti_test",
};
export const menu = [
  {
    title: "짤&명언",
    href: `/${menuObj.meme_life}`,
    icon: <AccountCircle />,
  },
  {
    title: "회차정보",
    href: `/${menuObj.episode_info}`,
    icon: <ArrowCircle />,
  },
  { title: "무한도전MBTI", href: `/${menuObj.mbti_test}`, icon: <Home /> },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="">
      {menu.map((m) => (
        <Link
          key={m.title}
          href={m.href}
          className={clsx("flex items-center p-6", {
            "bg-primary text-white dark:bg-white dark:text-primary":
              pathname.startsWith(m.href),
          })}
        >
          {m.icon}
          <p className="text-2xl">{m.title}</p>
        </Link>
      ))}
    </div>
  );
}
