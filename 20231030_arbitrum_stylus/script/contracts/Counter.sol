pragma solidity ^0.8.12;

contract Counter {
    uint256 public numberSol;

    function incrementSol() public {
        numberSol++;
    }

    address public executer;

    function gasTest() public returns(uint256[] memory) {
        uint256[] memory result = new uint256[](100);
        for(uint i = 0;  i < 100; i++ ){
            result[i] = i;
        }
        executer = msg.sender;
        return result;
    }
}