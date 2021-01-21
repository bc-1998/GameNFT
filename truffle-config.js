const { projectId, mnemonic } = require('./secrets.json');
var HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`);// Url to an Ethereum Node
      },
      network_id: '3',
    },
    kovan: {
      provider: () => new HDWalletProvider(mnemonic, `https://kovan.infura.io/v3/${projectId}`),
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: '42'
    }
  },
  compilers: {
    solc: {
      optimizer: { //optimize space, when enabled set to true, it may take longer time to compile than otherwise.
        enabled: true,
        runs: 200
      }
    }
  }
}
