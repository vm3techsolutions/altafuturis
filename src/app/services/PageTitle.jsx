"use client";

function PageTitle() {
  return (
    <>
        <div className="relative w-full h-[30vh] md:h-[95vh] lg:h-[95vh] bg-cover bg-center flex items-center overflow-hidden">
        <img
            src="/assets/ServiceBanner.png"
            alt="services_pageTitle"
            className="w-full h-full object-cover object-center"
            loading="lazy"
        />
        </div>
    </>
  )
}

export default PageTitle;