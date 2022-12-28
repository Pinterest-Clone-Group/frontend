import React from 'react';
import { useSelector } from 'react-redux';

import PinCard from './PinCard';

import styled from 'styled-components';

const UserPinCardsList = () => {
  const { pinsArrs } = useSelector((state) => state.userSlice);
  console.log(pinsArrs);

  if (pinsArrs === [{}]) {
    return <div>...loading</div>;
  }

  const handlePinCardsLIst = pinsArrs.map((pinsArr) => (
    <PinCard key={pinsArr.pinId} thumbnail={pinsArr.image} title={pinsArr.title} />
  ));

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
