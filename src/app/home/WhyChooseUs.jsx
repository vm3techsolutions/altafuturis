

export default function WhyChooseUs() {
  return (
    <section className="py-6 px-6 md:px-12 lg:px-24 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section (Image + Button) */}
        <div className="relative flex flex-col items-center">
            
        <div className="flex-shrink-0 md:mr-12">
            <button className=" px-4 py-2 mb-7 border-2 border-brownColor rounded-full text-black bg-white shadow-sm hover:bg-yellow-100 transition-all duration-300 ease-in-out font-bold">
            Why choose us?
            </button>
          </div>

          <img
            src="/assets/WhyChooseUs.png" // Replace with actual image path
            
            alt="Team Meeting"
            className="rounded-lg shadow-lg w-[80vh] h-[100vh] object-cover"
          />

          <a href="/" className="mt-5">
              <button className="px-4 py-2  bg-[#0D6EFD] text-white rounded-2xl shadow-md hover:bg-blue-700 flex items-center transition-all duration-300 ease-in-out">
                Know More
                <span className="ml-2 bg-brownColor text-white px-2 py-1 rounded-md">
                  &gt;&gt;
                </span>
              </button>
            </a>
        </div>

        {/* Right Section (Text + List) */}
        <div className="mb- space-y-">
        <div>
          <h2 className="text-start text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Accelerate business growth in emerging technologies
          </h2>
          </div>

          <div className="mt- space-y-10 p-10">
            {[
              { id: "01", text: "Partnering with client" },
              { id: "02", text: "Research Driven" },
              { id: "03", text: "Highly focused on delivering outcome on daily basis" },
              { id: "04", text: "Providing highest quality output and high level of business satisfaction." },
            ].map((item, index) => (
              <div key={index} className="grid items-start gap-4">
                <span className="w-10    text-lg font-bold text-[#6328A6] px-2 py-1 rounded-lg border border-brownColor">
                  {item.id}
                </span>
                <p className="text-gray-800 text-xl font-bold">{item.text}</p>
                <hr class=" border-[#D4B301] border"/>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
