"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/logo.png";
// import google from "@/public/auth/google.svg";
// import linkedin from "@/public/auth/linkedin.svg";
// import twitter from "@/public/auth/twitter.svg";
import Link from "next/link";
import { z } from "zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setUser } from '@/app/store/features/userSlice';
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google'
import { CredentialResponse } from '@react-oauth/google';


const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const SignIn = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

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
        const accessToken = response.data.accessToken;
        // Store token in localStorage
        localStorage.setItem("accessToken", accessToken);
        
        // Decode token and log the contents
        const decodedToken = jwtDecode(accessToken);
        console.log('Decoded token:', decodedToken);
        
        // Type assertion with optional properties
        const userData = decodedToken as { 
          email: string; 
          firstName?: string;
          lastName?: string;
          picture?: string;
        };

        // Update Redux store with user data from token, using optional chaining
        dispatch(setUser({
          email: userData.email,
          firstName: userData.firstName || '', // Provide default empty string if undefined
          lastName: userData.lastName || '', // Provide default empty string if undefined
          picture: userData.picture || '',
        }));

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

  const handleGoogleLoginSuccess = async (response: CredentialResponse) => {
    try {
      const token = response.credential;
      const res = await axios.post(
        "http://localhost:3000/v1/auth/google-auth",
        { token },
        { withCredentials: true }
      );

      if (res.data) {
        const accessToken = res.data.accessToken;
        // Store token in localStorage
        localStorage.setItem("accessToken", accessToken);
        
        // Decode token and get user data
        const decodedToken = jwtDecode(accessToken);
        debugger
        const userData = decodedToken as { 
          email: string; 
          firstName?: string;
          lastName?: string;
          picture?: string;
        };

        // Update Redux store with user data
        dispatch(setUser({
          email: userData.email,
          firstName: userData.firstName || '',
          lastName: userData.lastName || '',
          picture: userData.picture || '',
        }));

        router.push("/");
      }
    } catch (error) {
      console.error('Google authentication failed:', error);
      setError("Google authentication failed. Please try again.");
    }
  };

  const handleError = () => {
    console.log('Google Sign-In was unsuccessful. Try again later.');
  };

  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  console.log(googleClientId);

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
          <div className="w-full md:max-w-[350px] flex justify-between items-center gap-2 mt-5">
          <GoogleLogin width={350} shape="circle"
                onSuccess={handleGoogleLoginSuccess}
                onError={handleError}
            />
            {/* <Image
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
            /> */}
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-10 w-full md:max-w-[350px] flex flex-col gap-2"
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
