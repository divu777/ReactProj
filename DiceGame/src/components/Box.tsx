// Box.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

interface BoxProps {
  numb: string;
  onClick: (numb: string) => void;
  isClicked: boolean;
}

const BoxStyled = styled.div<{ isClicked: boolean }>`
  width: 72px;
  height: 72px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => (props.isClicked ? 'black' : 'white')};
  color: ${(props) => (props.isClicked ? 'white' : 'black')};
`;

const Box: React.FC<BoxProps> = ({ numb, onClick, isClicked }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      onClick(numb);
    }
  };

  return (
    <BoxStyled onClick={handleClick} isClicked={isClicked}>
      {numb}
    </BoxStyled>
  );
};

export default Box;
