import CaseStudyBlogs from "@app/case-studies/CaseStudyBlogs";
import CaseStudy4btn from "./CaseStudy4btn";
import CasestudyBanner from "./CasestudyBanner";
import DiscussRequirement from "./DiscussRequirement";

export const metadata = {
  title: "Altafuturis - Case Studies",
  description: "Based in Texus, Serving globally!"
}

export default function Home() {
    return (
  <div className="bg-white"> 
  
    <CasestudyBanner/>
    {/* <CaseStudy4btn/> */}
    {/* <CaseStudyBlogs/> */}
    <DiscussRequirement/>
    
  
  </div>
    );
  }
  