import Image from "next/image";
import flag from "../assets/flag.png";
import settings from "../assets/settings.png";
import light from "../assets/banner-light.png";

export default function WhyUs() {
  return (
    <section className="pt-12 pb-20">
      <div className="max-w-6xl mx-auto px-5">
        <header className="flex flex-col items-center justify-center">
          <h1 className="font-medium text-[42px] text-[#1A1A1A]">Why Us</h1>
          <p className="max-w-3xl mt-3 text-center font-normal text-lg text-[#1A1A1A]/80">
            We specialize in delivering durable and innovative fencing solutions
            built to last. With a focus on quality and trust, we help secure
            spaces across industries and communities.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 
        lg:grid-cols-3 gap-8 justify-items-center w-full">
          {/* card 1 */}
          <div className="lg:mt-20 relative overflow-hidden lg:max-w-md 
          w-full border rounded-xl p-6 shadow-md text-left space-y-4">
            <div className="card-body z-10 relative">
              <div className="w-8 h-8">
                <Image src={flag} alt="Durability Icon" />
              </div>
              <div className="mt-6">
                <h2 className="text-[22px] sm:text-[26px] font-medium text-[#1A1A1A]">
                  Unmatched Durability with Corrosion-Free Technology
                </h2>
                <p className="mt-3 font-normal text-gray-600 text-[15px] sm:text-[17px] leading-relaxed">
                  Our JF-270 barbed wire features a robust 270 GSM zinc coating,
                  ensuring superior resistance against rust and corrosion. Paired
                  with stainless steel binding wire, our fencing solutions are
                  designed to withstand harsh environmental conditions, offering
                  longevity and reliability.
                </p>
              </div>
            </div>
            <div className="absolute -z-10 -top-130 -right-90  lg:-top-90 lg:-right-90">
              <Image src={light} alt="cardbg" />
            </div>
          </div>

          {/* card 2 */}
          <div className="lg:mb-20 relative lg:max-w-md w-full border bg-[#002B55] text-white rounded-xl p-6 shadow-md text-left space-y-4 overflow-hidden">
            {/* Background light image */}
            <div className="absolute -top-100 -right-100 z-0 ">
              <Image
                src={light}
                alt="card background light"
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Card content */}
            <div className="relative z-10 card-body">
              <div className="w-10 h-10 sm:w-12 sm:h-12">
                <Image
                  src={settings}
                  alt="Durability Icon"
                  className="object-cover"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-[22px] sm:text-[26px] font-medium">
                  Unmatched Durability with Corrosion-Free Technology
                </h2>
                <p className="mt-3 font-normal text-white/50 text-[15px] sm:text-[17px] leading-relaxed">
                  Our JF-270 barbed wire features a robust 270 GSM zinc coating,
                  ensuring superior resistance against rust and corrosion. Paired
                  with stainless steel binding wire, our fencing solutions are
                  designed to withstand harsh environmental conditions, offering
                  longevity and reliability.
                </p>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="lg:mt-20 relative overflow-hidden lg:max-w-md 
          w-full border rounded-xl p-6 shadow-md text-left space-y-4">
            <div className="card-body z-10 relative">
              <div className="w-8 h-8">
                <Image src={flag} alt="Durability Icon" />
              </div>
              <div className="mt-6">
                <h2 className="text-[22px] sm:text-[26px] font-medium text-[#1A1A1A]">
                  Unmatched Durability with Corrosion-Free Technology
                </h2>
                <p className="mt-3 font-normal text-gray-600 text-[15px] sm:text-[17px] leading-relaxed">
                  Our JF-270 barbed wire features a robust 270 GSM zinc coating,
                  ensuring superior resistance against rust and corrosion. Paired
                  with stainless steel binding wire, our fencing solutions are
                  designed to withstand harsh environmental conditions, offering
                  longevity and reliability.
                </p>
              </div>
            </div>
            <div className="absolute -z-10 -top-130 -right-90  lg:-top-90 lg:-right-90">
              <Image src={light} alt="cardbg" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
