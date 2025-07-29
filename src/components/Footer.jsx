import Image from 'next/image';
import logo from '../assets/logo.png'
import light from '../assets/banner-light.png'
export default function Footer() {
  return (
    <footer className="px-5">

      <div className="relative overflow-hidden bg-[#002B55] p-5 md:p-10  lg:p-20  rounded-[24px]
         mx-auto ">

        <div className='grid 
      md:grid-cols-7 gap-10 lg:gap-25 items-start'>
                {/* Newsletter Signup */}
                <div className="col-span-3">
                <h3 className="text-[26px] font-medium text-white mb-1">Join Our JF Products</h3>
                <p className="text-sm text-gray-300 mb-4">We'll tell you about store updates and discounts</p>

                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-[100px] bg-[#FFFFFF1A] 
                    text-white placeholder-white   focus:outline-none"
                />

                <div className="flex items-center space-x-2 mt-3 mb-5">
                    <input type="checkbox" id="subscribe" className="form-checkbox" />
                    <label htmlFor="subscribe" className="text-xs text-white/50">
                    Yes, subscribe me to your newsletter.
                    </label>
                </div>

                <button className="bg-white text-black 
                font-medium cursor-pointer py-2 px-6 w-full rounded-full hover:bg-gray-200 transition">
                    Join Now
                </button>
                </div>

                {/* Information */}
                <div className="col-span-2">
                <h4 className="text-[26px] font-medium text-white mb-4">Information</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </div>

                {/* Helpful */}
                <div className="col-span-2">
                <h4 className="text-[26px] font-medium text-white mb-4">Helpful</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Shipping Policy</a></li>
                    <li><a href="#">My Account</a></li>
                </ul>
                </div>
        </div>

        {/* Logo and Contact */}
        <div className=" z-15 grid grid-cols-2 sm:grid-cols-3 items-center  h-full mt-15">
          {/* Logo */}
          <div className="sm:col-span-2 sm:flex items-center space-y-6  sm:space-x-6">
            <div
                      className="bg-white 
                       p-1 rounded-[40px] w-[65px]  h-[75px] sm:w-auto sm:h-auto"
                    >
                      <Image
                        src={logo}
                        alt="JF Products Logo"
                        className="object-contain sm:w-[80px]  sm:h-[90px]"
                        priority
                      />
                    </div>
            <div>
              <p className="text-white font-medium">Our Branches</p>
              <p className="text-white/80 font-normal">
                Coimbatore, Chennai, Hyderabad, Goa, Kochi
              </p>
            </div>
          </div>

          {/* Contact Button */}
          <div className="sm:col-span-1 text-center">
            <button className="bg-[#B0DD1D]  text-black font-medium 
            py-2 px-6 rounded-full ">
              Contact Us
            </button>
          </div>

        </div>

        {/* bg light */}
        <div className='absolute z-10 -left-100 -bottom-100'>
            <Image src={light} alt='bg white' />
        </div>


      </div>
    </footer>
  );
}
