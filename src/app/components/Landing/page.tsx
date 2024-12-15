import Image from "next/image";
import React from "react";
import { trucks } from "@/app/utils/trucks";

const Landing = () => {
  return (
    <div>
      {/* ---------------------------home----------------------- */}
      <div className="element pt-40">
        <div className="w-[90%] m-auto text-white">
          <div className="flex flex-col md:flex-row justify-between">
            {/* -----------------------------left-------------------------------- */}
            <div>
              <div className="flex my-4">
                <div className="font-bold text-3xl">Our</div>
                <Image
                  src="/images/text.png"
                  alt="logo"
                  width={90}
                  height={24}
                />
              </div>
              <p className="my-4">
                Take a look at some picture of the previous towing jobs we are
                handled for customers in the area.
              </p>
              <button className="hidden md:flex text-black font-semibold bg-yellow-500 hover:bg-yellow-400 px-4 py-2 my-4">
                Get A Tow
              </button>
            </div>
            {/* ----------------------------------right--------------------------------- */}
            <div>
              <Image
                src="/images/home.png"
                alt="logo"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

      {/* -----------------------------------cards-------------------------- */}

      <div className="w-[90%] flex m-auto gap-3 mt-[-20px] mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {trucks.map((truck) => (
            <div key={truck.id}>
              <img
                src={truck.image}
                alt={`Truck ${truck.id}`}
                height={200}
                width={100}
                className="w-full h-full object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
