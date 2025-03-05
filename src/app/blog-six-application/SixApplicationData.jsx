"use client"

const data = {
 
  problemStatement: [
    "Deep learning opens a new level of capabilities within the artificial intelligence realm, but its use has been limited to data scientists. Nowadays, finally, it may be ripe for “democratization,” meaning it is poised to become an accessible set of technologies available to all who need it — with numerous business applications.Deep learning, which attempts to mimic the logic of the human brain for analyzing patterns, is starting to see widespread adoption within enterprise AI initiatives. A majority of companies with AI implementations, 53%, plans to incorporate deep learning into their workplaces within the next 24 months, a recent survey of 154 IT and business professionals conducted and published by ITPro Today, InformationWeek and Interop finds.",
    "Deep learning is now driving rapid innovations in AI and influencing massive disruptions across all markets, a new report published by Databricks asserts. “Deep learning models can be trained to perform complicated tasks such as image or speech recognition and determine meaning from these inputs,” the paper’s authors state. “A key advantage is that these models scale well with data and their performance will also improve as the size of your dataincreases.”",
    "The Databricks report defines deep learning as “a specialized and advanced form of machine learning that performs what is considered end-to-end learning. A deep learning algorithm is mainly given massive volumes of data, typically unstructured and disparate, and a task to perform such as classification. The resulting model is then capable of solving complex tasks such as recognizing objects within an image and translating speech in real time.”"
  ],
  l1: [
    " “The process of identifying and detecting an object or a feature in a digital image or video,” the report states. In retail, deep learning models “quickly scan and analyze in-store imagery to intuitively determine inventory movement.”"
  ],
  l2: [
    " “This can be the right ability to receive and interpret dictation or just to understand and carry out spoken commands. Models are also able to convert captured voice commands to text and then also use natural language processing to understand what is being said and in what context.”"
  ],
  l3: [
    " “Deep learning technique tries to strive to recognize abnormal patterns which actually don’t match the behaviors expected for a particular system, out of millions of different transactions. These applications can lead to the discovery of an attack on financial networks, fraud detection in insurance filings or credit card purchases, even isolating sensor data in industrial facilities signifying a safety issue.”"
  ],
  l4: [
    "Always “analyze user actions in order to mainly provide recommendations just based on user behavior.”"
  ],
  l5: [
    "  It is seen that “leverages deep learning-heavy techniques also such as natural language processing, text analysis, and computational linguistics to gain clear insight into customer opinion, understanding of consumer sentiment, and measuring the impact of marketing strategies.”"
  ],
  l6: [
    " Can such as “process and evaluate vast streams of video footage also for a range of tasks that just including threat detection, which can be used in airport security, banks, and sporting events.”"
  ],
  benefits: [
    "AltaFuturis follows approach to come up with innovative solution that includes data engineering, understanding key business processes and workflows and designing Machine learning solution with optimizing decision points providing value to businesses.",
    "For any queries regarding our latest work in deep learning, generative AI, geo-spatial AI, please contact sales@altafuturis.com"
  ],
  date: [
    "May 23, 2023"
],
Categories: [
    "Salesforce"
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
      
      <h1 className="text-4xl font-bold text-start">Six applications that Deep Learning is transforming rapidly in business world</h1>
      
      <section className="space-y-5">
       
       
      </section>

      <section className="space-y-5">
        
        <ul className="list-none pl-5 text-gray-600 text-lg space-y-3">
          {data.problemStatement.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold">The following are applications that are also enabled through deep learning:</h2>
        <ul className="list-disc pl-5 text-gray-600 text-lg space-y-3">
          {data.l1.map((item, index) => (
            <li key={index}><span className="text-xl font-semibold">Image classification: </span>{item}</li>
          ))}
        </ul>

        <ul className="list-disc pl-5 text-gray-600 text-lg space-y-3">
          {data.l2.map((item, index) => (
            <li key={index}><span className="text-xl font-semibold">Voice recognition: </span>{item}</li>
          ))}
        </ul>

        <ul className="list-disc pl-5 text-gray-600 text-lg space-y-3">
          {data.l3.map((item, index) => (
            <li key={index}><span className="text-xl font-semibold">Anomaly detection: </span>{item}</li>
          ))}
        </ul>

        <ul className="list-disc pl-5 text-gray-600 text-lg space-y-3">
          {data.l4.map((item, index) => (
            <li key={index}><span className="text-xl font-semibold">Recommendation engines: </span>{item}</li>
          ))}
        </ul>

        <ul className="list-disc pl-5 text-gray-600 text-lg space-y-3">
          {data.l5.map((item, index) => (
            <li key={index}><span className="text-xl font-semibold">Sentiment analysis: </span>{item}</li>
          ))}
        </ul>

        <ul className="list-disc pl-5 text-gray-600 text-lg space-y-3">
          {data.l6.map((item, index) => (
            <li key={index}><span className="text-xl font-semibold">Video analysis: </span>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <ul className="list-none pl-5 text-gray-600 text-lg space-y-3">
          {data.benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CloudSenseConsultancy;
