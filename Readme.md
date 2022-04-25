# @mantial/react-minting-sdk

Source code at https://github.com/mantial/react-minting-sdk

## Installation

    npm install @mantial/react-minting-sdk

## Build

    npm run rollup

## Testing library locally

First, generate the react-minting-sdk-version.tgz file with:

    npm pack

Move .tgz to the target project

    npm install react-minting-sdk-version.tgz

## Usage

The MinterContextProvider must enclose the Mantial components used. For example:

```
import React from 'react';
import {MinterContextProvider} from '@mantial/react-minting-sdk';

const customMantialConfig = {
    //your custom mantial config
}

function App(){
    return(
        <MinterContextProvider config={{...customMantialConfig}}>
            <Router />  //the rest of your app...
        </MinterContextProvider>
    )
}

export default App;
```

Then, you are able to use our components somewhere. For example:

```
import React from 'react';
import {Minter} from '@mantial/react-minting-sdk';

function Form(){
    return(
        <div>
            <h2>Mint your NFT</h2>
            <Minter />
        </div>
    )
}

export default App;
```

## Mantial configuration

Under the hood this use Material-UI to apply styling. Be sure to read documentation if you want to customize this 100%

```
{
    network: 'ropsten' | 'ethereum', //network where the iframe is going to run, being "ethereum" mainnet and "ropsten" testnet.
    collectionSlug: string //slug for your collection. Use the same that you use to register it, you MUST to put the slug correctly, otherwise it won't work,
    amount: string //The amount of NFTs you want the user to be able to mint,
    showTitle: boolean //if you want to show the title above the mint button,
    amountSelector: boolean //if you want the user to be able to select how many NFTs mint(max 5),
    saleSelector: boolean //if you want the user to be able to see the different active sales,
    saleId: string //use this in case you want to create a mint button that works with a particular sale (without the selector) so that it only allows users to mint for a particular sale,
    showErrors: boolean //if you want the user to be able to see the different errors that can occur in the minting process,
    theme: any, // ---> [MUI v5 theme](https://mui.com/material-ui/customization/theming/),
    styles: { // ---> [allow inline styles applied as 'sx' to MUI components](https://mui.com/system/the-sx-prop/)
        button: any,
        mintButton: any,
        switchNetworkButton: any,
        container: any,
        title: any,
        error: any,
        amount: any,
        iconButton: any,
        texts: any,
        success: any,
        minting: any,
        minterContainer: any,
        description: any,
        installMetamaskButton: any,
    },
    texts: {
        title: string //title you want to show above the mint button,
        minting: string //text you want to show while the minting is happening,
        success: string //text you want to show if the mint was success,
        buy: string //text you want to show on the mint button "Buy" by default,
        description: string //a description for some details you want to show,
        switchNetwork: string //text to show when the network is not the correct "Switch Network" by default,
        installMetamask: string //text to show when metamask is not installed "Install Metamask" by default,
    },
};
```
