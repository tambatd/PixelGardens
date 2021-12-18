import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Mainnet, DAppProvider, Config, Mumbai } from "@usedapp/core";

const config: Config = {
  readOnlyChainId: Mumbai.chainId,
  readOnlyUrls: {
    [Mumbai.chainId]:
      "https://polygon-mumbai.infura.io/v3/28f924259d824e56a5d444cffd2df7b8",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

/*
Here's flowers for you;
Hot lavender, mints, savoury, marjoram;
The marigold, that goes to bed wi' the sun
And with him rises weeping: these are flowers
Of middle summer, and I think they are given
To men of middle age.
*/
