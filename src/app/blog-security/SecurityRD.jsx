"use client"

const recommendations = [
  {
    title: "Workflow Automation in Salesforce – Excellent Value for Businesses",
    image: "/assets/BloginnerBanner.png", // Replace with actual image URL
    link: "/blogInner",
  },
  {
    title: "Six applications that Deep Learning is transforming rapidly in business world",
    image: "/assets/BlogInnerImg2.png", // Replace with actual image URL
    link: "/blog-six-application",
  },
];

const RecommendedSection = () => {
  return (
    <div className="flex w-full p-6 py-16 bg-white">
      {/* Left side - 60% */}
      <div className="w-3/5 flex items-start space-x-20">
      <button className="px-6 py-2 border ml-10 border-brownColor rounded-2xl text-black shadow-sm transition-all duration-300 ease-in-out font-bold">
   Read More
    </button>

    <h2 className="text-3xl font-bold mb-4">You May Like</h2>
      </div>

      {/* Right side - 40% */}
      <div className="md:w-3/5 px-6 -ml-60 mt-32 md:-ml-0 md:mt-0">
        
        <div className="space-y-8">
          {recommendations.map((item, index) => (
            <div key={index} className="flex items-center space-x-6">
              <img src={item.image} alt={item.title} className="w-48 h-32 rounded-xl border border-yellow-500" />
              <div>
                <p className="text-lg font-bold text-gray-900">{item.title}</p>
                
                <a href={item.link} className="text-[#6328A6]  inline-block">READ MORE <span className='text-3xl p-1'>&raquo;</span></a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedSection;
