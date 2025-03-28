"use client";

function PageTitle() {
  return (
    <>
      <div className="relative w-full md:mt-32 lg:mt-32 h-[30vh] md:h-[75vh] lg:h-[65vh] bg-cover bg-center flex items-center overflow-hidden">
        <img
          src="/assets/aboutBanner2.png"
          alt="About Page Title"
          className="w-full h-full object-auto object-center"
          loading="lazy"
        />
      </div>
    </>
  );
}

export default PageTitle;
