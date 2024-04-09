import { WagmiProvider } from "wagmi";
import { config } from "./config";

import type { ReactNode } from "react";

export default function WagmiSessionProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
}
