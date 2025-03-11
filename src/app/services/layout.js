"use client";
import { useState } from "react";
import Sidebar from "@components/Sidebar"; // Ensure the import path is correct
import PageTitle from "./PageTitle";
import Subservice1 from "./Subservice1";

export default function ServicesLayout({ children }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <PageTitle />

      <div className="flex flex-col md:flex-row justify-center items-start min-h-screen p-6">
        {/* Sidebar Section */}
        <div className="w-60 md:w-72">
          <Sidebar
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        </div>

        {/* Right Content Section */}
        <div className="flex-grow max-w-4xl p-6">
          {children}
        </div>
      </div>

      {/* Full-Width Section that updates based on the selected service */}
      <Subservice1 service={selectedService} />
    </>
  );
}
