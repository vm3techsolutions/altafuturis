"use client";

const data = {
  client:
    "With the advent of APIs that mainly offer state-of-the-art services a click away, setting up a machine learning shop has become more accessible. But with rapid democratization, there is a risk of non-ML players who have jumped the gun, finding themselves in a flurry of privacy attacks, never been heard of before.In a first of its kind survey carried out on ML privacy by a team from Czech Technical University, the researchers address the different ways an ML application can be vulnerable. In privacy-related attacks, wrote the researchers, an adversary’s goal is related to gaining knowledge, not intended to be shared, such as knowledge about the training data or information about the model, or even extracting information about properties of the data.",
  client2:
    "We list down a few of the commonly encountered privacy concerns below:",
  p1: [
    "Black-box mainly attacks are those attacks where the adversary does not know the model parameters, architecture or training data. Today, personal data is continuously leveraged by internet companies to train their machine learning models that power machine learning-based applications. It is expected that these models should not reveal information about the data used for their training. However, the attackers can still use the information that the model has learned unintentionally.",
  ],
  p2: ["In the case of white-box, the adversary has either complete access to the target model parameters or their loss gradients during training. This is commonly seen in most distributed modes of training."],
  p3: ["According to the survey, this is the most popular category of attacks. A type of black-box attack, it is also carried out against supervised machine learning models. Membership inference tries to check whether an input sample was used as part of the training set. With improved access to model parameters and gradients, the accuracy of white-box membership inference attacks always improves."],
  p4: ["These attacks try to recreate one or more training samples and/or their respective training labels. One such well-documented attack is Adversarial Reprogramming, where a model is repurposed to perform a new task. An adversarial program can be thought of as an additive contribution to network input. An additive offset to a neural network’s input is equivalent to a modification of its first layer biases. In the case of a CNN, new parameters are effectively introduced."],
  p5: ["Property inference is the ability to extract dataset properties that were not explicitly encoded as features or were not correlated to the learning task. One such example can be the extraction of information about the ratio of women and men in a patient dataset where the info is unlabeled. The extracted information is usually not related to the training task and is learned from the model unintentionally. Even well-generalized models may learn properties that are relevant to the whole input data. From an adversarial perspective, it can be the properties that may be inferred from the specific subset of data that was used for training, or about a particular individual."],
  p6: ["The adversary here is interested in creating a substitute that learns the same task as the target model, equally well or better. The objective of the model extraction attack is to create an alternative that replicates the decision boundary of the model as faithfully as possible. Model extraction attacks can also serve as doorways to launch other adversarial attacks as well. So, apart from creating substitute models, there are also approaches that focus on recovering information from the target model such as hyper-parameters or architectural properties such as activation types, optimization algorithm, number of layers, etc. In all the attacks discussed above, the range of knowledge can always range from having access to a machine learning API to knowing the full model parameters and training settings. There is a range of possibilities in between these two extremes, such as partial knowledge of the model architecture, its hyper-parameters or training setup. That said, the authors of this work posit that these attacks can be leveraged for positive outcomes such as auditing black-box models to check for data owner’s authorization."],
  p7: [
    "We, at Alta-Futuris, are a fervent crew of AI and ML experts who have been managing private and sensitive data for decades. It hasn’t always been perfect, or even very secure, but our proven and efficient ways can let you encrypt and decrypt data in real-time, create secure computing enclaves, protect data held in memory, and many other security measures that would help you in protecting sensitive and privileged information from attackers. Our tech professionals found the ways to protect API and API access, to harden software systems and still allow basic interoperability. We efficiently implement this knowledge to our machine learning systems by regularly testing them for exploits and vulnerabilities to ensure security systems are secured. To learn more about solutions to combat privacy attacks, visit https://www.altafuturis.com/.",
  ],

date: [
    "May 23, 2023"
],
Categories: [
    "Data Engineering"
]
};

const CloudSenseConsultancy = () => {
  return (
    <div className="mx-auto py-16 px-16 space-y-9 text-gray-800">
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
      
      <h1 className="text-4xl font-bold text-start">
        Security Concerns While Implementing Data Engineering Solutions
      </h1>

      <section className="space-y-5">
        <p className="text-gray-600 text-lg">{data.client}</p>
        <p className="text-gray-600 text-lg">{data.client2}</p>
      </section>

      {["Black-box Attacks", "White-box Attacks", "Membership Inference Attacks", "Reconstruction Attacks", "Property Inference Attacks", "Model Extraction Attacks"].map((title, index) => (
        <section key={index} className="space-y-5">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600 text-lg">{data[`p${index + 1}`]}</p>
        </section>
      ))}

      <section className="space-y-5">
        <h2 className="text-2xl font-bold">
          How Alta-Futuris’ Data Engineering team addresses security concerns
        </h2>
        <p className="text-gray-600 text-lg">{data.p7}</p>
      </section>
    </div>
  );
};

export default CloudSenseConsultancy;
