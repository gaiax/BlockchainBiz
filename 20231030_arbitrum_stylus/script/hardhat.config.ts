import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    stylus: {
      url: "https://stylus-testnet-explorer.arbitrum.io/",
      chainId: 23011913,
    },
  },
};

export default config;
