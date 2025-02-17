"use client";
import React from "react";
import Slider from "react-slick";

const ClientLogo = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const logos = [
    "/assets/cl1.png",
    "/assets/cl2.png",
    "/assets/cl3.png",
    "/assets/cl4.png",
    "/assets/cl5.png",
  ];

  return (
      <>
      <div className="bg-white py-20">
    <div className="border-2 border-gray-300 rounded-xl p-4 max-w-6xl mx-auto">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center p-2">
            <img
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="w-30 h-20 object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </>
  );
};

export default ClientLogo;
