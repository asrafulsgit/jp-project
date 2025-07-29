"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import user from "../assets/user.svg";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";
import { Menu, X } from "lucide-react";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="relative max-w-4xl w-full px-5 xl:px-0 mx-auto py-4 flex items-center justify-between">
        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 cursor-pointer z-50"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-center gap-8 text-[#1A1A1A] font-normal py-2">
          <button  className="cursor-pointer" >Home</button>
          <button className="cursor-pointer"  >Shop</button>
          <button href="/blogs">Blogs</button>
          <button className="cursor-pointer"  >Contact</button>
        </nav>

        {/* Center Logo */}
        <button
         
          className="absolute left-1/2 -translate-x-1/2 top-14   
          -translate-y-1/2 bg-white 
           p-1 rounded-[40px]"
        >
          <Image
            src={logo}
            alt="JF Products Logo"
            className="object-contain w-[80px]  h-[90px]"
            priority
          />
        </button>
        {/* right buttons */}
        <div className="hidden md:flex items-center gap-6 text-[#1A1A1A] font-normal">
          <button  className=" cursor-pointer flex items-center gap-1">
            Login
            <Image src={user} alt="User Icon" width={20} height={20} />
          </button>
          <button className="cursor-pointer">
            <Image src={search} alt="Search Icon" width={20} height={20} />
          </button>
          <button  className=" cursor-pointer relative">
            <Image src={cart} alt="Cart Icon" width={20} height={20} />
            <span className="bg-[#1A1A1A] text-white px-1 
            absolute -top-2  -right-2 rounded-2xl text-xs">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 px-6 pt-24 space-y-6 
        transform transition-all duration-300 ease-in-out
        md:hidden ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
      >
       <div className="flex flex-col  items-start gap-3">
        <button className="cursor-pointer" onClick={() => setIsOpen(false)}>Home</button>
        <button className="cursor-pointer" onClick={() => setIsOpen(false)}>Shop</button>
        <button className="cursor-pointer" onClick={() => setIsOpen(false)}>Blogs</button>
        <button className="cursor-pointer" onClick={() => setIsOpen(false)}>Contact</button>
       </div>

        <div className="flex items-center gap-6">
          <button
         
            onClick={() => setIsOpen(false)}
            className="flex cursor-pointer items-center gap-2"
          >
            <Image src={user} alt="User Icon" width={20} height={20} />
            Login
          </button>
          <button  className="cursor-pointer" onClick={() => setIsOpen(false)}>
            <Image src={search} alt="Search Icon" width={20} height={20} />
          </button>
          <button  
          onClick={() => setIsOpen(false)} className="relative cursor-pointer">
            <Image src={cart} alt="Cart Icon" width={20} height={20} />
            <span className="bg-[#1A1A1A] cursor-pointer text-white px-1 absolute -top-3 -right-1 rounded-2xl text-xs">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
