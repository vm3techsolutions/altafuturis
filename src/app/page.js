import AiSolutionCards from "./home/AiSolutionCards";
import HomeBanner from "./home/HomeBanner";
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
</div>
  );
}
