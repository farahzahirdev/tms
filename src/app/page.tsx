import FormEmbedScript from "@/components/forms/FormEmbedScript";
import HashScrollHandler from "@/components/ui/HashScrollHandler";
import About from "@/components/sections/About/About";
import Benefits from "@/components/sections/Benefits/Benefits";
import Conditions from "@/components/sections/Conditions/Conditions";
import Contact from "@/components/sections/Contact/Contact";
import Hero from "@/components/sections/Hero/Hero";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import Reviews from "@/components/sections/Reviews/Reviews";
import Spravato from "@/components/sections/Spravato/Spravato";
import TrustBar from "@/components/sections/TrustBar/TrustBar";
import WhatIsTms from "@/components/sections/WhatIsTms/WhatIsTms";

export default function HomePage() {
  return (
    <>
      <FormEmbedScript />
      <HashScrollHandler />
      <Hero />
      <TrustBar />
      <WhatIsTms />
      <Benefits />
      <HowItWorks />
      <Conditions />
      <About />
      <Spravato />
      <Reviews />
      <Contact />
    </>
  );
}
