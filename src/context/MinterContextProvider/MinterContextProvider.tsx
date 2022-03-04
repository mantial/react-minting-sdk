import React, { createContext, FunctionComponent, useEffect, useState } from 'react';
import { initMantialConfig, makeid } from '../../scripts/mantial';
import { MinterConfigProps } from '../../types';

export const MinterContext = createContext({
  url: null,
  iframeId: '',
});

type MinterContextProvider = {
  children: JSX.Element;
  config: MinterConfigProps;
};

const MinterContextProvider: FunctionComponent<MinterContextProvider> = ({ children, config }) => {
  const [iframeId] = useState<string>(makeid(10));
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    let src =
      config.network === 'ethereum'
        ? 'https://minter.mantial.com'
        : 'https://dev.minter.mantial.com';
    src += `/${config.collectionSlug}?`;
    const params = new URLSearchParams();
    if (config.amount) params.append('amount', config.amount.toString());
    if (config.amountSelector) params.append('amountSelector', config.amountSelector.toString());
    if (config.showTitle) params.append('showTitle', config.showTitle.toString());
    if (config.saleSelector) params.append('saleSelector', config.saleSelector.toString());
    if (config.saleId) params.append('saleId', config.saleId.toString());
    if (config.showDetails) params.append('showDetails', config.showDetails.toString());
    if (config.showErrors) params.append('showErrors', config.showErrors.toString());
    src += params.toString();
    setUrl(src);
  }, []);

  useEffect(() => {
    initMantialConfig(iframeId, {
      theme: config.theme,
      styles: config.styles,
      texts: config.texts,
    });
  }, [url]);

  return (
    <MinterContext.Provider
      value={{
        iframeId,
        url,
      }}
    >
      {children}
    </MinterContext.Provider>
  );
};

export default MinterContextProvider;
