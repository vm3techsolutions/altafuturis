export default function CompanyIntro() {
    return (
<<<<<<< HEAD
      <section className="min-h-screen flex items-center justify-center p-6">
=======
      <section className="container min-h-screen flex items-center justify-center py-16">
>>>>>>> 6551004657f69fd15381c68375194d298d0522a9
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full space-y-8 md:space-y-0">
          {/* Left Side - Button */}
          <div className="flex-shrink-0 md:mr-12">
            <button className="md:ml-44 md:mb-44 px-6 py-3 border-2 border-brownColor rounded-full text-black bg-white shadow-sm hover:bg-yellow-100 transition-all duration-300 ease-in-out font-bold">
              Who we are
            </button>
          </div>
  
          {/* Right Side - Content */}
          <div className="max-w-3xl text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
              Unveiling the essence <br className="hidden md:block" /> of our company
            </h1>
            <p className="py-4 text-gray-600 text-lg mb-6 leading-relaxed">
              We aspire to become global leaders in helping businesses adopt
              futuristic technologies and automate their workplaces. We understand
              the client’s business end-to-end and identify the sectors and
              processes that can be automated. With our endless innovative mindset,
              we believe in becoming an essential part of the client’s team and
              constantly look for connecting the dots with data.
            </p>
  
            <a href="/" className="">
              <button className="px-4 py-2  bg-[#0D6EFD] text-white rounded-2xl shadow-md hover:bg-blue-700 flex items-center transition-all duration-300 ease-in-out">
                Know More
                <span className="ml-2 bg-brownColor text-white px-2 py-1 rounded-md">
                  &gt;&gt;
                </span>
              </button>
            </a>
          </div>
        </div>
      </section>
    );
  }
  