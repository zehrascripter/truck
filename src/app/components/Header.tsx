import { Menu, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='element fixed top-0 w-[100%]'>
<div className='w-[100%] md:w-[90%] m-auto  flex justify-between items-center py-4 px-4 text-white'>
    <div>
        <Image src="/images/logo.png" alt="logo" width={90} height={24} />
    </div>
    <div>
        <ul className='hidden lg:flex gap-4 font-normal text-sm items-left mr-36'>
            <li className='hover:underline cursor-pointer'>Services</li>
            <li className='hover:underline cursor-pointer'>Light/Medium</li>
            <li className='hover:underline cursor-pointer'>Heavy Duty</li>
            <li className='hover:underline cursor-pointer'>Gallery</li>
            <li className='hover:underline cursor-pointer'>About Us</li>
        </ul>


    </div>
    <div className='flex gap-2'>
        <button className='hidden md:flex gap-2 border border-white font-semibold text-sm px-4 py-2 items-center hover:bg-gray-600'><Phone className='w-4 h-4'/> Call 1111-123-3456</button>
        <button className='hidden md:flex text-black font-semibold bg-yellow-500 hover:bg-yellow-400 px-4 py-2 '>Contact Us</button>
        <button className='md:hidden flex gap-2 text-black font-semibold bg-yellow-500 hover:bg-yellow-400 px-4 py-2 items-center '><Phone className='w-4 h-4'/>Call Now!</button>
        <button className='md:hidden  gap-2 border border-white font-semibold text-sm px-2 items-center hover:bg-gray-600'><Menu className='w-4 h-4'/></button>
    </div>

</div>
<div className='w-full h-[1px] bg-slate-50'></div>
































    </div>
  )
}

export default Header