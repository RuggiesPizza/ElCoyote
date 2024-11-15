// SPDX-License-Identifier: MIT
/**************************************************************************************************** 
Notice: This contract is intended to assist you in migrating from a standard ERC-20 token to a 0FT.
This can also be used after migrating to sonic, and you want to convert from an 0FT to a custom logic ERC-20.
You will have to transfer new tokens into this contract, so that it can trade users for their old ones.

Inspired by a BeethonX contract by Franzns: 
https://github.com/beethovenxfi/beethovenx-token/blob/main/contracts/token/SonicBeetsMigrator.sol
*****************************************************************************************************/
pragma solidity ^0.8.24;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Ownable} from "@openzeppelin/contracts//access/Ownable.sol";

contract Token2TokenMigration is Ownable {
    address public immutable newToken;
    address public immutable oldToken;
    bool public new2oldEnabled;
    bool public old2newEnabled;

    // Custom Errors
    error MigrationPathDisabled();

    /// @param _oldToken contract address for the original token
    /// @param _newToken contract address for the new token
    constructor(
        address _oldToken,
        address _newToken
    ) Ownable(msg.sender) {
        oldToken = _oldToken;
        newToken = _newToken;
    }

    /// @dev Used to turn on/off migrations from Old token to New token
    function toggleOld2new() external onlyOwner {
        old2newEnabled = !old2newEnabled;
    }

    /// @dev Used to turn on/off migrations from New token to Old token
    function toggleNew2old() external onlyOwner {
        new2oldEnabled = !new2oldEnabled;
    }

    /// @dev Use to exchange old tokens for new
    /// @param _amount The amount of old tokens to exchange for new tokens
    function exchangeOld2New(uint256 _amount) public {
        if(!old2newEnabled) { revert MigrationPathDisabled(); }
        IERC20(oldToken).transferFrom(msg.sender, address(this), _amount);
        IERC20(newToken).transfer(msg.sender, _amount);
    }

    /// @dev Use to exchange new tokens for old
    /// @param _amount The amount of new tokens to exchange for old tokens
    function exchangeNew2Old(uint256 _amount) public {
        if(!new2oldEnabled) { revert MigrationPathDisabled(); }
        IERC20(newToken).transferFrom(msg.sender, address(this), _amount);
        IERC20(oldToken).transfer(msg.sender, _amount);
    }

    /// @dev Withdraw old tokens from contract
    function withdrawOldToken() public onlyOwner {
        IERC20(oldToken).transfer(msg.sender, IERC20(oldToken).balanceOf(address(this)));
    }

    /// @dev Withdraw new tokens from contract
    function withdrawNewToken() public onlyOwner {
        IERC20(newToken).transfer(msg.sender, IERC20(newToken).balanceOf(address(this)));
    }
}