import React from 'react';
import { useSelector } from 'react-redux';

import ProfileImageUpdate from '../components/users/profileUpdate/ProfileImageUpdate';
import ProfileDataUpdateForm from '../components/users/profileUpdate/ProfileDataUpdateForm';

import styled from 'styled-components';
import { Colors } from '../styles';

const Profile = () => {
  const { userInfo } = useSelector((state) => state.userSlice);

  if (userInfo === null) {
    return <div>...loading</div>;
  }

  return (
    <ProfileLayout>
      <ProfileBox>
        <ProfileTextBox>
          <ProfileTitleText>공개프로필</ProfileTitleText>
          <span>회원님의 프로필을 방문하는 사용자에게 다음 정보가 표시됩니다.</span>
        </ProfileTextBox>
        <ProfileImageUpdate profileImage={userInfo.image} userId={userInfo.userId} />
        <ProfileDataUpdateForm name={userInfo.name} userName={userInfo.username} userId={userInfo.userId} />
      </ProfileBox>
    </ProfileLayout>
  );
};

const ProfileLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileBox = styled.div`
  width: 488px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: 24px;
`;

const ProfileTextBox = styled.div`
  width: 100%;
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px;
`;

const ProfileTitleText = styled.h1`
  color: ${Colors.black};
  text-align: left;
  display: block;
  margin: 10px 0px;
`;

export default Profile;
