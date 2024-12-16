import { Facebook, Instagram, Linkedin, Paperclip, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="element3">
      <div className="text-white w-full md:w-[90%] m-auto">
        {/* Form Section */}
        <div className="flex flex-col md:flex-row justify-between py-12 gap-8 items-center">
          <div className="px-2">
            <h1 className="font-bold text-4xl">In a rush?</h1>
            <p className="mt-4">
              Our teams work 24/7 around the clock for your safety and security.
            </p>
            <button className="hidden md:flex gap-2 border border-white font-semibold text-sm px-4 py-2 items-center mt-4 hover:bg-gray-600">
              <Phone className="w-4 h-4" /> Call us at 1111-123-3456
            </button>
          </div>
          <div className="px-2">
            <div className="flex gap-4">
              <input
                className="p-2 my-2 rounded-md text-sm w-full md:w-auto"
                type="text"
                placeholder="Name"
                aria-label="Name"
              />
              <input
                className="p-2 my-2 rounded-md text-sm w-full md:w-auto"
                type="text"
                placeholder="Email"
                aria-label="Email"
              />
            </div>
            <input
              type="number"
              placeholder="Phone (eg: 123-456-7890)"
              className="p-2 rounded-md my-2 w-full text-sm"
              aria-label="Phone"
            />
            <textarea
              placeholder="Your Message"
              className="p-2 rounded-md my-2 w-full h-20 resize-none text-sm"
              aria-label="Message"
            ></textarea>
            <div className="flex items-center gap-4 mt-4">
              <Paperclip className="text-gray-500" />
              <div>
                <p>Attach Files</p>
                <p className="text-gray-500 text-sm">
                  Upload any JPEG, PNG or PDF file
                </p>
              </div>
              <button className="bg-gray-700 text-sm py-2 px-4 rounded-md">
                Choose File
              </button>
            </div>
            <button className="text-black font-semibold bg-yellow-500 hover:bg-yellow-400 px-4 py-2 w-full mt-8 text-sm">
              Send Message
            </button>
          </div>
        </div>
        <hr className="border-gray-600 my-6" />
        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center py-12 gap-8">
          <Image src="/images/logo.png" alt="logo" width={200} height={24} />
          <div className="flex gap-10">
            <ul className="gap-4 font-normal text-gray-400 text-sm">
              <li className="hover:underline cursor-pointer text-white mb-4">
                Pages
              </li>
              <li className="hover:underline cursor-pointer">Services</li>
              <li className="hover:underline cursor-pointer">Light/Medium</li>
              <li className="hover:underline cursor-pointer">Heavy Duty</li>
              <li className="hover:underline cursor-pointer">Gallery</li>
            </ul>
            <ul className="gap-4 font-normal text-gray-400 text-sm">
              <li className="hover:underline cursor-pointer text-white mb-4">
                Company
              </li>
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-6" />
        {/* Footer End */}
        <div className="flex flex-col md:flex-row gap-3 justify-between items-center py-12">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2025 SR Towing. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Facebook className="hover:text-blue-500 cursor-pointer" />
            <Instagram className="hover:text-pink-500 cursor-pointer" />
            <Linkedin className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
