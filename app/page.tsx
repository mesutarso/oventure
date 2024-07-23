import Image from "next/image";
import Hero from "@/components/home/hero";
import Office from "@/components/home/office";
import VideoHome from "@/components/home/video";
import Work from "@/components/home/work";
import SchoolSection from "@/components/home/school";

export default function Home() {
  return (
    <>
      <Hero />
      <Office />
      <Work />
      <SchoolSection />
    </>
  );
}
