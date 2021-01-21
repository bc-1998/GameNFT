pragma solidity >=0.5.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "@openzeppelin/contracts/drafts/Counters.sol";


contract GameNFT is ERC721Full{
    
    Counters.Counter private _nftId;

    constructor() ERC721Full("GameNFT", "GM") public {
    }
     function awardPlayer(address player) public returns (uint256){
         _nftId.increment();
         uint256 newId = _nftId.current();
         _mint(player, newId);
         return newId;
     }   
    
}