import Image from 'next/image'
import React from 'react'

const Services3 = () => {
  return (
    <div className='w-full bg-white'>
    <div className='w-[90%] m-auto mt-[-100px]'>
        <Image src="/images/four-pics.png" alt="Truck Home Image" width={1200} height={700}
        className="rounded-lg shadow-lgw-full h-full" />
    </div>

<div className='w-[90%] flex flex-col md:flex-row justify-between m-auto my-10 items-center'>
    <div>
        <div className='text-4xl font-samibold flex'>At
        <Image src="/images/your.png" alt="Truck Home Image" width={90} height={24} />
        Service!</div>
        <div className='flex flex-col md:flex-row'>
            <button className='text-black font-semibold bg-yellow-500 hover:bg-yellow-400 px-4 py-2 my-4 md:my-2'>Get A Free Quote</button>
            <button className='text-black font-semibold bg-gray-200 hover:bg-gray-300 px-4 py-2 my-4 md:my-2 md:mx-2'>View Our Services</button>
        </div>
    </div>
    <div>
        <p className='text-sm font-semibold'>Proudly Serving the Northwestern Wisconsin Region.</p>
        <p className='text-sm text-gray-600'>Our Professional and Courteous drivers can tow and recover any type of vehicle 24 hours a day</p>
    </div>
</div>






















    </div>
  )
}

export default Services3