import { ethers } from "hardhat";

async function main() {

  const lmaoAddr = "0xb0BaA314aD4a6f863f0F6106912ae09b1931d965";
  const Wlmao = await ethers.deployContract("Wlmao", [lmaoAddr]);

  await Wlmao.waitForDeployment();

  console.log(
   `lmao deployed to: ${Wlmao.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
