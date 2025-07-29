'use client'
import { useState } from 'react';
import Image from 'next/image';

import vector1 from '../assets/contact/vector1.png'
import vector2 from '../assets/contact/vector2.png'
import vector3 from '../assets/contact/vector3.png'
import vector4 from '../assets/contact/vector4.png'
import vector5 from '../assets/contact/vector5.png'
import vector6 from '../assets/contact/vector6.png'
import light from '../assets/banner-light.png'


const branches = [
  { 
    name: 'COIMBATORE',
    icon : vector1,
    active: true },
  { name: 'CHENNAI' 
    ,icon : vector2
  },
  { name: 'HYDERABAD', icon : vector3},
  { name: 'GOA', icon : vector4},
  { name: 'KOCHI',icon : vector5 },
  { name: 'MUMBAI', icon : vector6 },
];

export default function Contact() {
  const [activeBranch, setActiveBranch] = useState('COIMBATORE');

  return (
    <section className="max-w-6xl mx-auto px-5 py-15">
      
        <div className='relative border border-[#002B5533] rounded-[24px] p-5'>
                {/* badge */}
            <button className='
            absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            rounded-[100px] bg-[#B0DD1D]
             px-2.5 py-1 font-medium'>
                    Our Branches
            </button>


                {/* Branch Tabs */}
      <div className="flex flex-wrap items-center gap-6
      justify-center mt-5 mb-6 ">
        {branches.map((branch) => (
          <div
            key={branch.name}
            onClick={() => setActiveBranch(branch.name)}
            className={`cursor-pointer 
                text-center text-sm font-medium p-3 ${
              activeBranch === branch.name
                ? 'border border-[#B0DD1D] rounded-[16px] bg-[#B0DD1D1A]'
                : 'border border-white'
            }`}
          >
            <div className="flex flex-col items-center space-y-1">
              {/* Icon Placeholder */}
              <div className=" rounded-full" >
                    <Image src={branch.icon} alt={branch.name} />
              </div>
              <span>{branch.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="bg-white rounded-lg 
      grid md:grid-cols-2 gap-4 ">
                {/* Form Section */}
          
            <div className="w- relative overflow-hidden bg-[#002B55] 
            text-white p-6 rounded-lg">
                    {/* form body */}
                    <h2 className="text-[26px] font-medium mb-4">Contact Us</h2>
                    <form className="space-y-4">
                        <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-5 py-3  bg-[#FFFFFF1A] 
                         placeholder-white font-normal  text-white focus:outline-none rounded-[24px] "
                        />
                        <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-5 py-3  bg-[#FFFFFF1A] 
                         placeholder-white font-normal text-[#ffffffcd] focus:outline-none rounded-[24px]"
                        />
                        <input
                        type="tel"
                        placeholder="Phone *"
                        className="w-full px-5 py-3  bg-[#FFFFFF1A] 
                         placeholder-white font-normal text-[#ffffffcd] focus:outline-none rounded-[24px]"
                        />
                        <textarea
                        placeholder="Write message"
                        className="w-full px-5 py-3  bg-[#FFFFFF1A] 
                         placeholder-white font-normal text-[#ffffffcd] focus:outline-none rounded-[24px] h-24 resize-none"
                        ></textarea>
                        <button
                        type="submit"
                        className="bg-[#B0DD1D] rounded-[100px]
                         text-black font-medium py-2 px-6 cursor-pointer "
                        >
                        Submit
                        </button>
                    </form>
                        <div className='absolute -bottom-130 -right-130 '>
                            <Image src={light} alt='bg light' />
                        </div>
            </div>

                    

            {/* Map and Address */}
            <div className="relative rounded-lg overflow-hidden">
            {/* Embedded Map */}
            <iframe
                title="map"
                src="https://www.google.com/maps?q=JRR+Towers,+Pattalamma+Temple+Rd,+Basavanagudi,+Bangalore,+560004&output=embed"
                className="w-full h-full min-h-[400px] border-none"
                allowFullScreen=""
                loading="lazy"
            ></iframe>

            {/* Address Box */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-4 flex items-start space-x-2 max-w-xs">
                {/* <FaMapMarkerAlt className="text-green-600 text-xl mt-1" /> */}
                <p className="text-sm">
                <span className="font-bold">JRR Towers</span> (2nd Floor),
                Pattalamma Temple Rd, Basavanagudi, Bangalore, 560004
                </p>
            </div>

            </div>
      </div>

        </div>


    </section>
  );
}
