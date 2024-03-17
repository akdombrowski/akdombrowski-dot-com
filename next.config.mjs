import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    urlImports: [
      "https://www.youtube.com/embed/fX5U50VGxtg?si=d2oguHaC6vzlqIFY",
    ],
  },
};

export default withNextVideo(nextConfig, { folder: "src/videos" });
