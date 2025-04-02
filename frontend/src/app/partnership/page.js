
import PartnershipBanner from "./PartnershipBanner";
import PartnershipData from "./PartnershipData";
import PartnershipRequirements from "./PartnershipRequirements";
import Requirements from "@app/home/Requirements";


export default function ContactPage() {
    return (
      <div>
        
        <PartnershipBanner/>
        <PartnershipData/>
        {/* <PartnershipRequirements/> */}
        <Requirements/>
        
      </div>
    );
  }
  