import Image from "next/image";
import React from "react";
import Video from "next-video";
import VIDEOFILE from "@/videos/forest.mp4";

function VideoHome() {
  return (
    <div className="container ">
      <div className="rounded-xl overflow-hidden">
        <div className="rounded-xl">
          <Video
            src={VIDEOFILE}
            loop
            muted
            controls={false}
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
