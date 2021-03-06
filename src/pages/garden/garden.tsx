import React, { useState, useEffect } from "react";
import "./garden.module.css";
import { ThirdwebSDK } from "@3rdweb/sdk";
import type { NFTModule, NFTMetadataOwner } from "@3rdweb/sdk";

import { useEtherBalance, useEthers } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import MainGarden from "../../components/garden/garden";
const Garden = () => {
  const [flowers, setFlowers] = useState<any[]>([]);
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const etherBalance = useEtherBalance(account);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const contractAddress = "0xB21Dc0a6f586B6A0571Af7c17429cF00610a80C8"; // your contract address from step 2
  const sdk = new ThirdwebSDK(
    "https://polygon-mumbai.infura.io/v3/28f924259d824e56a5d444cffd2df7b8"
  );

  useEffect(() => {}, []);

  const getFlowers = async () => {
    const nftModule: any = sdk.getNFTModule(contractAddress);
    const nftListWithOwnerAddress: NFTMetadataOwner[] =
      await nftModule.getAllWithOwner();
    //const nftListOwnedOnly: any = await nftModule.getOwned(account);
    //const owned = await nftModule.getOwned(account);

    setFlowers(nftListWithOwnerAddress);
    console.log(nftListWithOwnerAddress);
  };

  return (
    <div className="App">
      <div>
        <div className="Items">
          <button className="button" onClick={() => activateBrowserWallet()}>
            Connect
          </button>
          <button className="button" onClick={() => deactivate()}>
            Disconnect
          </button>
          <button className="button" onClick={() => getFlowers()}>
            get Flowers
          </button>
        </div>
        {account && <p> {account}'s Garden</p>}
        <hr></hr>
        <MainGarden />
        {flowers.map((flower) => (
          <div>
            <img className="flower" src={flower.metadata.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Garden;
