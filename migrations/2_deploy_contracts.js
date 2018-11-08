const WSPXCrowdsale = artifacts.require('./WSPXCrowdsale.sol');

module.exports = (deployer) => {
    //http://www.onlineconversion.com/unix_time.htm
    var owner =  "0x1a9F3Ac5069262E12140d4d4ddaF182312DFd2F3";
    var wallet = "0x608AB6c548Ad2667cA2bB14477a673CeE7Ede7D1";


    deployer.deploy(WSPXCrowdsale, owner, wallet);
};
