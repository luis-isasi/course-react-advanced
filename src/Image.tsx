import * as React from 'react';

import styled from 'styled-components';

import useLocalStorage from './hooks/useLocalStorage';
import useNearScreen from './hooks/useNearScreen';

const Image = ({ img, idImg }): JSX.Element => {
  const { liked, setLocalStorage } = useLocalStorage(`liked${idImg}`);

  const { show, element } = useNearScreen();

  return (
    <DivImg ref={element}>
      {show && (
        <>
          <Img src={img} alt="test" />
          <button onClick={setLocalStorage}>
            {liked ? (
              <Icon className="fas fa-heart"></Icon>
            ) : (
              <Icon className="far fa-heart"></Icon>
            )}
          </button>
        </>
      )}
    </DivImg>
  );
};

const DivImg = styled.div`
  min-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;
const Img = styled.img`
  height: 350px;
  width: 600px;
  margin: 20px auto;
`;
const Icon = styled.i`
  font-size: 30px;
`;

export default Image;
