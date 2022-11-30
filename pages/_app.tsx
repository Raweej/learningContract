import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Chain,
  configureChains,
  createClient,
  WagmiConfig,
  chain,
} from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const bkcTestnetConfig: Chain = {
  id: 25925,
  name: "BKC Testnet",
  network: "BKC Testnet",
  nativeCurrency: {
    name: "KUB coin",
    symbol: "KUB",
    decimals: 18,
  },
  rpcUrls: {
    default: "https://rpc-testnet.bitkubchain.io",
  },
  blockExplorers: {
    default: {
      name: "BKCscan",
      url: "https://testnet.bkcscan.com",
    },
  },
  testnet: true,
};

const { chains, provider, webSocketProvider } = configureChains(
  [bkcTestnetConfig],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: chain.rpcUrls.default,
      }),
    }),
  ]
);

const client = createClient({
  autoConnect: true,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
