import React from 'react';

import styled from 'styled-components';
import Icon from '../../common/icons/Icon';
import { Colors } from '../../../styles';

const UserPinCardsSetting = () => {
  return (
    <UserPinCardsSettingLayout>
      <UserPinCardsSettingBox>
        <SettingButton>
          <Icon.Setting />
        </SettingButton>
      </UserPinCardsSettingBox>
      <UserPinCardsSettingBox>
        <SettingButton>
          <Icon.Plus />
        </SettingButton>
      </UserPinCardsSettingBox>
    </UserPinCardsSettingLayout>
  );
};

const UserPinCardsSettingLayout = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UserPinCardsSettingBox = styled.div`
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SettingButton = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  background-color: white;
  :hover {
    background-color: ${Colors.grey};
    text-decoration: underline 2px;
  }
`;

export default UserPinCardsSetting;
