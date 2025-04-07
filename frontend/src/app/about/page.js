// app/about/page.js
import Accordion from './Accordion';
import Expertise from './Expertise';
import PageTitle from './PageTitle';
import Team from './Team';
import VisionMission from './VisionMission';
import WhoAreWe from './WhoAreWe';

export const metadata = {
  title: "Altafuturis - About US",
  description: "Based in Texus, Serving globally!"
}


export default function AboutPage() {
    return (
      <div>
        <PageTitle/>
        <WhoAreWe/>
        <VisionMission/>
        <Team/>
        <Expertise/>
        <Accordion/>
      </div>
    );
  }
  