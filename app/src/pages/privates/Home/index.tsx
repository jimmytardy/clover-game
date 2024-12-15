import { useWallet } from "@solana/wallet-adapter-react";
import { WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  const { publicKey } = useWallet();

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1em' }}>
        Je suis connecté avec l'adresse: <b>{publicKey?.toString()}</b>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <WalletDisconnectButton />
      </div>
    </div>
  );
}
