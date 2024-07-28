import Image from "next/image";
import React from "react";
import Video from "next-video";
import VIDEOFILE from "@/videos/forest.mp4";

function VideoHome() {
  return (
    <div
      className="container pb-20 md:pb-0 "
      data-aos="zoom-in"
      data-aos-duration="2500"
    >
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
