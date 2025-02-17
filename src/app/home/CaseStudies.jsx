'use client';

import Image from 'next/image';

const PortfolioSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center">
      {/* Left Section */}
      <div className="md:w-1/3 flex flex-col items-center md:items-start p-4 h-full">


        {/* <div className="w-44 h-44 bg-purple-300 rounded-full flex items-center justify-center shadow-lg">
          
          <span className="text-white font-bold text-lg">3D</span>
        </div> */}
        
      </div>

      
      
      {/* Right Section */}
      <div className="md:w-2/3 space-y-6 p-20">
               
        {/* Portfolio Items */}
        <div className="space-y-4">
          <div className="border-b pb-4">
            <Image src="/assets/Portfolio1.png" width={600} height={150} alt="CloudSense" className="rounded-lg" />
            <h3 className="font-semibold grid ">CloudSense Implementation Consultancy for Leading Media House in USA</h3>
            <a href="#" className="text-blue-600 text-sm font-semibold">READ MORE &gt;&gt;</a>
          </div>
          <hr class=" border-[#D4B301] border"/>
         
          <section className="flex items-center justify-center   ">
      <div className="max-w-5xl flex flex-col md:flex-row items-center w-full gap-5">           
        <Image src="/assets/Portfolio2.png" width={300} height={150} alt="Salesforce Development" className="rounded-lg" />       
        <h3 className="font-bold text-2xl mb-16">Salesforce Development for Leading K-12 School Chain in USA</h3>
      </div>      
      {/* <a href="#" className="text-blue-600 text-sm font-semibold">READ MORE &gt;&gt;</a> */}      
    </section>
    <hr class=" border-[#D4B301] border -mt-5"/>
    


    <section className="flex items-center justify-center  ">
      <div className="max-w-5xl flex flex-col md:flex-row items-center w-full gap-5">
        <Image src="/assets/Portfolio3.png" width={370} height={150} alt="Salesforce Development" className="rounded-lg" />
        <h3 className="font-bold text-2xl mb-16">Research on Clustering of Devanagari Script Based Documents Containing Img</h3>
        {/* <a href="#" className="text-blue-600 text-sm font-semibold">READ MORE &gt;&gt;</a> */}
      </div>
    </section>
 

        
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
