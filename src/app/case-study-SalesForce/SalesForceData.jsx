"use client"

const data = {
  client: "Client – The client focuses on preparing students for elementary, middle school and high school education. Its faculty and students are committed to impacting society and to results that make a difference in the lives of individuals, couples, families, schools, organizations, companies, and nations.",
  problemStatement: [
    "The Client, a career college, wanted greater visibility into its inquiry – generation process to more effectively market to potential students and boost admissions",
    "With 40+ separate locations, a lack of visibility into the admissions process prevented the college from improving the process",
    "The moment someone clicks on a Web interest form and the moment college contacts that person correlates directly with enrollment success, visibility to real-time information was paramount",
    "The college required a CRM solution that could easily integrate with NetSuite to link marketing, inquiries, and enrollments"
  ],
  solution: [
    "The client chose Alta-Futuris Solutions to implement Salesforce CRM for its ease of use and ability to fully integrate with Client’s back-end systems with NetSuite; the school deployed Unlimited Edition of Salesforce to 1000+ users with integration to NetSuite.",
    "Solution integrates all up-front inquiry generation via vendors, direct mail, and the Web site into Salesforce CRM; determined by workflow rules, auto-response emails are then automatically delivered.",
    "Dashboards help drive customer success and allow the senior management of school chains to know exactly how many inquiries were generated during a given time and where they came from Real-time reporting expands dashboard information for customizable fore casting to Marketing function of the school.",
    "With bidirectional integration into Oracle FT on the back end, for student enrollment users simply click a link in Salesforce CRM; School administrative function validate the information and paymentverification, which is then matriculated in NetSuite; real-time synchronizations ensure information is updated in both systems."
  ],
  benefits: [
    "100 % visibility into the marketing and enrollment process.",
    "80% effectiveness of marketing dollars of school at eleven campuses."
  ]
};

const CloudSenseConsultancy = () => {
  return (
    <div className=" mx-auto py-16 px-16 space-y-9 text-gray-800">
      <h1 className="text-4xl font-bold text-start">Salesforce Development for Leading K-12 School Chain in USA</h1>
      
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
