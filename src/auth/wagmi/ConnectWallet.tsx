import Account from "@/wagmi/Account";
import WalletOptions from "@/wagmi/WalletOptions";
import { useAccount } from "wagmi";

export default function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
}
