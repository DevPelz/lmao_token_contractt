// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Lmao is ERC20("LMAO", "LMO") {
    address immutable owner;
    uint constant initialMint = 1000_000 * 1e18;

    constructor() {
        owner = msg.sender;
        _mint(owner, initialMint);
    }

    function _transfer(
        address from,
        address to,
        uint256 value
    ) internal override {
        uint tranferFees = (value * 8) / 100;
        uint tranferAmt = value - tranferFees;

        super._transfer(from, to, tranferAmt);
        super._transfer(from, owner, tranferFees);
    }
}
