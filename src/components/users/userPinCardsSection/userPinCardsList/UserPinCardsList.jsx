import React from 'react';

import PinCard from './PinCard';

import styled from 'styled-components';
// import { Colors } from '../../../styles';

const UserPinCardsList = () => {
  const arrs = [
    { id: 1, thumbnail: 'card1image', name: 'card1' },
    { id: 2, thumbnail: 'card2image', name: 'card2' },
    { id: 3, thumbnail: 'card3image', name: 'card3' },
  ];
  const handlePinCardsLIst = arrs.map((arr) => <PinCard key={arr.id} thumbnail={arr.thumbnail} name={arr.name} />);

  return <UserPinCardsListsLayout>{handlePinCardsLIst}</UserPinCardsListsLayout>;
};

const UserPinCardsListsLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export default UserPinCardsList;
