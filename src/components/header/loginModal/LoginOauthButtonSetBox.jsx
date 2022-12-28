import React from 'react';

import styled from 'styled-components';
import Button from '../../common/Button';

const LoginOauthButtonSetBox = () => {
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;
  const clientId = process.env.REACT_APP_CLIENT_ID;

  const kakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
  };

  const loginButton = { padding: '0px 18px', margin: '8px 0px 0px', height: '40px', width: '268px' };

  return (
    <OauthButtonSetBox>
      <Button btnColor="kakao" style={loginButton} onClick={kakaoLogin}>
        Kakao talk으로 계속하기
      </Button>
      <Button btnColor="white" style={loginButton}>
        Google으로 계속하기
      </Button>
    </OauthButtonSetBox>
  );
};

const OauthButtonSetBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default LoginOauthButtonSetBox;
