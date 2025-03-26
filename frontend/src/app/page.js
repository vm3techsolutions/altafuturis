import AiSolutionCards from "./home/AiSolutionCards";
import CaseStudies from "./home/CaseStudies";
import CaseStudiesbtn from "./home/CaseStudiesbtn";
import HomeBanner from "./home/HomeBanner";

import Requirements from "./home/Requirements";
import WhoWeAre from "./home/WhoWeAre";
import WhyChooseUs from "./home/WhyChooseUs";
import ClientLogo from './home/ClientLogo';
import OurTeam from './home/OurTeam';
import Testimonials from "./home/Testimonials";
import Whowearebtn from "./home/Whowearebtn";


export default function Home() {
  return (
<div>

  <HomeBanner/>
  {/* <Whowearebtn/> */}
  <WhoWeAre/>
  <AiSolutionCards/>
  <WhyChooseUs/>
  <ClientLogo/>
  <OurTeam/>
  <Testimonials/>
  <CaseStudiesbtn/>
  <CaseStudies/>
  <Requirements/>

</div>
  );
}
