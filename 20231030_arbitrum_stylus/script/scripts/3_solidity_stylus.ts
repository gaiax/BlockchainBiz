import { ethers, network } from "hardhat";
require('dotenv').config();

async function main() {

  const provider = new ethers.JsonRpcProvider(process.env.RPC)
  const stylusContractAddress = process.env.CONTRACT_ADDRESS as string;
  const solidityContractAddress = process.env.SOLIDITY_CONTRACT_ADDRESS as string;
  const privateKey = "0x" + process.env.PRIVATE_KEY as string;

  const signer = new ethers.Wallet(privateKey, provider);

  const iface = new ethers.Interface([
    "function numberSol() external view returns (uint256)",
    "function incrementSolContract(address account) external"
  ]);

  const solidityContract = new ethers.Contract(
    solidityContractAddress,
    iface,
    signer
  );

  const stylusContract = new ethers.Contract(
    stylusContractAddress,
    iface,
    signer
  );

  console.log("Before execute incrementSolContract : ", await solidityContract.numberSol());

  const tx = await stylusContract.incrementSolContract(solidityContractAddress);
  console.log("Function is executed in this txhash : ", tx.hash);
  await tx.wait(1);

  console.log("After execute incrementSolContract : ", await solidityContract.numberSol());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
