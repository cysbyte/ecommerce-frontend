import Image from 'next/image'
import React from 'react'

const Search = () => {
  return (
    <div className='bg-white w-[500px] h-[50px] rounded-lg flex justify-between items-center pl-6 overflow-hidden'>
        <input className='outline-none placeholder:text-black w-full' placeholder='Search for band, color, etc' type="text" />
        <div className='w-[60px] h-full flex justify-center items-center bg-primary'>
            <Image src="/search.svg" alt="search" width={25} height={25} />
        </div>
    </div>
  )
}

export default Search