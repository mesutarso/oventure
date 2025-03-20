"use client";
import Image from "next/image";
import { useRef, useState } from "react";

function Hero() {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };


  return (
    <div className={"relative "}>
    <div className="h-full relative min-h-[100vh] flex flex-col  items-center justify-center bg-black ">
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          top: "50%",
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <source
          src="https://res.cloudinary.com/dvmrtjjay/video/upload/v1732694788/Vide%CC%81o_Finance_climat_krmfbq.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute bottom-40  right-8 p-2">
          <button onClick={toggleMute} className="static border-1 border-rounded-full border-white">
            <Image
              src={isMuted ? "/sound-off.webp" : "/sound-on.webp"}
              alt="Mute Toggle"
              width={30}
              height={30}
            />
          </button>
        </div>
    </div>
  </div>
  );
}

export default Hero;
