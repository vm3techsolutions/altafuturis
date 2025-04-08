import CommingSoon from "./CommingSoon";
import PodcastBanner from "./PodcastBanner";

export const metadata = {
  title: "Altafuturis - Podcast",
  description: "Based in Texus, Serving globally!"
}

export default function ContactPage() {
    return (
      <div>
        
        <PodcastBanner/>
        <CommingSoon/>
        
      </div>
    );
  }
  