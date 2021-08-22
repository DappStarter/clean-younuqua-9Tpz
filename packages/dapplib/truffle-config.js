require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame sword stuff response stick solid imitate prison equal gauge'; 
let testAccounts = [
"0xbe035cea38b9e20df9cca6ac0a902f1a5901fca73bf2906cc5b6727d265df3a3",
"0x5030ed7a6cd00e437b552d5e4af8f4eb1ef5c631db5e4c94b27c652d3e2f5dfa",
"0x4328903df89ac689f237261b1b5ba394b90b4eca336e9c504ca30b35f5b7020b",
"0xbf2ced503e0667150d7eaff34cb4bc50c3266e549c646e9261ab088fdf7f4647",
"0x9c71a7acbe47ae86506da3f0088d1dd628d4a225e393245e498e5d6e6c282f15",
"0x7a545436c09ace46e4ca819992e8b240e151eca8f9b626d8852fcdc123caf27e",
"0xf223ab3c86ec3ff5dd6563299d6b640924b1a1fe7d9427507068d62f30730640",
"0x9caf663fe0a239388f8b12630af38e7484e66c4677fa6097d2a152f3d884b4a2",
"0x0e54203713197452444184cb39bac75ca2a859b81ed7c22e3039b4405505c0da",
"0xe8c2314d99d23ec539db113214348fae7685193f2b8a3f9a6b8a3f2b74038825"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

