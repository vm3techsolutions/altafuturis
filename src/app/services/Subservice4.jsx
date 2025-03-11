import { useState } from "react";
import { ShieldCheck, Database, FileText } from "lucide-react";

const cards = [
  { id: 1, 
    title: "AI-Driven Threat Detection",
     icon: ShieldCheck,
      description: "Detects and prevents threats using AI-driven analytics." },
  { id: 2, 
    title: "AI-Powered Data Discovery and Classification",
     icon: Database,
      description: "Automatically classifies and organizes data using AI." },
  { id: 3, 
    title: "AI-Enhanced Policy Enforcement",
     icon: FileText,
      description: "Enhances security policies with AI-driven enforcement." },
  { id: 4, 
    title: "AI-Enhanced Policy Enforcement",
     icon: FileText,
      description: "Enhances security policies with AI-driven enforcement." },
  { id: 5, 
    title: "AI-Driven Threat Detection",
     icon: ShieldCheck,
      description: "Detects and prevents threats using AI-driven analytics." },
  { id: 6, 
    title: "AI-Powered Data Discovery and Classification",
     icon: Database,
      description: "Automatically classifies and organizes data using AI." },
  { id: 7, 
    title: "AI-Enhanced Policy Enforcement",
     icon: FileText,
      description: "Enhances security policies with AI-driven enforcement." },
  { id: 8, 
    title: "AI-Enhanced Policy Enforcement",
     icon: FileText,
      description: "Enhances security policies with AI-driven enforcement." },
  { id: 9, 
    title: "AI-Driven Threat Detection",
     icon: ShieldCheck,
      description: "Detects and prevents threats using AI-driven analytics." },
  { id: 10,
     title: "AI-Powered Data Discovery and Classification",
     icon: Database,
      description: "Automatically classifies and organizes data using AI." },
  { id: 11,
     title: "AI-Enhanced Policy Enforcement",
     icon: FileText,
      description: "Enhances security policies with AI-driven enforcement." },
  { id: 11,
     title: "AI-Enhanced Policy Enforcement",
     icon: FileText,
      description: "Enhances security policies with AI-driven enforcement." },
  { id: 12,
     title: "AI-Driven Threat Detection",
     icon: ShieldCheck,
      description: "Detects and prevents threats using AI-driven analytics." },
  { id: 13,
     title: "AI-Powered Data Discovery and Classification",
     icon: Database,
      description: "Automatically classifies and organizes data using AI." },
  { id: 14,
     title: "AI-Enhanced Policy Enforcement",
     icon: FileText,
      description: "Enhances security policies with AI-driven enforcement." },
  { id: 15,
     title: "AI-Enhanced Policy Enforcement",
     icon: FileText,
      description: "Enhances security policies with AI-driven enforcement." },
  { id: 16,
     title: "AI-Enhanced Policy Enforcement",
     icon: FileText,
      description: "Enhances security policies with AI-driven enforcement." }
];

export default function AIThreatDetection() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="flex h-full bg-purple-800 text-white p-6 ">
      {/* Left Panel */}
      <div className="w-1/3  p-6 rounded-xl flex flex-col justify-center items-center">
        {selectedCard ? (
          <>
            <selectedCard.icon className="w-16 h-16 text-yellow-400" />
            <h2 className="text-xl font-bold mt-4">{selectedCard.title}</h2>
            <p className="mt-2 text-center">{selectedCard.description}</p>
          </>
        ) : (
          <p className="text-gray-300">Select a card to see details</p>
        )}
      </div>

      {/* Right Panel */}
      <div className="w-2/3 flex flex-wrap gap-4 p-6 justify-center">
  {Array.from({ length: 16 }).map((_, index) => {
    const card = cards[index % cards.length];
    return (
      <div
        key={index}
        className=" h-38 w-60 bg-white text-black p-4  rounded-lg flex flex-col justify-center items-center cursor-pointer transform transition-all hover:scale-110"
        onClick={() => setSelectedCard(card)}
         // Adjust width for 3 columns
      >
        <card.icon className="w-10 h-10 text-yellow-500 transition-all hover:scale-125" />
        <p className="mt-2 text-center font-semibold text-sm">{card.title}</p>
      </div>
    );
  })}
</div>

    </div>
  );
}
