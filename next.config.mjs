import { withNextVideo } from "next-video/process";
import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  experimental: {
    urlImports: [
      "https://www.youtube.com/embed/fX5U50VGxtg?si=d2oguHaC6vzlqIFY",
    ],
  },
};

const nextVideoConfig = withNextVideo(nextConfig, { folder: "src/videos" });

const mdxConfig = withMDX(nextConfig);

const allConfig = withMDX(nextVideoConfig);

export default allConfig;
