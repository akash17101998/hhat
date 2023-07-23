import { HardhatRuntimeEnvironment } from "hardhat/types";

async function main(hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts, getUnnamedAccounts } = hre;
 
    const unnamedAccounts = await getUnnamedAccounts();
    
    const deployer = unnamedAccounts[0];

    const evoting = await deployments.deploy('Lock', {
        contract: 'Lock',
        from: deployer,
        args: [1690104506235],
        log: true,
        skipIfAlreadyDeployed: true,
    });
}

export default main;