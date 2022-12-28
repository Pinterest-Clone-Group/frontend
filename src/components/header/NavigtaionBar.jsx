import React, { useEffect, useState } from 'react';
import { __getUserInfo, login, logout } from '../../redux/modules/userSlice';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../common/Button';
import { Colors } from '../../styles';
import Icon from '../common/icons/Icon';
import IconButton from '../common/IconButton';
import LoginModalButton from './loginModal/LoginModalButton';
import Logo from '../common/Logo';
import MyInfoBox from './MyInfoBox';
import MyInfoSelectOption from './MyInfoSelectOption';
import PinSearchBox from './PinSearchBox';
import ProfileImage from '../common/ProfileImage';
import SelectBox from '../common/SelectBox';
import SignupModalButton from './signupModal/SignupModalButton';
import { getUserIdFromAccessToken } from '../../utils/jwtHandler';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavigtaionBar = () => {
  const { userInfo, isLogined, isLoading } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [myInfoSelectBoxVisible, setMyInfoSelectBoxVisible] = useState(false);

  const accessToken = localStorage.getItem('accessToken');
  useEffect(() => {
    if (accessToken) {
      const userId = getUserIdFromAccessToken(accessToken);
      dispatch(__getUserInfo({ userId }));
      dispatch(login());
      localStorage.setItem('isLogined', true);
    }
  }, [isLogined]);

  // TODO: 인가 오류 401로 통일되고 refresh 재인가 api있으면 필요 X
  useEffect(() => {
    if (!isLoading && !userInfo && isLogined) {
      dispatch(logout());
      localStorage.clear();
    }
  }, [userInfo]);

  const handleLogoutClick = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('isLogined');
    dispatch(logout());
    navigate('/');
  };

  return (
    <NavigtaionBarLayout>
      <LeftSideBox>
        <Logo size={isLogined ? 'small' : 'medium'} />
        {!isLogined && <LogoParagraph onClick={() => navigate('/')}>Pinterest</LogoParagraph>}
        {isLogined && (
          <div>
            <NavigationButton onClick={() => navigate('/pins')}>홈</NavigationButton>
            <span style={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={() => navigate('/pin-builder')}>
              만들기
            </span>
          </div>
        )}
      </LeftSideBox>
      {isLogined && <PinSearchBox />}
      {isLogined ? (
        <RightSideBox>
          <ProfileImage imageUrl={userInfo?.image} />
          <IconButton
            icon={<Icon.More />}
            onClick={() =>
              setTimeout(() => {
                setMyInfoSelectBoxVisible(!myInfoSelectBoxVisible);
              }, [300])
            }
          />
          <SelectBox
            visible={myInfoSelectBoxVisible}
            onClose={() => setMyInfoSelectBoxVisible(false)}
            boxMarginTop={46}
            location={-290}
          >
            <MyInfoSelectOption labelText="현재 로그인 계정">
              {userInfo && <MyInfoBox userInfo={userInfo} onClose={() => setMyInfoSelectBoxVisible(false)} />}
            </MyInfoSelectOption>
            <MyInfoSelectOption labelText="내 계정">
              <div onClick={handleLogoutClick}>로그아웃</div>
            </MyInfoSelectOption>
          </SelectBox>
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
  cursor: pointer;
`;

const RightSideBox = styled.div`
  display: flex;
  grid-column-gap: 8px;
  padding-right: 20px;
  padding-left: 60px;
`;

const NavigationButton = styled(Button)`
  background-color: ${Colors.black};
  margin: 0 16px;
  width: 60px;
  font-size: 16px;
  :hover {
    background-color: ${Colors.black};
  }
`;

export default NavigtaionBar;
