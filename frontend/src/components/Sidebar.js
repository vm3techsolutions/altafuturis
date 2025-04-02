"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const services = [
    {
      slug: "ai-coe-consulting",
      title: " AI COE consulting and development services",
    },
    {
      slug: "ai-app-dev",
      title: "Generative AI Application Development",
    },
    {
      slug: "salesforce-agentforce-consulting",
      title: "Salesforce Agentforce Consulting",
    },
    {
      slug: "salesforce-consulting",
      title: "Salesforce Consulting",
    },
    {
      slug: "data-loss-prevention",
      title:
        "Generative AI Agents for Data Loss Prevention (DLP) in Cybersecurity",
    },
    {
      slug: "ai-agent-developement-in-blockchain",
      title: "AI Agent Development in Blockchain",
    },
  ];

  return (
    <div className="py-10 w-[40vh] sm:w-[70vh] md:w-full">
      {/* Sidebar Service Menu */}
      <div className="sidebar bg-white p-4 rounded-xl ">
        <ul>
          {services.map((service) => (
            <li
              key={service.slug}
              className={`px-4 py-2 rounded-xl border-b my-4 text-lg flex justify-between items-center transition-all duration-300 ease-in-out group
                ${
                  pathname === `/services/${service.slug}`
                    ? "bg-blueColor text-white hover:text-white shadow-md"
                    : "bg-transparent hover:text-white text-black hover:bg-blueColor"
                }`}
            >
              <Link href={`/services/${service.slug}`} className="w-full text-left">
                {service.title}
              </Link>
              <span className="ml-2 bg-brownColor group-hover:bg-brownColor text-white px-1 rounded-md duration-300">
                &gt;&gt;
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Advice / Call to Action Section */}
      <div className="bg-brownColor my-14 px-6 pt-6 rounded-xl">
        <h2 className="text-3xl font-extrabold mb-20">
          Need Advice ?<br /> Book a Call!
        </h2>
        <Image
          src="/assets/h1c4.png"
          alt="service-image"
          className="object-center"
          width={400}
          height={400}
          priority
        />
      </div>

      {/* "Know More" Button */}
      <div>
        <Link href="/contact" className="flex justify-center -mt-5 mr-11">
          <button className="px-4 py-2 bg-blueColor text-white rounded-xl shadow-md hover:bg-brownColor flex items-center transition-all duration-300 ease-in-out group">
            Talk to an Expert
            <span className="ml-2 bg-brownColor group-hover:bg-blueColor text-white px-1 rounded-md duration-300">
              &gt;&gt;
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
