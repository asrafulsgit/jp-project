
import Image from 'next/image';
import BannerStar from '../assets/banner-star.png'
import BannerVehicle from '../assets/banner-vehicle.png'
import BannerSmile from '../assets/banner-smile.png'
import BannerLight from '../assets/banner-light.png'

export default function StatsBanner (){
    const stats = [
        {
            icon : BannerStar,
            title : 'Premium',
            name : 'Products'
        },
        {
            icon : BannerSmile,
            title : '4000+',
            name : 'Google Review'
        },
        {
            icon : BannerVehicle,
            title : 'Delivery',
            name : 'Across India'
        },
    ]
  return (
    <section className="pt-12">
        <div className='max-w-6xl mx-auto px-5'>
           
            <div className='relative overflow-hidden bg-[#002B55] flex flex-col justify-center 
      items-center rounded-[24px]  w-full py-20'>
                <h1 className='text-center  text-white font-medium
        text-3xl md:text-4xl lg:text-[42px] px-5'>Trusted by over 6K+ customers</h1>
                <div className='z-20 space-y-5 sm:space-y-0 sm:flex flex-wrap justify-center gap-8 mt-12
          sm:gap-10 px-5'>
                    {stats.map((item,index)=>(
                    <div key={index} className='flex gap-3 md:gap-4   items-center text-left'>
                    <div className='bg-white rounded-full p-3 md:p-4'>
                        <Image 
                            src={item.icon}
                            alt='stats'
                        />
                    </div>
                    <div>
                        <h2 className='text-[22px] md:text-[28px] font-medium text-white'> {item.title}</h2>
                        <p className='text-[18px] md:text-[22px] font-normal text-[#FFFFFF]/80'>{item.name}</p>
                    </div>
                </div>
                ))}
                </div>
                <div className='banner-bg z-10 absolute -bottom-60 sm:-bottom-80 md:-top-10'>
                    <Image 
                            src={BannerLight}
                            alt='banner bg'
                        />
                </div>
            </div>
        </div>
    </section>
  );
};
    // <div
    //   className="relative overflow-hidden bg-[#002B55] flex flex-col justify-center 
    //   items-center rounded-[24px] w-full "
    // >
    //   <h1 className="text-center  text-white font-medium
    //     sm:text-3xl md:text-4xl lg:text-[42px] px-4"
    //   >
    //     Trusted by over 6K+ customers
    //   </h1>

    //   <div
    //     className="z-20 flex flex-wrap justify-center gap-8 mt-12
    //       sm:gap-10 md:gap-16"
    //   >
    //     {stats.map((item, index) => (
    //       <div
    //         key={index}
    //         className="flex gap-4 items-center min-w-[180px] sm:min-w-[220px]"
    //       >
    //         <div className="bg-white rounded-full p-4">
    //           <Image src={item.icon} alt="stats" />
    //         </div>
    //         <div>
    //           <h2 className="text-[28px] font-medium text-white sm:text-xl md:text-2xl">
    //             {item.title}
    //           </h2>
    //           <p className="text-[22px] font-normal text-white/80 sm:text-base md:text-lg">
    //             {item.name}
    //           </p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   <div className="banner-bg z-10 absolute -top-10">
    //     <Image src={BannerLight} alt="banner bg" />
    //   </div>
    // </div>
 
