import React, { useState } from 'react';

// import ValidationWarning from '../../common/icons/ValidationWarning';
import ValidationText from '../../common/ValidationText';

import { emailIdCheck, passwordCheck } from '../../../utils/validationCheck';

import styled from 'styled-components';
import Button from '../../common/Button';
import Input from '../../common/Input';
import Label from '../../common/Label';

const SignupFormBox = () => {
  // 아이디, 비밀번호, 이름 입력
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  //오류메시지 상태저장
  const [emailIdMessage, setEmailIdMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [userNameMessage, setUserNameMessage] = useState('');

  // 유효성 검사
  const [isEmailId, setIsEmailId] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isUserName, setIsUserName] = useState(true);

  const onBlurEmialId = () => {
    // const emailIdRegExp = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+\.+[a-zA-Z0-9-.]+$/;

    if (!emailIdCheck(emailId)) {
      setEmailIdMessage('올바른 이메일 주소가 아닙니다.');
      setIsEmailId(false);
    }
    if (emailIdCheck(emailId)) {
      setIsEmailId(true);
    }
    if (emailId === '') {
      setIsEmailId(true);
    }
  };

  const onBlurPassword = () => {
    // const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/;

    if (!passwordCheck(password)) {
      setPasswordMessage('올바르지 않은 비밀번호를 입력했습니다. 다시 시도하거나 비밀번호 재설정하세요.');
      setIsPassword(false);
    }

    if (password.length < 6) {
      setPasswordMessage('비밀번호가 너무 짧네요! 6자 이상 입력하세요.');
      setIsPassword(false);
    }
    if (passwordCheck(password)) {
      setIsPassword(true);
    }
    if (password === '') {
      setIsPassword(true);
    }
  };

  const onBlurUserName = () => {
    if (userName.length < 2 || userName.length > 12) {
      setUserNameMessage('이름을 2자이상 13자 미만으로 입력해주세요.');
      setIsUserName(false);
    } else {
      setIsUserName(true);
    }
    if (userName === '') {
      setIsUserName(true);
    }
  };

  const handeSignupSubmit = () => {
    if (emailId === '') {
      setEmailIdMessage('빠진 부분이 있네요! 이메일을 추가하세요.');
      setIsEmailId(false);
      return;
    }

    if (password === '') {
      setPasswordMessage('비밀번호가 너무 짧네요! 6자 이상 입력하세요.');
      setIsPassword(false);
      return;
    }

    if (userName === '') {
      setUserNameMessage('이름을 입력해주세요.');
      setIsUserName(false);
      return;
    }

    // dispatch(__signUp({ loginId: userId, password: password, nickname: nickName }));
  };

  const signupButton = { padding: '0px 18px', margin: '8px 0px 0px', height: '40px', width: '268px' };

  return (
    <SignupFormSubmitBox>
      <SignupEmailInputBox>
        <Label>이메일</Label>
        <Input
          isValueValid={true}
          width="232px"
          height="28px"
          padding="8px 16px"
          id="email"
          name="id"
          placeholder="이메일"
          type="email"
          onChange={(e) => {
            setEmailId(e.target.value);
          }}
          onBlur={onBlurEmialId}
        />
        {isEmailId ? null : <ValidationText isValueValid={isEmailId}>{emailIdMessage}</ValidationText>}
      </SignupEmailInputBox>
      <SignupPasswordInputBox>
        <Label>비밀번호</Label>
        <Input
          isValueValid={true}
          width="232px"
          height="28px"
          padding="8px 16px"
          id="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          onBlur={onBlurPassword}
        />
        {isPassword ? null : <ValidationText isValueValid={isPassword}>{passwordMessage}</ValidationText>}
      </SignupPasswordInputBox>
      <SignupNameInputBox>
        <Label>이름</Label>
        <Input
          isValueValid={true}
          width="232px"
          height="28px"
          padding="8px 16px"
          id="name"
          name="name"
          placeholder="이름"
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          onBlur={onBlurUserName}
        />
        {isUserName ? null : <ValidationText isValueValid={isUserName}>{userNameMessage}</ValidationText>}
      </SignupNameInputBox>
      <div>
        <Button type="button" style={signupButton} onClick={handeSignupSubmit}>
          계속하기
        </Button>
      </div>
    </SignupFormSubmitBox>
  );
};

const SignupEmailInputBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

const SignupPasswordInputBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

const SignupNameInputBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

const SignupFormSubmitBox = styled.form`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default SignupFormBox;
