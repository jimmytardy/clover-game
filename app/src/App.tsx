import { useWallet } from "@solana/wallet-adapter-react";
import "./App.css";
import Login from "./pages/login";
import Home from "./pages/privates/Home";

function App() {
  const { connected } = useWallet();

  return connected ? <Home /> : <Login />;
}

export default App;
