// app/about/page.js
import Expertise from './Expertise';
import PageTitle from './PageTitle';
import Team from './Team';
import VisionMission from './VisionMission';
import WhoAreWe from './WhoAreWe';

export default function AboutPage() {
    return (
      <div>
        <PageTitle/>
        <WhoAreWe/>
        <VisionMission/>
        <Team/>
        <Expertise/>
      </div>
    );
  }
  