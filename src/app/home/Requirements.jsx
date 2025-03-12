import React from "react";

const QuoteSection = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between bg-[#6328A6] text-white p-10 lg:p-20 gap-10">
      {/* Left Section */}
      <div className="lg:w-1/2 md:w-1/2 w-full text-center lg:text-left">
        
      <div className="md:w-full w-full flex justify-center  md:justify-start mb-16 md:mb-0 ">
          <button className="px-5 py-3 text-xl border-2 border-brownColor rounded-full text-white bg-[#6328A6] shadow-sm transition-all duration-300 ease-in-out font-bold">
          Let's discuss your requirements
          </button>
        </div>

        <h2 className="text-3xl lg:text-5xl md:text-left font-bold leading-tight mb-4 mt-5 ">
          Data and Workflow Solutions for your Digital Success!
        </h2>
        <p className="text-sm lg:text-base md:text-left mb-6">
          Alta-Futuris follows an approach to come up with innovative solutions in AI, Data Engineering, and Salesforce that includes data research and analysis. Engineering with an understanding of key business processes and workflows and designing solutions with optimized decision points providing value to businesses.
        </p>
        <a href="/" className="flex justify-center lg:justify-start md:justify-start mt-6 mr-11 md:mr-16">
            <button className="px-4 py-2 bg-brownColor text-white rounded-xl shadow-md hover:bg-blueColor flex items-center transition-all duration-300 ease-in-out group">
              Know More
              <span className="ml-2 bg-blueColor   group-hover:bg-brownColor text-white px-1 rounded-md duration-300">
                &gt;&gt;
              </span>
            </button>
          </a>
      </div>

      {/* Right Section - Form */}
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-[60vw] lg:w-1/3 md:w-1/2 ">
        <h3 className="text-3xl  text-start font-bold mb-4 text-gray-800">
          Get Your Quote <br/><span className="text-purple-600">Today!</span>
        </h3>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name*" className="p-3 border rounded-lg w-full" required />
          <input type="text" placeholder="Mobile*" className="p-3 border rounded-lg w-full" required />
          <input type="email" placeholder="Email*" className="p-3 border rounded-lg w-full" required />
          <textarea placeholder="Requirement*" className="p-3 border rounded-lg w-full h-24" required></textarea>
          <button className="bg-[#6328A6]  text-white py-3 rounded-lg hover:bg-purple-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteSection;
