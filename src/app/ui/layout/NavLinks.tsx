"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import AccountCircle from "../images/AccountCircle";
import ArrowCircle from "../images/ArrowCircle";
import Home from "../images/Home";

export const menu = [
  {
    title: "짤&명언",
    href: "",
    icon: <AccountCircle />,
  },
  { title: "회차정보", href: "", icon: <ArrowCircle /> },
  { title: "무한도전MBTI", href: "", icon: <Home /> },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="">
      {menu.map((m) => (
        <Link
          key={m.title}
          href={m.href}
          className="flex items-center p-6 text-primary hover:bg-primary hover:text-white"
        >
          {m.icon}
          <p className="text-2xl">{m.title}</p>
        </Link>
      ))}
    </div>
  );
}
