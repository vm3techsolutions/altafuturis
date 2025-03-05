"use client"

const data = {
 
  problemStatement: [
    "USA-based client is developing technology solutions for Dentistry.",
    "New product development with AI (Artificial Intelligence) using 2D and 3D images of dental structures of patients as well as their voice textures was under consideration with R&D in terms of implementation of various algorithms."
  ],
  solution: [
    "Detection of anomalies in teeth (Panoramic images and bitewing images).",
    "Research on different Artificial Intelligence (AI) models and applications applied to finding the types of anomalies in the teeth. o Word2Vec 2.0 Deep learning model implementation for audio to text conversion.",
    "Applying STFT, DCT; calculating periodogram for calculating MFCC coefficients and forming the image out of it.",
    "Using MFCC images to train CNN from scratch for classification of sentiments of a person.",
    "Research on LSTM, FFT, DCT, Wavelet, Hasing method, Sequence to sequence autoencoder model, Hierarchical retrieval method based on Hash Table and dictionary for audio Fingerprinting, Glove Embedding and TF-IDF for NLP.",
    "Deep Canonical correlation Analysis for Multi model Sentiment analysis.",
    "Removed Protected Health Information (PHI) from medical data. o Exploration on Audio Fingerprinting to help with anomaly detection in teeth and sentiment analysis of the patients’ reviews."
  ],

  image: [
    "/assets/DentistrySolution.jpg"
  ],
  date: [
    "May 23, 2023"
],
Categories: [
    "Artificial Intelligence"
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

      <h1 className="text-4xl font-bold text-start">Dentistry: NLP (Natural Language Processing) and Deep Learning: New Product Development for clientDocuments Containing Images.</h1>
           
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

     
    </div>
  );
};

export default CloudSenseConsultancy;
