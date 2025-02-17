"use client";

import React from "react";
import Link from "next/link";
import { profileItems } from "../home/header/Auth";
import { ProfileItem } from "../home/header/Auth";
import { usePathname } from "next/navigation";
const Sidebar = () => {

  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  console.log(pathname);

  return (
    <aside className="w-[270px] h-full bg-white flex flex-col gap-2">
      {profileItems.map((item: ProfileItem) => (
        <Link
          href={item.href}
          key={item.label}
          className={`rounded-md flex items-center gap-2 p-4  border-gray-200 ${
            isActive(item.href)
              ? "bg-primary text-white"
              : "bg-white text-gray-800"
          }`}
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
