import { http, createConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { walletConnect } from "wagmi/connectors";

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

export const config = createConfig({
  chains: [mainnet, polygon, optimism, arbitrum],

  // Flag to indicate if the config is being used in a server-side rendering environment.
  // defaults to false
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
  },
  connectors: [
    walletConnect({
      projectId: "3fcc6bba6f1de962d911bb5b5c3dba68",
    }),
  ],
});
