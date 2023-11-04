import { ethers, network } from "hardhat";
require('dotenv').config();

async function main() {

  const provider = new ethers.JsonRpcProvider(process.env.RPC)
  const contractAddress = process.env.CONTRACT_ADDRESS as string;

  const iface = new ethers.Interface([
    "function substring(string calldata text) external view returns (string memory)"
  ]);

  const contract = new ethers.Contract(
    contractAddress,
    iface,
    provider
  );

  const testString = "Hello world";

  console.log("Text before substring : ", testString);
  const tx = await contract.substring(testString);
  console.log("Text after substring : ", tx);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
