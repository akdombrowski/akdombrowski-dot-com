import MDX from "@next/mdx";
const withMDX = MDX({
  extension: /\.(md|mdx)$/,

  options: {
    /* otherOptions… */
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stackoverflow.com",
        port: "",
        pathname: "/users/flair/**",
      },
    ],
  },
  // https://nextjs.org/docs/app/api-reference/next-config-js/logging
  logging: {
    // You can configure the logging level and whether the full URL is logged to the console when running Next.js in development mode.
    // Currently, logging only applies to data fetching using the fetch API. It does not yet apply to other logs inside of Next.js.
    fetches: {
      fullUrl: true,
    },
    // https://nextjs.org/docs/app/api-reference/next-config-js/onDemandEntries
    onDemandEntries: {
      // period (in ms) where the server will keep pages in the buffer
      maxInactiveAge: 1 * 1000,
      // number of pages that should be kept simultaneously without being disposed
      pagesBufferLength: 12,
    },
  },
  experimental: {
    serverComponentsExternalPackages: ["puppeteer"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Powered-By",
            value: "Anthony Dombrowski",
          },
        ],
      },
    ];
  },
  // trailingSlash: true,
  poweredByHeader: false,
});

export default nextConfig;
