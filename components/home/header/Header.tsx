import Image from "next/image";
import React from "react";
import Search from "./Search";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-10 py-4 bg-black">
      <div className="flex justify-start items-center gap-10">
        <div className="flex justify-center items-center gap-2">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
          <p className="text-2xl font-bold text-white">Carrying Space</p>
        </div>
        <Search />
      </div>
        <div className="flex justify-center items-center gap-5">
            <Link className="text-white px-4 py-2 border border-white rounded-full font-semibold" href='/signin'>Sign In</Link>
            <Link className="px-4 py-2 rounded-full bg-primary text-black font-semibold" href='/signup'>Sign Up</Link>
        </div>
    </header>
  );
};

export default Header;
