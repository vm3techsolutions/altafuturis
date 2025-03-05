"use client"

const data = {
  client: "The end client is a large media house based in USA and has outsourced their IT work to one of the large software services companies from India. We are working with India based software services company to help end client for CloudSense implementation.",
  problemStatement: [
    "The end Client has implemented CloudSense CPQ & Order Management platform, built on Salesforce. CloudSense is a Salesforce ISV Platinum Partner, and it enables Commerce Cloud users to publish subscription-based services to the product catalog, including bundles, promotions and offers.",
    "The end client as well as their outsourcing partner realized that there is significant impact of ‘Salesforce Changes Spring and Summer 2023’ on the existing CloudSense solution. The outsourcing partner needed consultancy to resolve these dependencies in line with Salesforce Changes."
  ],
  solution: [
    "Salesforce announced ‘Salesforce Changes Spring and Summer 2023’ as per their release cycle and end client needs to adopt those major changes into customized CloudSense platform.",
    "In this release, Salesforce is adopting the ICU Locale Standard, which will be enforced for all the metadata of platform API version 45.0 and above, including all Salesforce standard representations of affected data and this became a critical work for client to make relevant changes in the impacted orgs without any impact on user experience.",
    "Our Senior Salesforce Technical Architect worked with teams of outsourcing partner, CloudSense and the end client to ensure all changes under Spring and Summer 2023 smoothly without any impact on end user experience of customers of end client."
  ],
  benefits: [
    "100% visibility with impact analysis into implementation of ‘Salesforce Changes Spring and Summer 2023’ for end client.",
    "High Customer satisfaction for end client as there is no impact for customers of end client while the critical Salesforce Changes implement on CloudSense."
  ],
  date: [
    "May 23, 2023"
],
Categories: [
    "Salesforce "
]
};

const CloudSenseConsultancy = () => {
  return (
    <div className=" mx-auto py-16 px-16 space-y-9 text-gray-800">
 <h2 className="text-md mb-2  flex items-center">
        <span className="mr-2 ">📅</span>
        {data.date.map((date, index) => (
          <span key={index} className="mr-4">
            {date}
          </span>
        ))}
        <span className="font-semibold ml-10">📂</span>
        {data.Categories.map((category, index) => (
          <span key={index} className="ml-2">
            {category}
          </span>
        ))}
      </h2>

      <h1 className="text-4xl font-bold text-start">CloudSense Implementation Consultancy for Leading Media House in USA</h1>
      
      <section className="space-y-5">
        <h2 className="text-xl font-semibold">Client</h2>
        <p className="text-gray-600 text-lg">{data.client}</p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold">Problem Statement</h2>
        <ul className="list-disc pl-5 text-gray-600 text-lg space-y-3">
          {data.problemStatement.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold">Solution</h2>
        <ul className="list-disc pl-5 text-gray-600 text-lg space-y-3">
          {data.solution.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold">Benefits</h2>
        <ul className="list-disc pl-5 text-gray-600 text-lg space-y-3">
          {data.benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CloudSenseConsultancy;
