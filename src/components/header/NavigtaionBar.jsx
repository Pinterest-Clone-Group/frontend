import React, { useEffect } from 'react';
import { __getUserInfo, login } from '../../redux/modules/userSlice';
import { useDispatch, useSelector } from 'react-redux';

import { Colors } from '../../styles';
import LoginModalButton from './loginModal/LoginModalButton';
import Logo from '../common/Logo';
import LogoutButton from './logoutButton/LogoutButton';
import ProfileImage from '../common/ProfileImage';
import SignupModalButton from './signupModal/SignupModalButton';
import { getUserIdFromAccessToken } from '../../utils/jwtHandler';
import styled from 'styled-components';

const NavigtaionBar = () => {
  const { isLogined } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');
  useEffect(() => {
    if (accessToken) {
      const userId = getUserIdFromAccessToken(accessToken);
      dispatch(__getUserInfo({ userId }));
      dispatch(login());
      localStorage.setItem('isLogined', true);
    }
  }, [isLogined]);
  return (
    <NavigtaionBarLayout>
      <LeftSideBox>
        <Logo />
        <LogoParagraph>Pinterest</LogoParagraph>
      </LeftSideBox>

      {isLogined ? (
        <RightSideBox>
          <ProfileImage />
          <LogoutButton />
        </RightSideBox>
      ) : (
        <RightSideBox>
          <LoginModalButton />
          <SignupModalButton />
        </RightSideBox>
      )}
    </NavigtaionBarLayout>
  );
};

const NavigtaionBarLayout = styled.div`
  display: flex;
  height: 81px;
  padding-left: 28px;
  padding-right: 18px;
  justify-content: space-between;
  align-items: center;
`;

const LeftSideBox = styled.div`
  display: flex;
  grid-column-gap: 5px;
  align-items: center;
`;

const LogoParagraph = styled.p`
  font-size: 20px;
  color: ${Colors.logo};
  letter-spacing: -0.06em;
  line-height: 150%;
  font-weight: 600;
`;

const RightSideBox = styled.div`
  display: flex;
  grid-column-gap: 8px;
`;

export default NavigtaionBar;
