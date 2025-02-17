"use client";
import React, { useEffect, useState } from "react";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";

const Profile = () => {
  const [isMounted, setIsMounted] = useState(false); // Track client-side mount
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    setIsMounted(true); // Set to true when the component is mounted on the client
  }, []);

  if (!isMounted) {
    return null; // Prevent any SSR-related rendering
  }

  return (
    <div className="w-full pl-6">
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="mt-6 flex justify-between items-center border-b border-gray-200 pb-6">
        <h2 className="text-lg font-medium">Personal Information</h2>
        <button className="bg-primary text-white px-4 py-2 rounded-md">
          Edit
        </button>
      </div>
      <div className="mt-6 border-b border-gray-200 pb-6">
        <div className="w-full mt-6 flex justify-between items-center ">
          <div>
            <p className="font-bold">Name</p>
            <p className="text-gray-800 mt-2">
              {user.firstName} {user.lastName}
            </p>
          </div>
          <div>
            <p className="font-bold">Email</p>
            <p className="text-gray-800 mt-2">{user.email}</p>
          </div>
        </div>
        <div className="w-full flex justify-between items-center mt-12">
          <p className="font-bold">Shipping Address</p>
          <button className="bg-primary text-white px-4 py-2 rounded-md">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
