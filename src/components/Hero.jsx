import Image from "next/image";
import hero1 from "../assets/hero1.png";


export default function Hero() {

  return (
    <section className="max-w-7xl border mx-auto">
        <div className="cards flex items-center justify-center">
            <div className={`flex items-center gap-12  bg-[#F2F4F6] rounded-[24px] 
       p-5 `}>
            <div>
                 <img src={hero1} alt="" />
                 <Image
            src={hero1}
            alt="thumbnail image"
            // width={150}
            // height={40}
            className="object-contain w-[350px] h-[350px]"
            priority
          />
            </div>
            <div className="pr-5">
                 <h1 className="font-medium text-[32px] text-left">JF Privezy Grass Wall</h1>
                 <p className="font-normal mt-1.5 text-left"> The perfact Blend of Greenery</p>
                 <button className="cursor-pointer mt-4 px-4 py-2 rounded-[100px] bg-[#B0DD1D] text-white font-medium ">Shop Now</button>
            </div>
            </div>
        </div>
    </section>
  );
}
