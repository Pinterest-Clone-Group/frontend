import React, { useState } from 'react';

import SignupFormBox from './SignupFormBox';
import SignupOauthButtonSetBox from './SignupOauthButtonSetBox';
import SignupLowLineTextBox from './SignupLowLineTextBox';

import styled from 'styled-components';
import Button from '../../common/Button';
import Logo from '../../common/Logo';
import Modal from '../../common/Modal';

const SignupModalButton = (args) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button btnColor="grey" btnSize="small" onClick={() => setVisible(true)}>
        가입하기
      </Button>
      <Modal visible={visible} width="400" onClose={() => setVisible(false)} {...args}>
        <SignupLayout>
          <Logo />
          <SignupTextBox>
            <SignupTextTitleBox>Pinterest에 오신 것을 환영합니다</SignupTextTitleBox>
            <span>시도해 볼 만한 새로운 아이디어 찾기</span>
          </SignupTextBox>
          <SignupFormBox />
          <span>또는</span>
          <SignupOauthButtonSetBox />
          <SignupLowLineTextBox />
        </SignupLayout>
      </Modal>
    </div>
  );
};

const SignupLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignupTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const SignupTextTitleBox = styled.h1`
  color: rgb(51, 51, 51);
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
  display: block;
  font-size: 2em;
  font-weight: bold;
  margin: 0px 0px 0px 0px;
`;

export default SignupModalButton;
