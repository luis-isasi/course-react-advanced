import * as React from 'react';

import { createGlobalStyle } from 'styled-components';

import Image from './Image';
import image1 from './img/image1.jpg';

const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Noto Sans JP', sans-serif;
  }
`;

const App = (): JSX.Element => {
  const renderImgs = () =>
    [1, 2, 3, 4, 5, 6].map((item: number) => (
      <Image key={item} idImg={item} img={image1} />
    ));

  return (
    <>
      <GlobalStyles />
      <div
        style={{
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>PETSGRAM</h1>
        <ul>{renderImgs()}</ul>
      </div>
    </>
  );
};

export default App;
