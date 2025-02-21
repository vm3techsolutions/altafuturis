"use client";

const data = {
  client:
    "Automating your Salesforce workflows can help your revenue team gain back dozens of hours lost to manual tasks each week. However, setting up Salesforce automations can be a daunting task if you’ve never done it before.",
  client2:
    "Workflow automation converts tedious, manual tasks into those that primarily occur as an automated process. With more automation tools available to us than ever before, workflow automation helps your team focus on high-impact tasks instead of repetitive and monotonous ones and reduces human errors.In Salesforce, workflow automation typically converts some manual tasks such as data updates, user task assignments, and sending messages to platforms outside of Salesforce into automated processes.",
  p1: [
    "There are a few different automation options you can use to automate workflows in Salesforce.",
  ],
  problemStatement: [
    "Process Builder: Process Builder allows you to create an automated process that triggers for certain Salesforce events. These events include record changes, event messages, and other processes. Process Builder can do tasks such as create or update records, log phone calls, launch a flow, and send an email or notification.",
    "Flows: Flows can also collect, update, edit, or create Salesforce data and interact with external programs and can be created without using any code. They can either run in the background as “auto-launched flows” or provide a user interface for tasks known as “screen flows.”",
    "Salesforce Workflow: Salesforce Workflows are entirely a background automation process that interacts with Salesforce records.",
    "Third-Party Plugins: Outside of the internal automation options offered by Salesforce, there are third-party automation plugins you can utilize to expand or simplify your automation process options.",
    "Each of these different automation options works a little differently and has different ranges of functionality. Which one(s) you choose will likely come down to how comfortable you feel using the tool and which actions in your workflow you’re trying to automate.",
  ],
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
    " For Alta-Futuris team, it’s crucial to remember the various limits and best practices associated with workflow rules, such as the number of workflow rules and actions that can be created and the order in which they are executed. Such best practices contribute to build robust automation solution that client assist organizations in streamlining their business processes and increasing productivity"
  ]
};

const CloudSenseConsultancy = () => {
  return (
    <div className=" mx-auto py-16 px-16 space-y-9 text-gray-800">
      <h1 className="text-4xl font-bold text-start">
        Workflow Automation in Salesforce – Excellent Value for Businesses
      </h1>

      <section className="space-y-5">
        <p className="text-gray-600 text-lg">{data.client}</p>
        <p className="text-gray-600 text-lg">{data.client2}</p>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold">
          How to Automate Workflows in Salesforce:
        </h2>
        <p className="text-gray-600 text-lg">{data.p1}</p>
        <p className="text-gray-600 text-lg">These include:</p>
        <ul className="list-disc pl-5 text-gray-600 text-lg space-y-3">
          {data.problemStatement.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
      <p className="text-gray-600 text-lg">{data.p2}</p>
      <p className="text-gray-600 text-lg">{data.p3}</p>
      <p className="text-gray-600 text-lg">{data.p4}</p>
      <p className="text-gray-600 text-lg">{data.p5}</p>
        <ul className="list-disc pl-5 text-gray-600 text-lg space-y-3">
          {data.solution.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
      <p className="text-gray-600 text-lg">{data.p6}</p>
      </section>
    </div>
  );
};

export default CloudSenseConsultancy;
