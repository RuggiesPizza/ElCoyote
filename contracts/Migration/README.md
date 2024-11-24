<img src="https://github.com/RuggiesPizza/ElCoyote/blob/main/images/ElCoyoteBanner.png" width="750">

Migrate users 1:1 from your ERC-20 token on fantom into an OFT compliant ERC-20 token on fantom.
Allowing you (after configuration) to use the Ruggie's LayerZero bridge

# Developer Notes 
You must deploy the OFT token first, and then pass both contract addresses into this migrator.
Users will then have to set approval to this migration contract, then use `exchangeOld2New` to
convert as many coins as they define. As an admin you can close conversion in either direction or
both if desired.