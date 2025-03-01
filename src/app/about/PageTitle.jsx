import Image from "next/image";

function PageTitle() {
  return (
    <>
        <div className="relative w-full h-[30vh] md:h-[70vh] lg:h-[85vh] bg-cover bg-center flex items-center overflow-hidden">
        <Image
            src="/assets/aboutTitle.jpg"
            alt="about_pageTitle"
            layout="fill"
            className='object-cover object-center'
            priority
        />
        </div>
    </>
  )
}

export default PageTitle;