"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const CompanyLogos = () => {
  const logos = [
    "/assets/HomeBanner.png",
    "/assets/HomeBanner.png",
    "/assets/HomeBanner.png",
    "/assets/HomeBanner.png",
    "/assets/HomeBanner.png",
    "/assets/HomeBanner.png",
    "/assets/HomeBanner.png",
    "/assets/HomeBanner.png",
  ];

  return (
    <div className="py-16 px-9">
      <Swiper
        slidesPerView={5} // Show 5 images at a time
        spaceBetween={20} // Space between images
        loop={true} // Infinite loop
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Slide every 2s
        modules={[Autoplay]}
        className="w-full border-2 border-[#6328A6] rounded-md"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex p-5 ml-1 justify-center">
            <img src={logo} alt={`Company ${index + 1}`} className="h-16" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CompanyLogos;
