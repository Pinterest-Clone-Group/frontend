import React from 'react';

import SignupModalButton from './signupModal/SignupModalButton';
import LoginModalButton from './loginModal/LoginModalButton';

import styled from 'styled-components';
import { Colors } from '../../styles';
import Logo from '../common/Logo';

// TODO: 로그인, 가입 페이지 이동시키기
// TODO: 비로그인 사용자만 접근시키기
const UnAuthorizedNavigtaionBar = () => {
  return (
    <UnAuthorizedNavigtaionBarLayout>
      <LeftSideBox>
        <Logo />
        <LogoParagraph>Pinterest</LogoParagraph>
      </LeftSideBox>
      <RightSideBox>
        <LoginModalButton />
        <SignupModalButton />
      </RightSideBox>
    </UnAuthorizedNavigtaionBarLayout>
  );
};

const UnAuthorizedNavigtaionBarLayout = styled.div`
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

export default UnAuthorizedNavigtaionBar;
