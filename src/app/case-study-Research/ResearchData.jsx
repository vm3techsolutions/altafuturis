"use client"

const data = {
 
  problemStatement: [
    "USA based client with India captive center has proprietary OCR based AI platform where they receive large number of transactional documents from various clients from different sources, like invoices, insurance papers, etc. The document files are in pdf and tiff formats and many times they are in large numbers.",
    "Client defined this research project to have AI algorithms to convert all such ‘Devnagari’ script-based documents in single format and later extract all images in optimized way to be used for further processing in OCR platform."
  ],
  solution: [
    "An autoencoder is first trained using the pre-processed dataset with input and output as the images from the dataset",
    "The autoencoder is designed for training with convolutional and max-pooling layers in the decoder and convolutional and up-sampling layers in the decoder",
    "The last feature layer of the encoder from the trained autoencoder is stored in some tensor variable.",
    "The last feature layer of the encoder is then used for training the K- means classifier with K being chosen manually."
  ],

  image: [
    "/public/assets/ResearchSolution.jpg"
  ],

  p: [
    "Salesforce Development for Leading K-12 School Chain in USA"
  ]
};

const CloudSenseConsultancy = () => {
  return (
    <div className=" mx-auto py-16 px-16 space-y-9 text-gray-800">
      <h1 className="text-4xl font-bold text-start">Research on Clustering of Devnagari Script Based Documents Containing Images.</h1>
      
      <section className="space-y-5">
       
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
        <img className="w-full h-68 object-cover  rounded-lg" src={data.image}  />
        <ul className="list-disc pl-5 text-gray-600 text-lg space-y-3">
          {data.solution.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <p className="text-lg ">{data.p}</p>
       
      </section>
    </div>
  );
};

export default CloudSenseConsultancy;
