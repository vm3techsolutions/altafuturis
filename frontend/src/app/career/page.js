import CareerBanner from "./CareerBanner";
import CareerDesignation from "./CareerDesignation";
import CareerFooter from "./CareerFooter";

export const metadata = {
  title: "Altafuturis - Job Openings",
  description: "Based in Texus, Serving globally!"
}


export default function Home() {
    return (
  <div className="bg-white"> 
  
    <CareerBanner/>
    {/* <CareerDesignation/> */}
    <CareerFooter/>
    
  
  </div>
    );
  }
  