"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { menu } from "../../lib/data";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="">
      {menu.map(
        (m) =>
          m.visible && (
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
          ),
      )}
    </div>
  );
}
