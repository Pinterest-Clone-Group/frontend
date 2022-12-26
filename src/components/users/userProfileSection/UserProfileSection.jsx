import React from 'react';

import ProfileImage from '../../common/ProfileImage';
import FollowingsModal from './FollowingsModal/FollowingsModal';
import UserProfileEdit from './UserProfileEdit';

import styled from 'styled-components';
import { Colors } from '../../../styles';

const UserProfileSection = () => {
  return (
    <UserProfileLayout>
      <ProfileImage size={120} />
      <UserNameBox>태근 박</UserNameBox>
      <UserEmail>ptg0811@gmail.com</UserEmail>
      <FollowingsModal />
      <UserProfileEdit />
    </UserProfileLayout>
  );
};

const UserProfileLayout = styled.div`
  width: 100%;
  height: 300px;
  border: 2px solid;
  border-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

const UserNameBox = styled.h1`
  color: ${Colors.black};
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
  display: block;
  margin: 5px 0px 5px 0px;
`;

const UserEmail = styled.span`
  color: ${Colors.darkgrey};
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
  display: block;
  font-size: 14px;
  margin: 5px 0px 5px 0px;
`;

export default UserProfileSection;
