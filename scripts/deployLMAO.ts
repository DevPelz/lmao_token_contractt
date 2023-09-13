import { ethers } from "hardhat";

async function main() {

  const lmao = await ethers.deployContract("LMAO", []);

  await lmao.waitForDeployment();

  console.log(
   `lmao deployed to: ${lmao.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
