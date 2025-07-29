
import Image from 'next/image';

import quote from '../assets/quote.png'
import leftArrow from '../assets/left-arrow.png'
import rightArrow from '../assets/right-arrow.png'
import shimul from '../assets/shimul.png'

const Testimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-[32px] font-medium text-center mb-10">
          Why Customers Love <span className="text-black">Us?</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center 
        justify-center gap-10 ">
          
          {/* Testimonial Box */}
          <div className="bg-[#F2F4F6] rounded-xl py-7 sm:py-15  lg:py-20 px-7 sm:px-10 md:w-3/4 
           h-full">
                <div className="w-12 h-12 mb-4">
                    <Image 
                        src={quote}
                        alt='quote'
                    />
                </div>
                <p className="text-[#1A1A1A]/80 text-[18px] font-normal ">
                I had initial issue with stock availability and delivery. Once the product arrived on site the
                work has completed very fast (400ft.) Value for money and easy to install. Happy with the product
                </p>
                
            {/* Arrows */}
            <div className="bg-white  mt-10 sm:mt-20 rounded-2xl 
            flex justify-between items-center px-5 py-4">
                <div><p className="font-semibold
             text-black">- Samuel Varughese</p></div>
                <div className='flex gap-3'>
                     <button className="w-8 h-8  cursor-pointer"> 
                <Image src={leftArrow} alt='left arrow' />
              </button>
              <button className="w-8 h-8 cursor-pointer">
               <Image src={rightArrow} alt='right arrow' />
              </button>
                </div>
            </div>
          </div>

          {/* Customer Image */}
          <div className=" hidden md:w-[300px]  h-[450px] md:flex justify-center">
            <div className="rounded-xl overflow-hidden 
            bg-[#F2F4F6]
             p-2">
              <Image
                src={shimul} 
                alt="Customer Samuel Varughese"
                className="rounded-lg object-contain w-[300px] h-full"
              />
            </div>
          </div>

        </div>


      </div>
    </section>
  );
};

export default Testimonials;
