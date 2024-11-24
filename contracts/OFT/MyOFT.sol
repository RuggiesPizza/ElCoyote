// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { OFT } from "@layerzerolabs/oft-evm/contracts/OFT.sol";

contract MyOFT is OFT {
    constructor(
        address _lzEndpoint,
        address _delegate
    ) OFT("TEST Token", "TEST", _lzEndpoint, _delegate) Ownable(_delegate) {}
}