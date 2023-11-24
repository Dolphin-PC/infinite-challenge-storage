"use client";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Image from "next/image";
import { FormControlLabel, Switch } from "@mui/material";
import { useDarkMode } from "@/app/lib/hooks";

export default function Sidenav() {
  const [checked, handleChange] = useDarkMode();
  return (
    <div
      className={`flex h-full flex-col items-center justify-between border-solid border-r-primary dark:border-r-white dark:bg-primary md:border-r-4`}
    >
      <div className="w-full">
        <Link href="/" className={``}>
          <div className="m-3 flex justify-center">
            <Image src={"/logo.png"} width={200} height={180} alt="logo" />
          </div>
        </Link>
        <NavLinks />
      </div>
      <FormControlLabel
        control={<Switch checked={checked} onChange={(e) => handleChange(e)} />}
        label={`${checked ? "Dark" : "Light"} Mode`}
      />
    </div>
  );
}
