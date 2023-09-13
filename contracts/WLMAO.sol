// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Wlmao is ERC20 {
    IERC20 public lmao;

    constructor(address _lmao) ERC20("Wraped lmao", "WLMO") {
        lmao = IERC20(_lmao);
    }

    function depositLmao(uint _amount) external {
        bool status = lmao.transferFrom(msg.sender, address(this), _amount);
        require(status, "failed to transfer");
        uint mintableAmt = (_amount * 92) / 100;
        _mint(msg.sender, mintableAmt);
    }

    function withdrawLmao(uint _amount) external {
        require(balanceOf(msg.sender) >= _amount, "LMAO: Insufficient balance");
        _burn(msg.sender, _amount);
        lmao.transfer(msg.sender, _amount);
    }
}
