import Image from 'next/image'
import React from 'react'

const Services2 = () => {
  return (
    <div className='w-full bg-white'>
    <div className="w-[100%] md:w-[90%] items-center m-auto py-12 flex flex-col-reverse md:flex-row justify-between">
      {/* Image Section */}
      <div className="w-full md:w-[50%] h-[500px]">
        <Image
          src="/images/truck-home.png"
          alt="Truck Home Image"
          className="rounded-lg shadow-lg"
          width={500}
          height={500}
        />
      </div>

      {/* Content Section */}
      <div className="w-[100%] md:w-[50%]">
        <h1 className="text-4xl font-bold text-gray-800">Our 24/7 towing is available in the following areas:</h1>
        <p className="text-gray-600 my-6">
          We offer a wide range of services tailored to your needs. From heavy-duty truck support
          to quick assistance, we are here to help you 24/7.
          <br />
          <button className='text-black font-semibold bg-yellow-500 hover:bg-yellow-400 px-4 py-2 my-4'>Call (715) 458-2119</button>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Services2;
