import AiSolutionCards from "./home/AiSolutionCards";
import CaseStudies from "./home/CaseStudies";
import CaseStudiesbtn from "./home/CaseStudiesbtn";
import HomeBanner from "./home/HomeBanner";

import Requirements from "./home/Requirements";
import WhoWeAre from "./home/WhoWeAre";
import WhyChooseUs from "./home/WhyChooseUs";
import ClientLogo from './home/ClientLogo';
import OurTeam from './home/OurTeam';


export default function Home() {
  return (
<div>

  <HomeBanner/>
  <WhoWeAre/>
  <AiSolutionCards/>
  <WhyChooseUs/>
  <ClientLogo/>
  <OurTeam/>
  <CaseStudiesbtn/>
  <CaseStudies/>
  <Requirements/>

</div>
  );
}
