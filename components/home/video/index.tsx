import Image from "next/image";
import React from "react";
import Video from "next-video";

function VideoHome() {
  return (
    <div className="container ">
      <div className="rounded-xl overflow-hidden">
        <div className="rounded-xl">
          <Video
            src={"/videos/forest.mp4"}
            loop
            muted
            playsInline
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default VideoHome;
