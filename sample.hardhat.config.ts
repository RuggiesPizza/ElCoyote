import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const PRIVATE_KEY = ''

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.22",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true,
    },
    localhost: {
      url: "http://localhost:8545",
      chainId: 1337,
      allowUnlimitedContractSize: true,
    },
    arbitrum: {
      url: "https://arbitrum.llamarpc.com",
      chainId: 42161,
      accounts: [`${PRIVATE_KEY}`]
    },
    fantom: {
      url: "https://rpc.ftm.tools/",
      chainId: 250,
      accounts: [`${PRIVATE_KEY}`]
    },
    testnet_fantom: {
      url: "https://rpc.testnet.fantom.network/",
      chainId: 0xfa2,
      accounts: [`${PRIVATE_KEY}`]
    },
    sonic_test: {
      url: "https://rpc.sonic.fantom.network/",
      accounts: [`${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    // // Fantom
    apiKey: ""
    // Arbitrum
    // apiKey: ""
  },
  gasReporter: {
    currency: 'USD',
    L1: "fantom",
    coinmarketcap: "",
  }
};

export default config;
