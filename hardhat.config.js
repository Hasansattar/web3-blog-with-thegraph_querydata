require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const INFURA_URL_ID=`https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT}`;
const PRIVATE_KEY=`0x${process.env.PRIVATE_KEY_1}`;

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // mumbai: {
    //   url: "https://rpc-mumbai.matic.today",
    //   accounts: [process.env.pk]
    // },
    // polygon: {
    //   url: "https://polygon-rpc.com/",
    //   accounts: [process.env.pk]
    // }
    rinkeby:{
      url:INFURA_URL_ID,
      accounts:[PRIVATE_KEY]
    },
  }
};