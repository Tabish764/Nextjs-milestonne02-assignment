import React from 'react';

const Footer = () => {
  return (
    <div className='flex rounded-xl flex-col pt-10 pb-20 bg-gradient-to-r '>
        <h1 className='text-4xl sm:text-5xl md:text-6xl text-white text-center'>Contact Us</h1>
        <div className='flex justify-center '>
            <form action="">
                <div className='flex flex-col  items-center  max-w-full w-full  gap-5 justify-center  p-5'>
                    <div className='flex flex-wrap justify-center items-center gap-5 w-full'>
                        <input type="text" placeholder='First Name' className='rounded-lg px-3 py-2 w-full sm:w-1/2 md:w-1/3 lg:w-[25rem]' />
                        <input type="text" placeholder='Last Name' className='rounded-lg px-3 py-2 w-full sm:w-1/2 md:w-1/3 lg:w-[25rem]' />
                    </div>
                    <div className='flex flex-wrap justify-center gap-5 w-full'>
                        <input type="text" placeholder='Phone' className='rounded-lg px-3 py-2 w-full sm:w-1/2 md:w-1/3 lg:w-[25rem]' />
                        <input type="text" placeholder='Email' className='rounded-lg px-3 py-2 w-full sm:w-1/2 md:w-1/3 lg:w-[25rem]' />
                    </div>
                    <textarea placeholder='Message' className='rounded-lg px-3 py-2 max-w-full w-full h-32 resize-none' />
                </div>
                <div className='flex justify-center'>
                    <button className='bg-purple-500 py-3   px-5 rounded-lg text-white hover:bg-purple-700'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Footer;
