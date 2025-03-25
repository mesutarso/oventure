import Hero from "@/components/home/hero";
import Office from "@/components/home/office";
import Work from "@/components/home/work";
import SchoolSection from "@/components/home/school";
import Offers from "@/components/home/offers";
import WhySection from "@/components/home/why";
import WhatWeDo from "@/components/home/whatwedo";

export default function Home() {
  return (
    <>
      <Hero />
      <Office />
      <Work />
      <Offers />  
      {/* <WhySection /> */}
      <WhatWeDo />
      <SchoolSection />
    </>
  );
}
