export default function CompanyIntro() {
    return (

      <section className="min-h-screen flex items-center justify-center ">
      <section className="container min-h-screen flex items-center justify-center md:mt-0 -mt-52">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full space-y-8 md:space-y-0">
          {/* Left Side - Button */}
          <div className="max-w-4xl flex-shrink-0 md:mr-12">
            <button className=" md:mb-64 px-5 py-3 border-2 border-brownColor rounded-full text-black  shadow-sm  transition-all duration-300 ease-in-out font-bold">
              Who we are
            </button>
          </div>
  
          {/* Right Side - Content */}
          <div className="max-w-4xl text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Ensuring the enterprise business transformation aligned with <br className="hidden md:block" /> Generative AI agents across streams 
            </h1>
            <p className="py-4 text-gray-900 text-md mb-4 leading-relaxed">
              We aspire to become global leaders in helping businesses adopt
              futuristic technologies and automate their workplaces. We understand
              the client’s business end-to-end and identify the sectors and
              processes that can be automated. With our endless innovative mindset,
              we believe in becoming an essential part of the client’s team and
              constantly look for connecting the dots with data.
            </p>
  
            <a href="/" className="flex justify-center  md:mr-16">
              <button className="px-4 py-2 bg-blueColor text-white  rounded-xl shadow-md hover:bg-brownColor flex items-center transition-all duration-300 ease-in-out group">
                Know More
                <span className="ml-2 bg-brownColor group-hover:bg-blueColor text-white px-1 rounded-md duration-300">
                  &gt;&gt;
                </span>
              </button>
            </a>
          </div>
        </div>
      </section>
      </section>
    );
  }
  