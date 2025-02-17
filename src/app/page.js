import AiSolutionCards from "./home/AiSolutionCards";
import CaseStudies from "./home/CaseStudies";
import CaseStudiesbtn from "./home/CaseStudiesbtn";
import HomeBanner from "./home/HomeBanner";
import LogoSlider from "./home/LogoSlider";
import Requirements from "./home/Requirements";
import WhoWeAre from "./home/WhoWeAre";
import WhyChooseUs from "./home/WhyChooseUs";


export default function Home() {
  return (
<div>

  <HomeBanner/>
  <WhoWeAre/>
  <AiSolutionCards/>
  <WhyChooseUs/>
  <LogoSlider/>
  <CaseStudiesbtn/>
  <CaseStudies/>
  <Requirements/>
</div>
  );
}
