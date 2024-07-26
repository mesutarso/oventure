import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oventure.mechacktambwe.me",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withNextVideo(nextConfig);
