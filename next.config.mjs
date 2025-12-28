// import MDX from "@next/mdx";
// const withMDX = MDX({
//   extension: /\.(md|mdx)$/,
//   options: {
//     /* otherOptions… */
//   },
// });

// /** @type {import('next').NextConfig} */
// module.exports = {
//   // Configure `pageExtensions` to include MDX files
//   pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "stackoverflow.com",
//         port: "",
//         pathname: "/users/flair/**",
//       },
//     ],
//     qualities: [25, 50, 75, 100],
//   },

//   // https://nextjs.org/docs/app/api-reference/next-config-js/logging
//   logging: {
//     // You can configure the logging level and whether the full URL is logged to the console when running Next.js in development mode.
//     // Currently, logging only applies to data fetching using the fetch API. It does not yet apply to other logs inside of Next.js.
//     fetches: {
//       fullUrl: true,
//     },
//     // https://nextjs.org/docs/app/api-reference/next-config-js/onDemandEntries
//     onDemandEntries: {
//       // period (in ms) where the server will keep pages in the buffer
//       maxInactiveAge: 1 * 1000,
//       // number of pages that should be kept simultaneously without being disposed
//       pagesBufferLength: 12,
//     },
//   },

//   serverExternalPackages: ["puppeteer"],
//   experimental: {
//     urlImports: [
//       "https://wakatime.com/badge/user/0ff1bf94-98b4-465f-8b63-a51fb5151092.svg",
//       "https://img.shields.io/youtube/views/fX5U50VGxtg",
//     ],
//   },

//   async headers() {
//     return [
//       {
//         source: "/(.*)",
//         headers: [
//           {
//             key: "X-Powered-By",
//             value: "Anthony Dombrowski",
//           },
//         ],
//       },
//     ];
//   },
//   // trailingSlash: true,
//   poweredByHeader: false,

//   webpack: (config) => {
//     // Grab the existing rule that handles SVG imports
//     const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));

//     config.module.rules.push(
//       // Reapply the existing rule, but only for svg imports ending in ?url
//       {
//         ...fileLoaderRule,
//         test: /\.svg$/i,
//         resourceQuery: /url/, // *.svg?url
//       },
//       // Convert all other *.svg imports to React components
//       {
//         test: /\.svg$/i,
//         issuer: fileLoaderRule.issuer,
//         resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
//         use: ["@svgr/webpack"],
//       },
//     );

//     // Modify the file loader rule to ignore *.svg, since we have it handled now.
//     fileLoaderRule.exclude = /\.svg$/i;

//     return config;
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
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

    urlImports: [
      "https://wakatime.com/badge/user/0ff1bf94-98b4-465f-8b63-a51fb5151092.svg",
    ],
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

  webpack: (config) => {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
