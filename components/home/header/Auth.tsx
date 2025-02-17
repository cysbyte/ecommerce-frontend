"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BsBagCheck } from "react-icons/bs";
import { MdSell } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { RootState } from "@/app/store/store";
import { logout } from "@/app/store/features/userSlice";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";

const Auth = () => {

  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    debugger
    try {
      // Call logout API using axios
      await axios.post("http://localhost:3000/v1/auth/logout", {}, {
        withCredentials: true
      });
      
      // Clear access token from localStorage
      localStorage.removeItem("accessToken");
      
      // Dispatch logout action to clear user state
      dispatch(logout());
      
      // Redirect to signin page
      router.push("/signin");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center gap-5">
      {user && user.email ? (
        <>
          <IoMdNotifications className="text-white text-3xl cursor-pointer hover:text-primary duration-300 transition-all" />
          <div 
            className="relative z-50" 
            ref={menuRef}
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
          >
            {
              !user.picture ? <FaUserCircle 
              className="text-white text-3xl cursor-pointer hover:text-primary duration-300 transition-all"
            /> : <Image src={user.picture} alt="User" width={25} height={25} className="rounded-full" />
            }
            {showMenu && (
              <div className="absolute right-0 top-full pt-2">
                <div className="w-48 bg-white rounded-lg shadow-lg py-2">
                  <Link 
                    href="/profile" 
                    className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center gap-3"
                  >
                    <CgProfile className="text-xl" />
                    Profile
                  </Link>
                  <Link 
                    href="/buying" 
                    className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center gap-3"
                  >
                    <BsBagCheck className="text-xl" />
                    Buying
                  </Link>
                  <Link 
                    href="/selling" 
                    className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center gap-3"
                  >
                    <MdSell className="text-xl" />
                    Selling
                  </Link>
                  <Link 
                    href="/favorites" 
                    className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center gap-3"
                  >
                    <AiOutlineHeart className="text-xl" />
                    Favorite Items
                  </Link>
                  <Link 
                    href="/settings" 
                    className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center gap-3"
                  >
                    <IoMdSettings className="text-xl" />
                    Settings
                  </Link>
                  <Link 
                    href="/settings" 
                    className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center gap-3"
                  >
                    <IoMdSettings className="text-xl" />
                    Settings
                  </Link>
                  <button 
                    className="w-full px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center gap-3"
                    onClick={handleLogout}
                  >
                    <IoLogOutOutline className="text-xl" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <Link
            className="text-white px-4 py-2 border border-white rounded-full font-semibold hover:bg-primary hover:text-black hover:border-primary duration-300 transition-all"
            href="/signin"
          >
            Sign In
          </Link>
          <Link
            className="px-4 py-2 rounded-full bg-primary/95 hover:bg-primary text-black font-semibold duration-300 transition-all"
            href="/signup"
          >
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
};

export default Auth;
