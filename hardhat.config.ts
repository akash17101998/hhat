import { HardhatUserConfig } from "hardhat/config";
import 'hardhat-deploy';

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    local: {
      url: 'http://127.0.0.1:8448'
    }
  },
  paths: {
    tests: "./test",
    cache: "./cache",
    sources: "./contracts",
    deploy: "./scripts",
    artifacts: "./artifacts",
    deployments: "./deployments",
}
};

export default config;
