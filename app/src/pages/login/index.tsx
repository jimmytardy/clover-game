import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletName,
  SolflareWalletName,
} from "@solana/wallet-adapter-wallets";

export default function Login() {
  return <WalletMultiButton />;
}
