import ContactCTA from "@/components/ContactCTA";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import EveryBusinessDifferent from "@/components/EveryBusinessDifferent";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WebsiteAudit from "@/components/WebsiteAudit";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WebsiteAudit />
      <Services />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      <EveryBusinessDifferent />
      <ContactCTA />
    </>
  );
}
