import { Facebook, Instagram, Linkedin, Paperclip, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="element3">
      <div className="text-white w-full md:w-[90%] m-auto">
        {/* --------------------form----------------------- */}
        {/* --------------------------left----------------------- */}
        <div className="flex flex-col md:flex-row justify-between py-12 items-center">
          <div>
            <h1 className="font-bold text-4xl">In a rush?</h1>
            <br />
            <p>
              Our teams work 24/7 around the clock <br /> for your safety and
              security.
            </p>
            <br />
            <button className="hidden md:flex gap-2 border border-white font-semibold text-sm px-4 py-2 items-center hover:bg-gray-600">
              <Phone className="w-4 h-4" /> Call us at 1111-123-3456
            </button>
          </div>

          {/* ----------------------------right--------------------- */}

          <div>
            {/* ----------------------input fields--------------------- */}
            <div className="flex gap-4">
              <input
                className="p-2 my-2 rounded-md text-sm"
                type="text"
                placeholder="Name"
              />
              <input
                className="p-2 my-2 rounded-md text-sm"
                type="text"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Phone (eg: 123-456-7890)"
                className="p-2 rounded-md my-2 w-full text-sm"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="p-2 rounded-md my-2 w-full h-20 resize-none text-sm"
              ></textarea>
            </div>
            {/* -----------------------------Attach files--------------------------- */}
            <div className="flex items-center gap-4 mt-4">
              <div>
                <Paperclip className="text-gray-500" />
              </div>
              <div>
                <p>Attach Files</p>
                <p className="text-gray-500 text-sm">
                  Upload any JPEG, PNG or PDF file
                </p>
              </div>
              <div>
                <button className="bg-gray-700 text-sm py-2 px-4 rounded-md">
                  Choose File
                </button>
              </div>
            </div>
            {/* -----------------------------btn-------------------------- */}
            <button className="text-black font-semibold bg-yellow-500 hover:bg-yellow-400 px-4 py-2 w-full mt-8 text-sm">
              Send Message
            </button>
          </div>
        </div>

        {/* --------------------------------Line----------------------------------- */}
        <hr className="text-gray-600"/>
          
        {/* -----------------------------------footer------------------------------------ */}

<div className="flex flex-col md:flex-row justify-between items-center py-20">
  <div>
    <Image src="/images/logo.png" alt="logo" width={200} height={24} />
  </div>

  <div className="flex gap-10">
  <div>
    <ul className="gap-4 font-normal text-gray-400 text-sm items-left">
      <li className="hover:underline cursor-pointer text-white mb-4">Pages</li>
      <li className="hover:underline cursor-pointer">Services</li>
      <li className="hover:underline cursor-pointer">Light/Medium</li>
      <li className="hover:underline cursor-pointer">Heavy Duty</li>
      <li className="hover:underline cursor-pointer">Gallery</li>
    </ul>
  </div>
  <div>
  <ul className="gap-4 font-normal text-gray-400 text-sm items-left">
      <li className="hover:underline cursor-pointer text-white mb-4">Company</li>
      <li className="hover:underline cursor-pointer">About Us</li>
      <li className="hover:underline cursor-pointer">Careers</li>
      <li className="hover:underline cursor-pointer">Contact</li>
    </ul>
  </div>
  </div>
</div>
        {/* --------------------------------Line----------------------------------- */}
        <hr className="text-gray-700"/>
{/* ------------------------------footer end-------------------------- */}
<div className="flex flex-col md:flex-row gap-3 justify-between items-center py-12">
<div>
  <p className="text-gray-400 text-sm">© 2025 SR Towing. All rights reserved.</p>
</div>
<div className="flex gap-4">
<Facebook />
<Instagram />
<Linkedin />
</div>
</div>
      </div>
    </div>
  );
};

export default Footer;
