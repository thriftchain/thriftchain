import React from 'react';
import AllRoutes from './config/AllRoutes';
import '@rainbow-me/rainbowkit/styles.css';
import {darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig} from 'wagmi';
import { polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const torochain = {
  id: 0x238c, // You can assign a unique identifier as needed
  name: "Toro Testnet",
  network: "Toronet Testnet", 
  iconUrl: "https://example.com/icon.svg", // Update the icon URL if necessary
  iconBackground: "#fff", // Update icon background color if needed
  nativeCurrency: {
    decimals: 18, 
    name: "TORO", // Name of the native currency
    symbol: "TORO", // Symbol for the native currency
  },
  rpcUrls: {
    public: {
      http: ["https://testnet.toronet.org/rpc/"], 
    },
    default: {
      http: ["https://testnet.toronet.org/rpc/"], 
    },
  },
  blockExplorers: {
    default: {
      name: "Toronet",
      url: "https://testnet.toronet.org/", 
    },
  },
  contracts: {
    // Add contract addresses if needed
  },
  testnet: true, 
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    // mainnet,
    polygon,
    torochain
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'greenreward',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});





const App = () => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}
        theme={darkTheme({
          accentColor: 'rgb(6,14,55)'
        })}>
    <div>
      <AllRoutes />
    </div>
    </RainbowKitProvider>
    </WagmiConfig>

  );
};

export default App;
