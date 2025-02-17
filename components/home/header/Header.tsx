import Image from "next/image";
import React from "react";
import Search from "./Search";
import Auth from "./Auth";


const Header = () => {

  return (
    <header className="w-full flex justify-between items-center px-10 py-4 bg-black">
      <div className="flex justify-start items-center gap-10">
        <div className="flex justify-center items-center gap-2">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <p className="text-xl font-bold text-white">Carrying Space</p>
        </div>
        <Search />
      </div>
      <Auth/>
    </header>
  );
};

export default Header;
