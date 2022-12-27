import React, { useState } from 'react';

import UserPinCardsSetting from './UserPinCardsSetting';
import UserPinCardsList from './userPinCardsList/UserPinCardsList';

import styled from 'styled-components';
import { Colors } from '../../../styles';

const UserPinCardsSection = () => {
  const [isPinCards, setIsPinCards] = useState(true);
  console.log(isPinCards);

  return (
    <UserPinCardsLayout>
      <UserPInCardsCategoryBox>
        <UserPinCardsCategoryButtonBox>
          <CategoryButton type="button" onClick={() => setIsPinCards(true)}>
            생성됨
          </CategoryButton>
        </UserPinCardsCategoryButtonBox>
        <UserPinCardsCategoryButtonBox>
          <CategoryButton type="button" onClick={() => setIsPinCards(false)}>
            저장됨
          </CategoryButton>
        </UserPinCardsCategoryButtonBox>
      </UserPInCardsCategoryBox>
      <UserPinCardsSetting />
      <UserPinCardsList />
    </UserPinCardsLayout>
  );
};

const UserPinCardsLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserPInCardsCategoryBox = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const UserPinCardsCategoryButtonBox = styled.div`
  width: 60px;
  height: 100%;
  margin: 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CategoryButton = styled.button`
  height: 40px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  padding: 0px 5px;
  background-color: white;
  :hover {
    background-color: ${Colors.grey};
    text-decoration: underline 2px;
  }
`;

export default UserPinCardsSection;
