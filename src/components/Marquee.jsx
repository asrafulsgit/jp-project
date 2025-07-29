import Marquee from "react-fast-marquee";
import marqu from "../assets/marqu.png";
import Image from "next/image";
export default function MarqueeSection  ()  {
  return (
   <div
  style={{
    transformOrigin: "left center",
    transform: "rotate(-5deg)",
  }}
  className="border-t border-b border-black overflow-hidden bg-[#D9ECFF] 
  inline-block py-4 w-full mt-25"
>
  <Marquee
    gradient={false}
    speed={50}
    pauseOnHover={true}
    loop={0}
  >
    <div className="flex items-center gap-3 md:gap-5 mr-6 md:mr-10">
      <Image
        src={marqu}
        alt="sponsor logo"
        className="w-8 h-8 md:w-12 md:h-12" // responsive image size
      />
      <p className="text-[#002B55] font-medium text-sm sm:text-base md:text-xl">
        Shipping Across India
      </p>
    </div>
    <div className="flex items-center gap-3 md:gap-5 mr-6 md:mr-10">
      <Image
        src={marqu}
        alt="sponsor logo"
        className="w-8 h-8 md:w-12 md:h-12"
      />
      <p className="text-[#002B55] font-medium text-sm sm:text-base md:text-xl">
        Quality Product
      </p>
    </div>
    <div className="flex items-center gap-3 md:gap-5 mr-6 md:mr-10">
      <Image
        src={marqu}
        alt="sponsor logo"
        className="w-8 h-8 md:w-12 md:h-12"
      />
      <p className="text-[#002B55] font-medium text-sm sm:text-base md:text-xl">
        Shipping Across India
      </p>
    </div>
  </Marquee>
</div>


  )
}
