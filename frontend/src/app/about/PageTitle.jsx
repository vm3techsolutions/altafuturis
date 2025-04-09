"use client";

import Image from "next/image";

function PageTitle() {
  return (
    <>
      <div className="relative w-full mt-20 h-[50vh] md:mt-32 lg:mt-32 md:h-[75vh] lg:h-[65vh] bg-cover bg-center flex items-center overflow-hidden">
        <Image
          src="/assets/aboutBanner2.png"
          alt="About Page Title"
          width={1400}
          height={500}
          className="w-full h-full object-auto object-center"
          loading="lazy"
        />
      </div>
    </>
  );
}

export default PageTitle;
