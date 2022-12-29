import React, { useState } from 'react';

import LoginFormBox from './LoginFormBox';
import LoginOauthButtonSetBox from './LoginOauthButtonSetBox';
// import LoginLowLineTextBox from './LoginLowLineTextBox';

import styled from 'styled-components';
import Button from '../../common/Button';
import Logo from '../../common/Logo';
import Modal from '../../common/Modal';

const LoginModalButton = (args) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button btnColor="brand" btnSize="small" onClick={() => setVisible(true)}>
        로그인
      </Button>
      <Modal visible={visible} width="400" onClose={() => setVisible(false)} {...args}>
        <LoginLayout>
          <Logo />
          <LoginTextArea>
            <LoginTextTitleBox>Pinterest에 오신 것을 환영합니다</LoginTextTitleBox>
          </LoginTextArea>
          <LoginFormBox />
          <span>또는</span>
          <LoginOauthButtonSetBox />
          {/* <LoginLowLineTextBox /> */}
        </LoginLayout>
      </Modal>
    </div>
  );
};

const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const LoginTextTitleBox = styled.h1`
  color: rgb(51, 51, 51);
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
  display: block;
  font-size: 2em;
  font-weight: bold;
  margin: 0px 0px 0px 0px;
`;

export default LoginModalButton;
