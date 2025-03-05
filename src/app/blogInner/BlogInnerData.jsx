"use client";

const data = {
  client: [
    "Automating your Salesforce workflows can help your revenue team gain back dozens of hours lost to manual tasks each week. However, setting up Salesforce automations can be a daunting task if you’ve never done it before.",
    "Workflow automation converts tedious, manual tasks into those that primarily occur as an automated process. With more automation tools available to us than ever before, workflow automation helps your team focus on high-impact tasks instead of repetitive and monotonous ones and reduces human errors. In Salesforce, workflow automation typically converts some manual tasks such as data updates, user task assignments, and sending messages to platforms outside of Salesforce into automated processes."
  ],
  sections: [
    {
      title: "How to Automate Workflows in Salesforce:",
      content: [
        "There are a few different automation options you can use to automate workflows in Salesforce.",
        "These include:"
      ],
      list: [
        "Process Builder: Process Builder allows you to create an automated process that triggers for certain Salesforce events...",
        "Flows: Flows can also collect, update, edit, or create Salesforce data and interact with external programs...",
        "Salesforce Workflow: Salesforce Workflows are entirely a background automation process that interacts with Salesforce records.",
        "Third-Party Plugins: Outside of the internal automation options offered by Salesforce, there are third-party automation plugins..."
      ]
    },
    {
      title: "The Difference Between Process Builder and Workflow Rules in Salesforce",
      content: [
        "Workflow Rules and Process Builders may, briefly, seem like very similar processes. However, there are some distinct differences in their structure and scope of use.",
        "A Workflow Rule is a point-and-click version of an ‘if/then’ statement with limited statements in each category...",
        "On the other hand, a Process Builder is a simplified flow with multiple ‘if/then’ statements that can be kicked off from different sources...",
        "Process Builder can configure multiple conditions in one process, whereas Workflow needs separate workflow rules for each ‘if/then’ scenario."
      ]
    },
    {
      title: "Salesforce Workflow Rule Use Cases",
      list: [
        "Task Creation: Workflows can automatically create tasks for individual users based on changes made to an object...",
        "Updating Fields: Workflow rules can overwrite field values with new data...",
        "Email Alerts: With workflows, you can set up email alerts that would be sent to receivers or lists...",
        "Outbound Messages: Workflows can forward SOAP messages to external systems using notifications..."
      ]
    },
    {
      content: [
        "For Alta-Futuris team, it’s crucial to remember the various limits and best practices associated with workflow rules..."
      ]     
    }
  ],
<<<<<<< HEAD
  date: [
    "May 23, 2023"
],
Categories: [
    "Data Engineering"
]
=======
  p2: ["The Difference Between Process Builder and Workflow Rules in Salesforce Workflow Rules and Process Builders may, briefly, seem like very similar processes. However, there are some distinct differences in their structure and scope of use."],
  p3: ["A Workflow Rule is a point-and-click version of an “if/then” statement with limited statements in each category. It functions on the record triggering it, or in some cases, the child of this record (it cannot go upstream)."],
  p4: ["On the other hand, a Process Builder is a simplified flow with multiple “if/then” statements that can be kicked off from different sources. For instance, it can start from changes to records (create or update), from receiving Platform Event Messages, and from other process builders or flows. In many instances, Process Builder can do much of what Workflow Rules do but can take it a step further. For example, Process Builder can update any field on any record, whereas Workflow can only update some fields on a parent record within their flow."],
  p5: ["Process Builder can configure multiple conditions in one process, whereas Workflow needs separateworkflow rules for each “if/then” scenario. Salesforce Workflow Rule Use Cases Workflow rules in Salesforce are a vital tool for salesforce developers, it may save you time and help you optimize your internal processes. Here are some specific use cases that demonstrate how you can leverage workflows:"],
  solution: [
    "Task Creation: Workflows can automatically create tasks for individual users based on changes made to an object. For example, when a customer completes a purchase, the Order status changes to “Paid,” and the specialist in charge of assembling and mailing the package can get an automatically assigned task to begin preparing the order for shipping.",
    "Updating Fields: Workflow rules can overwrite field values with new data. For instance, if a payment is overdue from the client’s side, the “Payment Status” field can be automatically changed to “Delayed” based on the Date. This time-dependent action can help monitor orders and take further action.",
    "Email Alerts: With workflows, you can set up email alerts that would be sent to receivers or lists. For example, you can create a workflow rule that tracks the end dates of contracts and sends notifications to the manager or person responsible for keeping track of such things. You can also receive email reminders about an employee’s upcoming “work anniversary,” which is a great way to show appreciation.",
    "Outbound Messages: Workflows can forward SOAP messages to external systems using notifications. For instance, if a change is made on a field in Salesforce (e.g., in the customer’s last name), a workflow rule can send an outbound message to an external marketing system, signalling an analogous field update in the client name.",
    "As you can see, the possibilities of what you can automate with workflows in Salesforce are endless. By setting up workflows, you can save time, reduce errors, and optimize your internal processes. Certified Salesforce Architects and developers from Alta-Futuris , essentially consider the specific needs and requirements of the client organization while designing workflow rules and to test the rules thoroughly to ensure they are functioning as intended."
  ],
  p6: [ 
    "For Alta-Futuris team, it’s crucial to remember the various limits and best practices associated with workflow rules, such as the number of workflow rules and actions that can be created and the order in which they are executed. Such best practices contribute to build robust automation solution that client assist organizations in streamlining their business processes and increasing productivity"
  ]
>>>>>>> 68a4feece1da9fb5d940a910a421114d3e973135
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
        Workflow Automation in Salesforce – Excellent Value for Businesses
      </h1>
      
      {/* Client Section */}
      <section className="space-y-5">
        {data.client.map((paragraph, index) => (
          <p key={index} className="text-gray-600 text-lg">{paragraph}</p>
        ))}
      </section>

      {/* Dynamic Sections */}
      {data.sections.map((section, index) => (
        <section key={index} className="space-y-5">
          {section.title && <h2 className="text-xl font-semibold">{section.title}</h2>}
          {section.content?.map((text, idx) => (
            <p key={idx} className="text-gray-600 text-lg">{text}</p>
          ))}
          {section.list && (
            <ul className="list-disc pl-5 text-gray-600 text-lg space-y-3">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
};

export default CloudSenseConsultancy;
