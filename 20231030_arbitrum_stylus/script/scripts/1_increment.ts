import { ethers, network } from "hardhat";
require('dotenv').config();

async function main() {

  const provider = new ethers.JsonRpcProvider(process.env.RPC)
  const contractAddress = process.env.CONTRACT_ADDRESS as string;
  const privateKey = "0x" + process.env.PRIVATE_KEY as string;

  const signer = new ethers.Wallet(privateKey, provider);

  const iface = new ethers.Interface([
    "function number() external view returns (uint256)",
    "function increment() external",
  ]);

  const contract = new ethers.Contract(
    contractAddress,
    iface,
    signer
  );

  console.log("Before execute increment : ", await contract.number());

  const tx = await contract.increment();
  console.log("Function is executed in this txhash : ", tx.hash);
  await tx.wait(1);

  console.log("After execute increment : ", await contract.number());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
