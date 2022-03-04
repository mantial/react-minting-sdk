# mantial-react-components

Source code at https://github.com/rather-labs/mantial-react-components

## Installation

    npm install @mantial/react-components

## npm Build

    npm run rollup

## Testing library locally

First, generate the mantial-react-components-version.tgz file with:

    npm pack

Move .tgz to the target project

    npm install mantial-react-components-version.tgz

## Usage

The MinterContextProvider must enclose the Mantial components used. For example:

```
import React from 'react';
import {MinterContextProvider} from '@mantial/react-components';

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
import {Minter} from '@mantial/react-components';

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

## Props

| Name | Type | Default |
| ---- | ---- | ------- |
|      |      |         |
