import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { SolanaWalletProvider } from "./solana.provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SolanaWalletProvider>
      <App />
    </SolanaWalletProvider>
  </StrictMode>
);
