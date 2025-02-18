"use client"

export default function DiscussRequirement() {
  return (
    <div className='py-16 px-4'>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <h1 className='font-bold text-2xl sm:text-3xl text-center sm:text-left'>
          Let's discuss your requirements
        </h1>
        <a href="/" className="flex justify-start">
          <button className="px-4 py-2 bg-brownColor text-white rounded-xl shadow-md hover:bg-brownColor flex items-center transition-all duration-300 ease-in-out group">
            Connect With Us
            <span className="ml-2 bg-purpleColor group-hover:bg-blueColor text-white px-1 rounded-md duration-300">
              &gt;&gt;
            </span>
          </button>
        </a>
      </div>
    </div>
  )
}
