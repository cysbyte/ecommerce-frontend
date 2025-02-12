"use client";

import React, { useRef } from "react";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const MyCarousel = () => {
  const carouselRef = useRef<CarouselRef>(null);
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="relative w-[1280px] mx-auto rounded-xl overflow-hidden mt-2">
      <Carousel className="mx-auto" ref={carouselRef} infinite={true}>
        <div className="h-auto">
          <Image src={"/iphone/1.png"} alt="iphone" width={1280} height={250} />
        </div>
        <div className="h-auto">
          <Image src={"/iphone/2.png"} alt="iphone" width={1280} height={250} />
        </div>

      </Carousel>
      <button className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full" onClick={handlePrev}>
        <FaChevronLeft size={20} />
      </button>

      <button className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full" onClick={handleNext}>
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default MyCarousel;
