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

    {
        network: 'ropsten' | 'ethereum';
        collectionSlug: string;
        amount?: number;
        showTitle?: boolean;
        amountSelector?: boolean;
        saleSelector?: boolean;
        saleId?: number;
        showDetails?: boolean;
        showErrors?: boolean;
        theme?: any; // ---> MUI v5 theme
        styles?: { // ---> allow inline styles applied as 'sx' to MUI components
            button?: any;
            mintButton?: any;
            switchNetworkButton?: any;
            container?: any;
            title?: any;
            error?: any;
            amount?: any;
            iconButton?: any;
            texts?: any;
            success?: any;
            minting?: any;
            minterContainer?: any;
            description?: any;
            installMetamaskButton?: any;
        };
        texts?: {
            title?: string;
            minting?: string;
            success?: string;
            buy?: string;
            goBack?: string;
            description?: string;
            switchNetwork?: string;
            installMetamask?: string;
        };
    };
