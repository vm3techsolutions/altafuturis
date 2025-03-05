"use client"

const data = {
 
  problemStatement: [
    "In agriculture, the most common issue is to identify diseases and protect plants from the diseases.",
    "Traditionally, diseases were identified manually and based on experience.",
    "Plants were protected by using chemicals and fertilizers without analyzing quantity of chemicals, fertilizers or pesticides needed for crops.",
    "Use of excessive and disproportionate pesticides and fertilizers lead to adverse effects on human health.",
    "Plant diseases are not only a threat to food security at the global scale but can also have disastrous consequences for smallholder farmers whose livelihoods depend on healthy crops."
  ],
  solution: [
    "The training of the models was performed using an openly available database Plant Village, consisting of 54,306 images containing 38 classes",
    "Using the deep convolutional neural network architecture, we trained a model on images of plant leaves with the goal of classifying both crop species and the presence and identity presence of disease on images that the model had not seen before."
  ],
  benefits: [
    "80% accuracy in estimating crop diseases in tomato and potato. o Early indication of stress or disease in crops leads to cost savings related to spoiled crops and can save further damage through appropriate remedy for stress or disease."
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
      
      <h1 className="text-4xl font-bold text-start">POC: Agri-Tech: Plant Disease Identification</h1>
      
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
        <ul className="list-disc pl-5 text-gray-600 text-lg space-y-3">
          {data.solution.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold">Business Value</h2>
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
