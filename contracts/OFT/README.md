<img src="https://github.com/RuggiesPizza/ElCoyote/blob/main/images/ElCoyoteBanner.png" width="750">

A simple OFT token that can easily be modified and launched for your sonic migration

# Developer Notes 
You must deploy the OFT token first, and then pass both contract addresses into this migrator.
Users will then have to set approval to this migration contract, then use `exchangeOld2New` to
convert as many coins as they define. As an admin you can close conversion in either direction or
both if desired.

Change the file and contract names to match your token. Change the name and ticker in the OFT constructor.
After set how many tokens you want to mint, they will all be minted on creation and no new tokens will be able
to be minted. Delegrate address will receive all the tokens, this is designed for when I have to help projects
deploy and I can mint the tokens directly to them and skip the step of sending them directly