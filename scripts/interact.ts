import { ethers } from "hardhat";

async function main() {
    const wlmaoAddr = "0x0510C89013256811D0A43B74970DCe3CfB2aFF82";
    const wlmao = await ethers.getContractAt("IWlmao", wlmaoAddr);

    const signer = await ethers.getImpersonatedSigner("0x764693DD666E8dD9275CDE8F05C6B07446B1d941");

    const depositAmt = ethers.parseEther("1");

    await wlmao.connect(signer).depositLmao(depositAmt);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
