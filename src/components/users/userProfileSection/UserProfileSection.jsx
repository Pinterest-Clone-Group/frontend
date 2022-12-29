import React from 'react';

import ProfileImage from '../../common/ProfileImage';
import FollowingsModal from './FollowingsModal/FollowingsModal';
import UserProfileEdit from './UserProfileEdit';

import styled from 'styled-components';
import { Colors } from '../../../styles';

// TODO: following 기능 구현
// TODO: 프로필 수정 기능
const UserProfileSection = ({ profileImage, name, userName }) => {
  return (
    <UserProfileLayout>
      <ProfileImage size={120} imageUrl={profileImage} />
      <UserNameBox>{name}</UserNameBox>
      <UserEmail>@{userName}</UserEmail>
      <FollowingsModal />
      <UserProfileEdit />
    </UserProfileLayout>
  );
};

const UserProfileLayout = styled.div`
  width: 100%;
  height: 300px;
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
