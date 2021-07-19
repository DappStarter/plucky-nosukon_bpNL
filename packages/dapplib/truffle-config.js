require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name rescue saddle huge hidden kiwi metal gasp'; 
let testAccounts = [
"0x65cf2ae39003dcd967ec7f9f482b9892f29e9b670629efdc4068dbeb3887e08c",
"0xaed42586e6d85e714ca558568dc9e74601beb245e8d802986b7fc8bd0d15c810",
"0x74af6289239bb574a0c0f83f2da0ef966bf1f4e57aa0960431a8ba338830c7c5",
"0x93bbb69cf0b4eff712e1e5f0154aeb7c1939b62d58cfa1ee989a1f721b9cd9cb",
"0xfc0e5b6c63c28dc8c7e12a44d16a5caa96b4402f4832b3254f5e598cdbfbe001",
"0xfd680399057874e08c168c9240500cdee25d241af0eddd89569b60e55d747605",
"0x294fca9cfa834f82452cb6c87f4e5b13b9f9529069e2a25faec66aca12d54a9b",
"0x582704c223ec830f9f394ba61386e336d6c9679c70a7cd960f2809f5a2c8e3a3",
"0xcfdd59b80bea209f47c48f8eae74cd3ace14554afe39dba07457357c5eeec5d7",
"0x610d656cc578fb75c27259987b32fda92267b2c0a306dcf5431b8907c065bd7e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


