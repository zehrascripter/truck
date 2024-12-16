import Image from 'next/image'
import React from 'react'
import Services2 from '../components/Services2'
import Services3 from '../components/Services3'

const Services = () => {
  return (
        <div>
          {/* ---------------------------home----------------------- */}
          <div className="element pt-40 w-full">
            <div className="w-[90%] m-auto text-white">
              <div className="flex flex-col md:flex-row justify-between">
                {/* -----------------------------left-------------------------------- */}
                <div>
                  <div className="flex ">
                    <div className="text-3xl font-semibold md:text-5xl">The Most </div>
                    <div>
                    <Image
                      src="/images/reliable.png"
                      alt="logo"
                      width={260}
                      height={24}
                      className='ml-2 w-36 h-28'
                    />
                    </div>
                  </div>
                  <p className="font-semibold text-3xl md:text-5xl mt-[-25px] md:mt-[-30px]">Towing Service in <br /> Northwestern Wl!</p>

                  <p className="my-8">
                  if you are having vehicle issues, there is no reason to feel defeated. S and R Towing <br />
                  here to help you during this stressful moment of your life.
                  </p>
                  <button className="hidden md:flex text-black font-semibold bg-yellow-500 hover:bg-yellow-400 px-4 py-2 my-4">
                    Get A Tow
                  </button>
                </div>
                {/* ----------------------------------right--------------------------------- */}
                <div>
                  <Image
                    src="/images/home2.png"
                    alt="logo"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>
            <Services2/>
            <Services3/>
          </div>















    </div>
  )
}

export default Services