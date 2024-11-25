import { ethers, hardhatArguments, artifacts } from "hardhat";

let MyOFT: any

async function main() {
  if (hardhatArguments.network === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  const provider = ethers.provider;
  const [deployer] = await ethers.getSigners();
  // TODO: FILL THIS OUT
  const lzEndpoint = '';
  const delegate = ''

  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await provider.getBalance(deployer.getAddress())).toString());

  //MyOFT Contract
  MyOFT = await ethers.getContractFactory("MyOFT");

  MyOFT = await MyOFT.deploy(lzEndpoint, delegate);
  await MyOFT.waitForDeployment();
  console.log("MyOFT Deployed");

  let MyOFTAddress = await MyOFT.getAddress();

  saveFrontendFiles(MyOFTAddress);
  genDeploymentFiles(lzEndpoint, delegate);
  getVerification(MyOFTAddress);
}

function saveFrontendFiles(MyOFTAddress: string) {
  const fs = require("fs");
  const contractsDir = __dirname + "";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/abi/MyOFT-addresses.json",
    JSON.stringify({ MyOFT: MyOFTAddress}, undefined, 2)
  );

  let MyOFTArtifact = artifacts.readArtifactSync("MyOFT");

  fs.writeFileSync(
    contractsDir + "/abi/MyOFT.json",
    JSON.stringify(MyOFTArtifact, null, 2)
  );
}

function genDeploymentFiles(lzEndpoint: string, delegate: string) {
  const fs = require("fs");
  const contractsDir = __dirname + "";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  // MyOFTArtifact
  let data = `module.exports = ['${lzEndpoint}', '${delegate}'];`;
  fs.writeFileSync(
    contractsDir + "/args/MyOFT.ts", 
    data
  );
}

function getVerification(MyOFTAddress: string) {
  let data = "npx hardhat verify --network " + hardhatArguments.network + " --constructor-args ./scripts/args/MyOFT.ts " + MyOFTAddress;
  console.log(data);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });