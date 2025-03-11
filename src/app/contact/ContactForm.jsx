'use client';
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Form() {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    companyName: "",
    companyRevenue: "",
    role: "",
    relationship: "",
    services: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResponseMessage(data.message);
      setFormData({
        fullname: "",
        phone: "",
        email: "",
        companyName: "",
        companyRevenue: "",
        role: "",
        relationship: "",
        services: "",
        message: "",
      });
    } catch (error) {
      console.error("Error", error);
      setResponseMessage("Submission failed. Try again.");
    }
  };

  return (
    <div id="ReserveForm" className="flex flex-col md:flex-row items-center justify-center min-h-screen  py-20 md:px-16 px-5 gap-5">
      {/* Left Side - Contact Info */}
      {/* <div className="md:w-2/5 w-full  md:px-5 ">
        <div className="text-center md:text-left space-y-5 md:pr-20 ">

          <div className="grid items-center justify-center   text-lg font-bold text-black border-brownColor border-2 rounded-xl bg-white  px-2 py-2">
            <Phone className="text-brownColor m-auto" />
            <p>+91 97646 94844</p>
          </div>

          <div className="grid items-center justify-center   text-lg font-bold text-black border-brownColor border-2 rounded-xl bg-white  px-2 py-2">
            <Mail className="text-brownColor m-auto"/>
            <p>sales@altafuturis.com</p>
          </div>
          
          <div className="grid items-center justify-center   text-lg font-bold text-black border-brownColor border-2 rounded-xl bg-white  px-2 py-2 gap-8">
          <MapPin className="text-brownColor m-auto "/>

          <div className="mt-6 border border-#D9D9D9DD text-center rounded-xl">
            <div className="grid items-center gap-2   ">
              <p className="font-bold text-xl text-black">Texas</p>            
            <p className="text-black font-medium">1 Elizabeth ln, West Bridgewater, <br/>MA 02379, USA</p>
          </div>
          </div>

          <div className="mt-6 border border-#D9D9D9DD text-center rounded-xl">
            <div className="grid items-center gap-2   ">
              <p className="font-bold text-xl text-black">Pune</p>            
            <p className="text-black font-medium">Sr. No. 19/12/B/1, 3rd Floor Anish, Bavdhan Pune, Maharashtra, India</p>
          </div>
          </div>

          <div className="mt-6 border border-#D9D9D9DD text-center rounded-xl">
            <div className="grid items-center gap-2   ">
              <p className="font-bold text-xl text-black">Kolhapur</p>            
            <p className="text-black font-medium">Plot No 32, Survey 1076/1 Infront of Deshmukh Highschool, Road no.4, Indraprastha Colony, Saneguruji Vasahat, Kolhapur, Maharashtra, India</p>
          </div>
          </div>

          </div>
        </div>
      </div> */}

      {/* Right Side - Form */}
      <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg p-6 bg-white border-2 border-brownColor">
  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
    <div>
      <label className="mb-3 block text-black font-semibold text-lg ">Full Name :</label>
      <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" required />
    </div>

    <div>
      <label className="mb-3 block text-black font-semibold text-lg">Company Name :</label>
      <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" required />
    </div>

    <div>
      <label className="mb-3 block text-black font-semibold text-lg">Email :</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" required />
    </div>

    <div>
      <label className="mb-3 block text-black font-semibold text-lg">Phone No :</label>
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" required />
    </div>

    <div>
      <label className="mb-3 block text-black font-semibold text-lg">Company Revenue :</label>
      <select name="companyRevenue" value={formData.companyRevenue} onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" required>
        <option value="">Choose Revenue</option>
        <option value="Below $1M">Below $1M</option>
        <option value="$1M - $10M">$1M - $10M</option>
        <option value="$10M - $50M">$10M - $50M</option>
        <option value="$50M - $100M">$50M - $100M</option>
        <option value="Above $100M">Above $100M</option>
      </select>
    </div>

    <div>
      <label className="mb-3 block text-black font-semibold text-lg">Role :</label>
      <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" required>
        <option value="">Select Role</option>
        <option value="CEO">CEO</option>
        <option value="Manager">Manager</option>
        <option value="Employee">Employee</option>
        <option value="Consultant">Consultant</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div>
      <label className="mb-3 block text-black font-semibold text-lg">Relationship with Alta :</label>
      <select name="relationship" value={formData.relationship} onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" required>
        <option value="">Select Relationship</option>
        <option value="Customer">Customer</option>
        <option value="Partner">Partner</option>
        <option value="Supplier">Supplier</option>
        <option value="Investor">Investor</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div>
      <label className="mb-3 block text-black font-semibold text-lg">Services :</label>
      <select name="services" value={formData.services} onChange={handleChange} className="w-full p-2 border border-gray-400 rounded" required>
        <option value="">Select Service</option>
        <option value="Service 1">Service 1</option>
        <option value="Service 2">Service 2</option>
        <option value="Service 3">Service 3</option>
        <option value="Service 4">Service 4</option>
        <option value="Service 5">Service 5</option>
      </select>
    </div>

    <div>
      <label className="mb-3 block text-black font-semibold text-lg">Message :</label>
      <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full p-2 border border-gray-400 rounded"></textarea>
    </div>

    <div className="flex items-start space-x-2">
      <input type="checkbox" id="agree" name="agree" className="mt-1" required />
      <label htmlFor="agree" className="text-black text-lg">
        I understand and agree to the Privacy Policy.
      </label>
    </div>

    <div className="col-span-2 mt-2">
            <button type="submit" className="px-10 bg-blueColor text-white font-semibold py-2 rounded-xl hover:bg-brownColor">Submit</button>
          </div>

    {responseMessage && <p className="text-center text-green-600 mt-2">{responseMessage}</p>}
  </form>
</div>

    </div>
  );
}  