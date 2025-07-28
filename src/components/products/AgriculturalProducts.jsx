'use client';
import Image from "next/image";
import { useState, useEffect } from 'react';

import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'

export default function AgriculturalProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [windowWidth, setWindowWidth] = useState(0);

  const products = [
    {
      image : 'https://i.ibb.co/DdvMPjX/image-7.png',
      name: "JF Barbed Wire- 270 GSM",
      price: "₹4,995.00"
    },
    {
        image : 'https://i.ibb.co/xKKSVKsR/image-8.png',
      name: "FGC RustFree Fencing Poles",
      price: "₹499.00 – ₹1,589.00"
    },
    {
        image : 'https://i.ibb.co/v6wXg4Jd/image-9.png',
      name: "GI Poultry Mesh",
      price: "₹1,260.00 – ₹10,750.00"
    },
    {image : 'https://i.ibb.co/YTbDS1rH/image-10.png',
      name: "JF Bluelink Mesh",
      price: "₹3,067.50 – ₹6,362.50"
    },
    {
        image : 'https://i.ibb.co/v6wXg4Jd/image-9.png',
      name: "GI Poultry Mesh",
      price: "₹1,260.00 – ₹10,750.00"
    },
    {
      image : 'https://i.ibb.co/DdvMPjX/image-7.png',
      name: "JF Barbed Wire- 270 GSM",
      price: "₹4,995.00"
    },
    {
        image : 'https://i.ibb.co/xKKSVKsR/image-8.png',
      name: "FGC RustFree Fencing Poles",
      price: "₹499.00 – ₹1,589.00"
    },
  ];

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } 
      else if (window.innerWidth < 768) {
        setVisibleCards(2);
      }else if (window.innerWidth < 1024) {
        setVisibleCards(3);
      }else {
        setVisibleCards(4);
      }
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev => {
      return prev >= products.length - visibleCards ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prev => {
      return prev <= 0 ? products.length - visibleCards : prev - 1;
    });
  };




  return (
    <section className="pt-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-medium
         text-gray-800 mb-5">
          Agricultural Products
        </h2>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2
             z-10  cursor-pointer rounded-full"
            aria-label="Previous slide"
          >
             <Image  
                                        src={leftArrow}
                                        alt="product"
                                        // width={230}
                                        // height={230}
                                        className="object-contain "
                                      />
          </button>
          
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex space-x-2 md:space-x-0 transition-transform 
              duration-500 ease-in-out "

              style={{ 
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
              }}
            >
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="py-2 flex justify-center  flex-shrink-0  "
                  style={{ width: `${100 / visibleCards}%` }}
                >
                    <div className="w-[325px]  md:w-[220px] lg:w-[200px] xl:w-[250px] p-2 rounded-xl bg-[#F2F4F6]  h-full flex flex-col">
                        <div className="flex justify-around items-center">
                            <Image  
                                        src={product.image}
                                        alt="product"
                                        width={230}
                                        height={230}
                                        className="object-contain w-[300px] h-[235px]   md:w-[200px] md:h-[160px]   lg:w-[180px] lg:h-[140px] xl:w-[230px] xl:h-[180px]  "
                                      />
                        </div>
                    <div className="p-3 flex flex-col flex-grow">
                       
                        <h3 className="font-semibold ">{product.name}</h3>
                       
                        <p className="text-sm mb-2 font-medium text-[#1A1A1A]/80 ">{product.price}</p>
                         
                        <button className="mt-auto mr-auto bg-[#B0DD1D] rounded-[100px] font-medium text-sm px-3 py-1">Shop Now</button>       
                    </div>
                    </div>
                  
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10  
             rounded-full cursor-pointer"
            aria-label="Next slide"
          >
            <Image  
                                        src={rightArrow}
                                        alt="product"
                                        // width={230}
                                        // height={230}
                                        className="object-contain  "
                                      />
          </button>
        </div>
        
        
      </div>
    </section>
  );
}