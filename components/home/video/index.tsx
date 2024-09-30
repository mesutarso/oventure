import Video from "next-video";
import VIDEOFILE from "@/videos/decarbonable.mp4";

function VideoHome() {
  return (
    <div className="container " data-aos="zoom-in" data-aos-duration="2500">
      <div className="rounded-xl overflow-hidden">
        <div className="rounded-xl">
          <Video
            src={VIDEOFILE}
            loop
            muted
            controls={true}
            autoPlay
            playsInline
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default VideoHome;
