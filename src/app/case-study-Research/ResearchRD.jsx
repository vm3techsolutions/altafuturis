"use client"

const recommendations = [
  {
    title: "Dentistry: NLP (Natural Language Processing) and Deep Learning: New Product Development for client",
    image: "/assets/Case study 5.png", // Replace with actual image URL
    link: "/case-study-Dentistry",
  },
  {
    title: "POC: Agri-Tech: Plant Disease Identification",
    image: "/assets/Case study 4.png", // Replace with actual image URL
    link: "/case-study-POC",
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
      <div className="w-3/5 px-6">
        
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
