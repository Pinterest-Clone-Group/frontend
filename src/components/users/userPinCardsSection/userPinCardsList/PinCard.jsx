import React from 'react';

import styled from 'styled-components';
// import { Colors } from '../../../styles';

const PinCard = ({ thumbnail, name }) => {
  return (
    <PinCardLayout>
      <div>{thumbnail}</div>
      <div>{name}</div>
    </PinCardLayout>
  );
};

const PinCardLayout = styled.div`
  width: 236px;
  height: 218px;
  padding: 8px;
  border-color: black;
  border: 2px solid;
  border-radius: 10px;
  display: block;
  /* flex-direction: row;
  justify-content: space-evenly;
  align-items: center; */
`;

export default PinCard;
