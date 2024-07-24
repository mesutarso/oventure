import Video from "next-video";
import { Button } from "@/components/ui/button";
import VIDEO from "@/videos/forest.mp4";

function Hero() {
  return (
    <div
      className={
        "bg-gradient-to-tl from-blueDark to-blueLight min-h-[70vh] text-white"
      }
    >
      <div className="container section grid grid-cols-1 md:grid-cols-2 min-h-[80vh] items-center gap-12">
        <div className="rounded-xl overflow-hidden">
          <div className={"w-full  rounded-xl"}>
            <Video
              src={VIDEO}
              autoPlay
              controls={true}
              loop
              muted
              playsInline
              className={"rounded-xl"}
            />
          </div>
        </div>
        <div className={"w-full  space-y-4"}>
          <h1 className={"text-xl font-semibold uppercase"}>CLIMATE SCHOOL</h1>
          <h3 className={"text-4xl font-semibold "}>
            CLIMATE SCHOOLFormation ESG Finance: engagez vos équipes finance
            dans votre transition durable
          </h3>
          <p className={"text-md font-normal"}>
            Climate School est une expérience de formation en ligne qui permet
            aux organisations d’éduquer leurs employés à l’urgence du changement
            climatique et de leur donner les moyens de prendre des mesures
            concrètes dans le cadre de leur travail.
          </p>
          <Button className={"bg-primary"}>Demander une démo</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
