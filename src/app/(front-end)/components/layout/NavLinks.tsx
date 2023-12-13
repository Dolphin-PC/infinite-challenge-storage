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
  wise: "wise",
  episode_info: "episode_info",
  mbti_test: "mbti_test",
};
export const menu = [
  {
    title: "무도 짤",
    href: `/${menuObj.meme_life}`,
    icon: ({ size = 40 }) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 6v12h16V6H4Zm0-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm3.5 7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3ZM7 14l2-2l2 2l4-4l3 3v3H7v-2Z"
          />
        </svg>
      );
    },
  },
  {
    title: "무도 명언",
    href: `/${menuObj.wise}`,
    icon: ({ size = 40 }) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 16 16"
        >
          <g fill="currentColor">
            <path d="M2.678 11.894a1 1 0 0 1 .287.801a10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6c0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894m-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7s-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
            <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
          </g>
        </svg>
      );
    },
  },
  {
    title: "회차정보",
    href: `/${menuObj.episode_info}`,
    icon: ({ size = 40 }) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M2 14v2c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16v-4c0-2.828 0-4.243-.879-5.121C20.243 6 18.828 6 16 6H8c-2.828 0-4.243 0-5.121.879c-.642.641-.815 1.568-.862 3.121M9 2l3 3.5L15 2m1 4v4m0 12v-8"
            />
            <path
              fill="currentColor"
              d="M20 16a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm0-4a1 1 0 1 0-2 0a1 1 0 0 0 2 0Z"
            />
          </g>
        </svg>
      );
    },
  },
  {
    title: "무한도전MBTI",
    href: `/${menuObj.mbti_test}`,
    icon: () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="m23 9.2l-2.6-2.6L19 8l4 4l7-7l-1.4-1.4zM12 5.4L10.6 4L8 6.6L5.4 4L4 5.4L6.6 8L4 10.6L5.4 12L8 9.4l2.6 2.6l1.4-1.4L9.4 8zm0 16L10.6 20L8 22.6L5.4 20L4 21.4L6.6 24L4 26.6L5.4 28L8 25.4l2.6 2.6l1.4-1.4L9.4 24z"
          />
          <path fill="currentColor" d="M17 15V2h-2v13H2v2h13v13h2V17h13v-2z" />
        </svg>
      );
    },
  },
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
          <m.icon />
          <p className="pl-2 text-2xl">{m.title}</p>
        </Link>
      ))}
    </div>
  );
}
