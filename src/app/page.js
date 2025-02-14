import AiSolutionCards from "./home/AiSolutionCards";
import HomeBanner from "./home/HomeBanner";
import LogoSlider from "./home/LogoSlider";
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
</div>
  );
}
