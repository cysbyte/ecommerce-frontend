import Image from 'next/image'
import React from 'react'
import logo from "@/public/logo.png"
import google from "@/public/auth/google.svg"
import linkedin from "@/public/auth/linkedin.svg"
import twitter from "@/public/auth/twitter.svg"
import cryption from "@/public/auth/cryption.svg"
import Link from 'next/link'

const Auth = () => {
  return (
    <main className="w-screen h-screen p-10 bg-[url('/bg-hero.svg')] bg-fixed bg-center">
      <Image className="w-[50px]" src={logo} alt="Carrying Space" />
      <div className='w-full flex items-center justify-center'>
        <div className='w-[45%] text-center bg-white rounded-3xl p-0 flex flex-col justify-center items-center'>
          <h2 className='font-bold text-2xl text-[#1C1D20]'>Sign Up</h2>
          <p className='text-sm text-[#5F6166] mt-2'>The new user will be automatically registered</p>
          <div className='w-[60%] flex justify-between items-center gap-2 mt-5'>
            <Image className='w-[33%] cursor-pointer' src={google} alt="" />
            <Image className='w-[33%] cursor-pointer' src={linkedin} alt="" />
            <Image className='w-[33%] cursor-pointer' src={twitter} alt="" />
          </div>
          <div className='mt-5 w-[60%] flex flex-col gap-2'>
            <div className=''>
              <input type="text" className='border-[1px] border-[#eeeeee] rounded-sm w-full py-2 px-4 mt-2' placeholder='First Name*'/>
            </div>
            <div className=''>
              <input type="password" className='border-[1px] border-[#eeeeee] rounded-sm w-full py-2 px-4 mt-2' placeholder='Last Name*'/>
            </div>
            <div className=''>
              <input type="password" className='border-[1px] border-[#eeeeee] rounded-sm w-full py-2 px-4 mt-2' placeholder='Email*'/>
            </div>
            <div className=''>
              <input type="password" className='border-[1px] border-[#eeeeee] rounded-sm w-full py-2 px-4 mt-2' placeholder='Password*'/>
            </div>
            <Link href={'/interviews'} className='btn-primary mt-6'>Sign Up</Link>
            <div className='flex items-center justify-center mt-4'>
              <p className='text-sm text-[#5F6166]'>Already have an account? </p>
              <Link className='text-[#27CA44] text-sm ml-1' href={'/signin'}>Sign In</Link>
            </div>
          </div>
          <div className='w-full bg-[rgba(39, 202, 68, 0.1)] rounded-md flex justify-center items-center mt-10'>
            <Image src={cryption} alt='' />
            <p className='text-[#27CA44] text-[11px] ml-1'>Secured by 256-bit AES and 256-bit SSL/TLS encryption</p>
          </div>
          <p className='text-[12px] text-[#5F6166] mt-2'>By signing up, you agree to Final Round&apos;s Terms of Service and Privacy Policy. Your privacy is our top priority. Learn more about the steps we take to protect it.</p>
        </div>
      </div>
    </main>
  )
}

export default Auth