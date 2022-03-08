import React, { FunctionComponent, useContext } from 'react';
import { MinterContext } from '../../context/MinterContextProvider/MinterContextProvider';

type MinterProps = {
  width?: number | string;
  heigth?: number | string;
};

const Minter: FunctionComponent<MinterProps> = (config) => {
  const { url, iframeId } = useContext(MinterContext);

  if (!url) return <p>Loading...</p>;

  return (
    <iframe id={iframeId} width={config.width || '100%'} height={config.heigth || 500} src={url} />
  );
};

export default Minter;
