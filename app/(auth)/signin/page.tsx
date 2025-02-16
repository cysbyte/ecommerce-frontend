"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/logo.png";
import google from "@/public/auth/google.svg";
import linkedin from "@/public/auth/linkedin.svg";
import twitter from "@/public/auth/twitter.svg";
import cryption from "@/public/auth/cryption.svg";
import Link from "next/link";
import { z } from "zod";
import { useRouter } from "next/navigation";
import axios from "axios";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const SignIn = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      // Validate form data
      const validatedData = signInSchema.parse(data);

      // Call login API using axios
      const response = await axios.post(
        "http://localhost:3000/v1/auth/login",
        validatedData,
        { withCredentials: true }
      );

      if (response.data) {
        localStorage.setItem("accessToken", response.data.accessToken);
        router.push("/");
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      } else if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Invalid email or password");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <main className="w-screen h-screen p-10 bg-[url('/bg-hero.svg')] bg-fixed bg-center">
      <Link href={"/"}>
        <Image className="w-[50px]" src={logo} alt="Carry Space" />
      </Link>
      <div className="w-full flex items-center justify-center">
        <div className="w-full text-center bg-white rounded-3xl p-10 flex flex-col justify-center items-center">
          <h2 className="font-bold text-2xl text-[#1C1D20]">Sign In</h2>
          <p className="text-sm text-[#5F6166] mt-2">
            The new user will be automatically registered
          </p>
          <div className="w-full md:max-w-[360px] flex justify-between items-center gap-2 mt-5">
            <Image
              className="flex-1 cursor-pointer w-[30%]"
              src={google}
              alt=""
            />
            <Image
              className="flex-1 cursor-pointer w-[30%]"
              src={linkedin}
              alt=""
            />
            <Image
              className="flex-1 cursor-pointer w-[30%]"
              src={twitter}
              alt=""
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-10 w-full md:max-w-[360px] flex flex-col gap-2"
          >
            {error && <div className="text-red-500 text-sm mb-0">{error}</div>}
            <input
              type="text"
              name="email"
              className="border-[1px] border-[#eeeeee] rounded-sm w-full py-2 px-4 mt-2"
              placeholder="Email*"
            />
            <input
              type="password"
              name="password"
              className="border-[1px] border-[#eeeeee] rounded-sm w-full py-2 px-4 mt-2"
              placeholder="Password*"
            />
            <button type="submit" className="w-full block btn-primary mt-6">
              Sign In
            </button>
            <div className="flex items-center justify-center mt-4">
              <p className="text-sm text-[#5F6166]">
                Don&apos;t have an account?{" "}
              </p>
              <Link className="text-[#27CA44] text-sm ml-1" href={"/signup"}>
                Sign Up
              </Link>
            </div>
          </form>
          <p className="max-w-[600px] text-[12px] text-[#5F6166] mt-4">
            By signing up, you agree to Final Round&apos;s Terms of Service and
            Privacy Policy. Your privacy is our top priority. Learn more about
            the steps we take to protect it.
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
