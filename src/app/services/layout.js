import Sidebar from "@components/Sidebar"; // Fix the import path
import Image from "next/image";
import PageTitle from "./PageTitle";

export default function ServicesLayout({ children }) {
  return (
    <>
      <PageTitle />

      <div className="flex flex-col md:flex-row justify-center items-start min-h-screen p-6">
        
        {/* Sidebar Section */}
        <div className="w-60 md:w-72">
          
          <Sidebar />
        </div>

        {/* Content Section */}
        <div className="flex-grow max-w-4xl p-6 ">{children}</div>
      </div>
    </>
  );
}
