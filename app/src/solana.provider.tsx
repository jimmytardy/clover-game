import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { FC } from "react";
import '@solana/wallet-adapter-react-ui/styles.css';
type Props = {
  readonly children: React.ReactNode;
};

export const SolanaWalletProvider: FC<Props> = ({ children }) => {
  const wallets = [new UnsafeBurnerWalletAdapter()];
  return (
    <ConnectionProvider
      endpoint={clusterApiUrl(import.meta.env.VITE_SOLANA_CLUSTER)}
    >
      <WalletProvider wallets={wallets} autoConnect={true}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
