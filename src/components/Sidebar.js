"use client"; // ✅ Important for client-side hooks
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Use this instead of useRouter()

const Sidebar = () => {
  const pathname = usePathname(); // ✅ Get the current path

  return (
    <>
    <div className="sidebar bg-white p-4 rounded-xl">
      <ul>
        <li
          className={`px-4 py-2 rounded-xl hover:shadow-md hover:text-white hover:bg-brownColor border-b my-4 text-lg flex justify-between items-center transition-all duration-300 ease-in-out group 
        ${
          pathname === "/services/ai-app-dev"
            ? "bg-blueColor text-white shadow-md"
            : "bg-transparent text-black hover:bg-blueColor"
        }`}
        >
          <Link href="/services/ai-app-dev/">
            Generative AI Application Development
          </Link>
          <span className="ml-2 bg-brownColor group-hover:bg-blueColor text-white px-1 rounded-md duration-300">
            &gt;&gt;
          </span>
        </li>

        <li
          className={`px-4 py-2 rounded-xl hover:shadow-md hover:text-white hover:bg-brownColor border-b my-4 text-lg flex justify-between items-center transition-all duration-300 ease-in-out group ${
            pathname === "/services/salesforce-agentforce-consulting"
              ? "bg-blueColor text-white hover:bg-brownColor shadow-md"
              : "bg-transparent text-black hover:bg-blueColor"
          }`}
        >
          <Link href="/services/salesforce-agentforce-consulting">
            Salesforce Agentforce Consulting
          </Link>
          <span className="ml-2 bg-brownColor group-hover:bg-blueColor text-white px-1 rounded-md duration-300">
            &gt;&gt;
          </span>
        </li>

        <li className={`px-4 py-2 rounded-xl hover:shadow-md hover:text-white hover:bg-brownColor border-b my-4 text-lg flex justify-between items-center transition-all duration-300 ease-in-out group ${pathname === "/services/salesforce-consulting" ? "bg-blueColor text-white hover:bg-brownColor shadow-md" : "bg-transparent text-black hover:bg-blueColor"}`}>
          <Link href="/services/salesforce-consulting">Salesforce Consulting</Link>
          <span className="ml-2 bg-brownColor group-hover:bg-blueColor text-white px-1 rounded-md duration-300">
            &gt;&gt;
          </span>
        </li>

        <li className={`px-4 py-2 rounded-xl hover:shadow-md hover:text-white hover:bg-brownColor border-b my-4 text-lg flex justify-between items-center transition-all duration-300 ease-in-out group ${pathname === "/services/data-loss-prevention" ? "bg-blueColor text-white hover:bg-brownColor shadow-md" : "bg-transparent text-black hover:bg-blueColor"}`}>
          <Link href="/services/data-loss-prevention">
            Generative AI Agents for Data Loss Prevention (DLP) in Cybersecurity
          </Link>
          <span className="ml-2 bg-brownColor group-hover:bg-blueColor text-white px-1 rounded-md duration-300">
            &gt;&gt;
          </span>
        </li>

        <li className={`px-4 py-2 rounded-xl hover:shadow-md hover:text-white hover:bg-brownColor border-b my-4 text-lg flex justify-between items-center transition-all duration-300 ease-in-out group ${pathname === "/services/ai-agent-developement-in-blockchain" ? "bg-blueColor text-white hover:bg-brownColor shadow-md" : "bg-transparent text-black hover:bg-blueColor"}`}>
          <Link href="/services/ai-agent-developement-in-blockchain">AI Agent Development in Blockchain</Link>
          <span className="ml-2 bg-brownColor group-hover:bg-blueColor text-white px-1 rounded-md duration-300">
            &gt;&gt;
          </span>
        </li>

      </ul>
    </div>

    <div className="bg-brownColor my-14 px-6 pt-6 rounded-xl">
          <h2 className="text-3xl font-extrabold mb-20">Need Advice ?<br/> Book a Call!</h2>
          <Image
          src="/assets/h1c4.png"
          alt="service-image"
          className="object-center"
          width={400}
          height={400}
          priority
          >

          </Image>
    </div>
    <div>
      
    </div>
    </>
  );
};

export default Sidebar;
