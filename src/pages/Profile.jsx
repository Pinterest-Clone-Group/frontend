import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import ProfileImageUpdate from '../components/users/profileUpdate/ProfileImageUpdate';
import ProfileDataUpdateForm from '../components/users/profileUpdate/ProfileDataUpdateForm';

import { __getUserInfo } from '../redux/modules/userSlice';

import styled from 'styled-components';
import { Colors } from '../styles';

const Profile = () => {
  const navigate = useNavigate();

  const isToken = Boolean(localStorage.getItem('accessToken'));

  useEffect(() => {
    // 로그인한 상태인 경우에만!
    if (isToken !== true) {
      navigate('/');
      window.location.reload();
    }
  }, []);

  const params = useParams().id;
  const dispatch = useDispatch();

  // 렌더링 시 데이터 조회
  useEffect(() => {
    dispatch(__getUserInfo(params));
  }, []);

  const { data } = useSelector((state) => state.userSlice.userInfo);

  try {
    if (data !== undefined) {
      return (
        <ProfileLayout>
          <ProfileBox>
            <ProfileTextBox>
              <ProfileTitleText>공개프로필</ProfileTitleText>
              <span>회원님의 프로필을 방문하는 사용자에게 다음 정보가 표시됩니다.</span>
            </ProfileTextBox>
            <ProfileImageUpdate profileImage={data.image} userId={data.userId} />
            <ProfileDataUpdateForm name={data.name} userName={data.username} userId={data.userId} />
          </ProfileBox>
        </ProfileLayout>
      );
    }
  } catch (error) {
    console.log(error);
    return <div>error</div>;
  }
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
