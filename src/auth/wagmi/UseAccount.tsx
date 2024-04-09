import { useAccount } from "wagmi";

export default function UseAccount() {
  const { isConnected } = useAccount();
  return isConnected;
}
