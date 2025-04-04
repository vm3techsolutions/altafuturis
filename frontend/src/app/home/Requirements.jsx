'use client';
import { useState } from "react";

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    requirement: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/submit-quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Invalid JSON response: " + text);
      }
      setResponseMessage(data.message);
      setFormData({ fullname: "", phone: "", email: "", requirement: "" });
    } catch (error) {
      console.error("Error", error);
      setResponseMessage("Submission failed. Try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between bg-[#6328A6] text-white p-10 lg:p-20 gap-10">
      <div className="lg:w-1/2 md:w-1/2 w-full text-center lg:text-left">
        <div className="md:w-full w-full flex justify-center md:justify-start mb-16 md:mb-0">
          <heading className="px-5 py-3 text-xl border-2 border-brownColor rounded-full text-white bg-[#6328A6] shadow-sm font-bold">
            Let's discuss your requirements
          </heading>
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-4 mt-5">
          Data and Workflow Solutions for your Digital Success!
        </h2>
        <p className="text-sm lg:text-base mb-6">
          Alta-Futuris follows an approach to come up with innovative solutions in AI, Data Engineering, and Salesforce that includes data research and analysis.
        </p>
        <a href="/contact" className="flex justify-center lg:justify-start mt-6">
          <button className="px-4 py-2 bg-brownColor text-white rounded-xl shadow-md hover:bg-blueColor flex items-center group">
            Know More
            <span className="ml-2 bg-blueColor group-hover:bg-brownColor text-white px-1 rounded-md">
              &gt;&gt;
            </span>
          </button>
        </a>
      </div>

      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-[60vw] lg:w-1/3 md:w-1/2">
        <h3 className="text-2xl text-start font-bold mb-4 text-gray-800">
          Get Your Quote <span className="text-purple-600">Today!</span>
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="fullname" placeholder="Name*" value={formData.fullname} onChange={handleChange} className="p-3 border rounded-lg w-full" required />
          <input type="text" name="phone" placeholder="Mobile*" value={formData.phone} onChange={handleChange} className="p-3 border rounded-lg w-full" required />
          <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} className="p-3 border rounded-lg w-full" required />
          <textarea name="requirement" placeholder="Requirement*" value={formData.requirement} onChange={handleChange} className="p-3 border rounded-lg w-full h-24" required></textarea>
          <button type="submit" className="bg-[#6328A6] text-white py-3 rounded-lg hover:bg-brownColor">
            Send Message
          </button>
          {responseMessage && <p className="text-center text-green-600 mt-2">{responseMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default QuoteSection;