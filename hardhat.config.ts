import { HardhatUserConfig } from "hardhat/config";
import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true,
    },
    localhost: {
      chainId: 1337,
      allowUnlimitedContractSize: true,
    },
  },
  solidity: "0.8.17",
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

export default config;
