# LMAO & Wrapped LMAO smart contract

This repository contains two Ethereum smart contracts written in Solidity: `Lmao.sol` and `Wlmao.sol`. These contracts interact with each other and provide functionality related to the `LMAO` ERC-20 token. Below, you'll find a brief overview of each contract and how they work together.

## Lmao.sol

### Contract Overview

- **Name**: `Lmao`
- **Symbol**: `LMO`

The `Lmao` contract is an ERC-20 token contract representing the "LMAO" token. It inherits from the OpenZeppelin `ERC20` contract, which provides standard ERC-20 functionality.

### Features

1. **Initialization**: When deployed, this contract is initialized with the `LMAO` token's name, symbol, and an initial supply of 1,000,000 LMAO tokens.

2. **Transfer Fees**: A custom `_transfer` function is implemented to handle transfers. It deducts a transfer fee of 8% from each transfer and sends it to the contract owner.

## Wlmao.sol

### Contract Overview

- **Name**: `Wlmao`
- **Symbol**: `WLMO`

The `Wlmao` contract is a wrapper contract for the `LMAO` token. It allows users to deposit `LMAO` tokens in exchange for wrapped `WLMO` tokens and vice versa.

### Features

1. **Initialization**: When deployed, this contract takes the address of an existing `LMAO` contract as a parameter and initializes the `Wlmao` contract with the name "Wrapped LMAO" and the symbol "WLMO."

2. **Deposit LMAO**: Users can deposit their `LMAO` tokens into this contract. The contract will transfer the tokens from the user's address to the contract and mint an equivalent amount of wrapped `WLMO` tokens to the user, reducing the total supply of `LMAO` by 8% as a fee.

3. **Withdraw LMAO**: Users can withdraw their wrapped `WLMO` tokens and exchange them for `LMAO` tokens. The contract will burn the wrapped tokens from the user's address and transfer the equivalent amount of `LMAO` tokens to the user.

## Interactions

These contracts can be used together to wrap and unwrap `LMAO` tokens. Users can deposit `LMAO` into the `Wlmao` contract to receive wrapped `WLMO` tokens and vice versa. The `Lmao` contract charges an 8% transfer fee on each transfer, with the fee going to the contract owner.

For detailed usage instructions and contract deployment steps, please refer to the contract deployment and interaction scripts.

## Verified Contracts

Click the contracts below to access the verified contracts on sepolia ethercan.

- [LMAO](https://sepolia.etherscan.io/address/0xb0BaA314aD4a6f863f0F6106912ae09b1931d965#code)
- [WLMAO](https://sepolia.etherscan.io/address/0x0510C89013256811D0A43B74970DCe3CfB2aFF82#code)
