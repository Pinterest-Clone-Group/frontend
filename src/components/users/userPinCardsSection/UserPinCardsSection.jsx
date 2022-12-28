import React, { useEffect, useState } from 'react';

import { Colors } from '../../../styles';
import UserPinCardsList from './userPinCardsList/UserPinCardsList';
import UserPinCardsSetting from './UserPinCardsSetting';
import styled from 'styled-components';

const UserPinCardsSection = ({ userId }) => {
  const [isPinCards, setIsPinCards] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsPinCards(!isPinCards);
    }, [500]);
  }, []);
  return (
    <UserPinCardsLayout>
      <UserPInCardsCategoryBox>
        <UserPinCardsCategoryButtonBox>
          <CategoryButton
            style={{ backgroundColor: isPinCards ? Colors.grey : 'white' }}
            type="button"
            onClick={() => setIsPinCards(true)}
          >
            내 등록
          </CategoryButton>
        </UserPinCardsCategoryButtonBox>
        <UserPinCardsCategoryButtonBox>
          <CategoryButton
            type="button"
            style={{ backgroundColor: !isPinCards ? Colors.grey : 'white' }}
            onClick={() => setIsPinCards(false)}
          >
            저장됨
          </CategoryButton>
        </UserPinCardsCategoryButtonBox>
      </UserPInCardsCategoryBox>
      <UserPinCardsSetting />
      <UserPinCardsList isUserCreatedPin={isPinCards} userId={userId} />
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
  width: 90px;
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
