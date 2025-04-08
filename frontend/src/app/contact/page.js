import ContactBanner from "./ContactBanner";
import ContactForm from "./ContactForm";
import ReachOut from "./ReachOut";

export const metadata = {
  title: "Altafuturis - Contact Us",
  description: "Based in Texus, Serving globally!"
}

export default function ContactPage() {
    return (
      <div>
        
        <ContactBanner/>
        <ReachOut/>
        <ContactForm/>
      </div>
    );
  }
  