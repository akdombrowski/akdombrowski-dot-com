import MDX from "@next/mdx";
const withMDX = MDX({
  extension: /\.(md|mdx)$/,

  options: {
    /* otherOptions… */
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stackoverflow.com",
        port: "",
        pathname: "/users/flair/5527213.png",
      },
    ],
  },
});

export default nextConfig;
