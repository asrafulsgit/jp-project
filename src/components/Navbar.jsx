"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import user from "../assets/user.svg";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="relative max-w-7xl mx-auto py-4 flex items-center justify-between">
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
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Center Logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 top-14  md:top-16 
          -translate-y-1/2"
        >
          <Image
            src={logo}
            alt="JF Products Logo"
            className="object-contain w-[80px] md:w-[100px] h-[90px] md:h-[110px]"
            priority
          />
        </Link>
        {/* right links */}
        <div className="hidden md:flex items-center gap-6 text-[#1A1A1A] font-normal">
          <Link href="/login" className="flex items-center gap-1">
            Login
            <Image src={user} alt="User Icon" width={20} height={20} />
          </Link>
          <Link href="/search">
            <Image src={search} alt="Search Icon" width={20} height={20} />
          </Link>
          <Link href="/cart" className="relative">
            <Image src={cart} alt="Cart Icon" width={20} height={20} />
            <span className="bg-[#1A1A1A] text-white px-1 
            absolute -top-2  -right-2 rounded-2xl text-xs">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 px-6 pt-24 space-y-6 
        transform transition-all duration-300 ease-in-out
        md:hidden ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
      >
       <div className="flex flex-col gap-4">
         <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
        <Link href="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
       </div>

        <div className="flex items-center gap-6">
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2"
          >
            <Image src={user} alt="User Icon" width={20} height={20} />
            Login
          </Link>
          <Link href="/search" onClick={() => setIsOpen(false)}>
            <Image src={search} alt="Search Icon" width={20} height={20} />
          </Link>
          <Link href="/cart" onClick={() => setIsOpen(false)} className="relative">
            <Image src={cart} alt="Cart Icon" width={20} height={20} />
            <span className="bg-[#1A1A1A] text-white px-1 absolute -top-3 -right-1 rounded-2xl text-xs">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
