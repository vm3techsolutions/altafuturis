
import PartnershipBanner from "./PartnershipBanner";
import PartnershipData from "./PartnershipData";
import PartnershipRequirements from "./PartnershipRequirements";
import Requirements from "@app/home/Requirements";

export const metadata = {
  title: "Altafuturis - Partnership",
  description: "Based in Texus, Serving globally!"
}

export default function ContactPage() {
    return (
      <div>
        
        <PartnershipBanner/>
        <PartnershipData/>
        <Requirements/>
        {/* <PartnershipRequirements/> */}        
      </div>
    );
  }
  