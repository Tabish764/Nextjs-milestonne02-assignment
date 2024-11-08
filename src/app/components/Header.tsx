import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex    pt-5'>
        <div className='flex justify-center rounded-lg px-9 mx-auto py-2 text-white bg-gradient-to-br from-slate-500      '>
            <ul className='flex   sm:text-xl gap-3 sm:gap-9 '>
            <Link className='hover:text-slate-100' href='/home'>Home</Link>
            <Link className='hover:text-slate-100' href='/contact'>Contact Us</Link>
            <Link className='hover:text-slate-100' href='/blogs'>Blogs</Link>
            </ul>
        </div>
    </div>
  )
}

export default Header