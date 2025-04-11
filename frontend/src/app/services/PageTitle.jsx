"use client";

import Image from "next/image";

function PageTitle() {
  return (
    <>
        <div className="relative w-full mt-20 h-[30vh] sm:h-[34vh] md:mt-22 lg:mt-32 md:h-[44vh] lg:h-[40vh] xl:h-[55vh] 2xl:h-[65vh] bg-cover bg-center flex items-center overflow-hidden">
        <Image
            src="/assets/ServiceBanner2.png"
            alt="services_pageTitle"
            width={1400}
            height={500}
            className="w-full h-full object-cover object-center"
            loading="lazy"
        />
        </div>
    </>
  )
}

export default PageTitle;