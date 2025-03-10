"use client"



const AiAppDev = () => {
 

  return (
    <>
      <div className="relative py-3 px-2">
        {/* Heading */}
        <div className="heading">
          <h2 className="text-4xl font-bold">
          Salesforce Consulting Services

          </h2>
          <h4 className="text-xl font-semibold my-4">
          Empower Your Business with Expert Salesforce Consulting Services

          </h4>
        <button className="px-4 py-2 bg-blueColor text-white  rounded-xl shadow-md hover:bg-brownColor flex items-center transition-all duration-300 ease-in-out group">
          Talk to an Expert
          <span className="ml-2 bg-brownColor group-hover:bg-blueColor text-white px-1 rounded-md duration-300">
            &gt;&gt;
          </span>
        </button>
      
        </div>

        {/* Intriduction */}
        <div className="content my-6">
          <h3 className="text-2xl font-bold">Introduction :</h3>
          <p>
          As a registered Salesforce Consulting Partner, Alta-Futuris Solutions specializes in helping businesses maximize the potential of Salesforce CRM. Whether it's boosting productivity, integrating platforms, or improving performance, our certified Salesforce experts deliver end-to-end services with guaranteed customer satisfaction.

          </p>
          
        </div>

        {/* Challenges Section */}
        <div className="content my-6">
          <h3 className="text-2xl font-bold">Challenges & Solutions :</h3>
          <p> Common Challenges with Salesforce : </p>
          
          <ul className="my-2 list-disc pl-6">
          <li>
            <span className="font-bold">Inefficient Customization: </span> Out-of-the-box Salesforce may not fully meet business needs.

            </li>   
            <li>
            <span className="font-bold">Complex Integration: </span> Integrating Salesforce with existing systems can be challenging.
            </li>           
            <li>
            <span className="font-bold">Data Management Issues: </span>  Managing and migrating data without disrupting operations is often complex.
                </li>
              </ul>

          <h3 className="text-2xl font-bold mt-5">Our Solution:  </h3>

          <p> We offer tailored Salesforce development, integration, and migration solutions ensuring smooth business operations and higher ROI.

          </p>
        </div>

        {/* Service Include */}
        <div className="serviceInclude my-6">
          <h3 className="text-2xl font-bold">Our Services Include:</h3>
          
          <ol className="my-2 list-decimal pl-6">
            <li>
            <span className="font-bold">Salesforce Development: </span> Customize and implement Salesforce solutions across Sales, Service, and Marketing Clouds.

            </li>
            <li>
            <span className="font-bold">Salesforce Integration & Migration: </span> Seamlessly integrate Salesforce with other platforms and ensure smooth data migration.

            </li>
            <li>
            <span className="font-bold">Einstein AI & Tableau CRM:   </span> Unlock advanced insights and analytics with Salesforce Einstein AI and Tableau CRM.

            </li>
                       
          </ol>
        </div>

        {/* Benefits */}
        <div className="benefits my-6">
          <h3 className="text-2xl font-bold">Benefits of Choosing Us:</h3>
         
          <ul className="my-2 list-disc pl-6">
            <li>
            <span className="font-bold">Improved Efficiency: </span>Streamline business processes with customized Salesforce solutions.
            </li>
            <li>
            <span className="font-bold">Enhanced Customer Experience:  </span> Strengthen customer relationships through data-driven insights.
            
            </li>
            <li>
            <span className="font-bold">Future-Ready Solutions:</span> Scalable Salesforce solutions to meet evolving business needs.
            </li>           
          </ul>
         </div>



          {/* Call-to-Action */}
        <div className="benefits my-6">
          <h3 className="text-xl font-bold">Maximize your business potential with expert Salesforce consulting.
          </h3>
          <p>Connect with our team for customized solutions tailored to your business goals.
          </p>
         
          <button className="mt-8 mb-4 px-4 py-2 bg-blueColor text-white  rounded-xl shadow-md hover:bg-brownColor flex items-center transition-all duration-300 ease-in-out group">
          Talk to an Expert
          <span className="ml-2 bg-brownColor group-hover:bg-blueColor text-white px-1 rounded-md duration-300">
            &gt;&gt;
          </span>
        </button>

        <p>For detailed information, visit: <a href="https://altafuturis.com/services/salesforce-development-support-and-maintenance/" className="text-blue-600">Salesforce Development, Support and Maintenance</a>
        </p>
         </div>    



         
        
      </div>
    </>
  );
};

export default AiAppDev;
