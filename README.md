<img src="https://github.com/RuggiesPizza/ElCoyote/blob/main/images/ElCoyoteBanner.png" width="750">

A series of contracts and scripts to help any token migrate the Sonic border. 
These contracts are unadited, and to be used at your own risk.

# Developer Notes 
## Initial Setup
### Install Requirements
```sh
git clone https://github.com/RuggiesPizza/ElCoyote.git
cd ElCoyote
npm install 
```

### Initialize Hardhat
```sh
cp sample.hardhat.config.ts hardhat.config.ts
```

### Compile Contracts 
```sh
npx hardhat compile
```

## Working with Contracts
The contracts are seperated by categories, and will each come with their own README for further information.
- [LayerZero Token](https://github.com/RuggiesPizza/ElCoyote/blob/dev/contracts/OFT/TEST.sol)
- [Migrate to new Lz Token](https://github.com/RuggiesPizza/ElCoyote/blob/dev/contracts/Migration/Token2TokenMigration.sol)