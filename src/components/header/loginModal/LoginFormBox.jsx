import React, { useState } from 'react';

import ValidationText from '../../common/ValidationText';

import { emailIdCheck } from '../../../utils/validationCheck';

import styled from 'styled-components';
import Button from '../../common/Button';
import Input from '../../common/Input';
import Label from '../../common/Label';

const LoginFormBox = () => {
  // 아이디, 비밀번호, 이름 입력
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');

  console.log(password);

  //오류메시지 상태저장
  const [emailIdMessage, setEmailIdMessage] = useState('');
  //   const [passwordMessage, setPasswordMessage] = useState('');

  // 유효성 검사
  const [isEmailId, setIsEmailId] = useState(true);
  //   const [isPassword, setIsPassword] = useState(true);

  const handelLoginSubmit = () => {
    if (emailId === '') {
      setEmailIdMessage('빠진 부분이 있네요! 이메일을 추가하세요.');
      setIsEmailId(false);
      return;
    }

    if (!emailIdCheck(emailId)) {
      setEmailIdMessage('음... 올바른 이메일 주소가 아닙니다.');
      setIsEmailId(false);
    }

    // dispatch(__signUp({ loginId: userId, password: password, nickname: nickName }));
  };

  const LoginButton = { padding: '0px 18px', margin: '8px 0px 0px', height: '40px', width: '268px' };

  return (
    <LoginFormSubmitBox>
      <LoginEmailInputBox>
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
        />
        {isEmailId ? null : <ValidationText isValueValid={isEmailId}>{emailIdMessage}</ValidationText>}
      </LoginEmailInputBox>
      <LoginPasswordInputBox>
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
        />
        {/* {isPassword ? null : <ValidationText isValueValid={isPassword}>{passwordMessage}</ValidationText>} */}
      </LoginPasswordInputBox>
      <div>
        <Button type="button" style={LoginButton} onClick={handelLoginSubmit}>
          로그인
        </Button>
      </div>
    </LoginFormSubmitBox>
  );
};

const LoginEmailInputBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

const LoginPasswordInputBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

const LoginFormSubmitBox = styled.form`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default LoginFormBox;
