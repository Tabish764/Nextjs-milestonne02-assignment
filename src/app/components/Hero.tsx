import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex  flex-col p-5 '>
        <h1 className='text-white font-medium text-3xl sm:text-4xl md:text-6xl md:text-left pt-[5rem] p-2 text-center'>Welcome to Travel Guide!</h1>
      <p className=' text-white  p-2 font-bold text-center sm:text-xl md:text-2xl md:text-left md:w-[55%]'>Explore a world of travel tips, destination guides, and insider advice crafted to make every adventure truly unforgettable. Whether you're planning a weekend getaway or a journey around the world, our resources will inspire you to travel smarter, explore deeper, and experience more. 
        </p>
      <div className='sm:flex sm:justify-center md:justify-normal flex justify-center pt-3'>

      <button className='bg-purple-500 py-3   px-5 rounded-lg text-white hover:bg-purple-700'><Link href='/blogs'
      >View Blogs</Link></button>
      </div>
    </div>
  )
}

export default Hero