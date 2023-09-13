import { ethers } from "hardhat";

async function main() {
    const wlmaoAddr = "0x0510C89013256811D0A43B74970DCe3CfB2aFF82";
    const lmaoAddr = "0xb0BaA314aD4a6f863f0F6106912ae09b1931d965";

    const wlmao = await ethers.getContractAt("IWlmao", wlmaoAddr);
    const wlmaoErc20 = await ethers.getContractAt("IERC2", wlmao);
    const lmao = await ethers.getContractAt("IERC2", lmaoAddr )

    const signer = await ethers.getImpersonatedSigner("0x764693DD666E8dD9275CDE8F05C6B07446B1d941");

    const approveAmt = ethers.parseEther("100000000000");
    const depositAmt = ethers.parseEther("1");

    console.log("===============approving===============");
    await lmao.connect(signer).approve(wlmao,approveAmt);
    console.log(`allowancee is: ${await lmao.allowance(signer, wlmao)}`);
    console.log("===============approved===============");

    console.log(`Lmao balance of siigner before depositing: ${await lmao.balanceOf(signer)}`);
    console.log(`Wlmao balance of siigner before depositing: ${await wlmaoErc20.balanceOf(signer)}`);

    console.log("===============depositing===============");

    await wlmao.connect(signer).depositLmao(depositAmt);

    console.log(`Lmao balance of siigner after depositing: ${await lmao.balanceOf(signer)}`);
    console.log(`Wlmao balance of siigner after depositing: ${await wlmaoErc20.balanceOf(signer)}`);

    console.log("===============deposited===============");


    console.log(`Lmao balance of siigner before swapping: ${await lmao.balanceOf(signer)}`);
    console.log(`Wlmao balance of siigner before swapping: ${await wlmaoErc20.balanceOf(signer)}`);

    console.log("===============swaping===============");

    const swap = await wlmaoErc20.balanceOf(signer);
    await wlmao.connect(signer).withdrawLmao(swap);

    
    console.log(`Lmao balance of siigner after swapping: ${await lmao.balanceOf(signer)}`);
    console.log(`Wlmao balance of siigner after swapping: ${await wlmaoErc20.balanceOf(signer)}`);

    console.log("===============swapped===============");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
