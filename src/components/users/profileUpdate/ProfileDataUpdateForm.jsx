import React, { useState } from 'react';

import Label from '../../common/Label';
import Input from '../../common/Input';
import ValidationText from '../../common/ValidationText';

import styled from 'styled-components';
// import { Colors } from '../styles';

const ProfileDataUpdateForm = () => {
  // 아이디, 비밀번호, 이름 입력
  const [userName, setUserName] = useState('');

  //오류메시지 상태저장
  const [userNameMessage, setUserNameMessage] = useState('');

  // 유효성 검사
  const [isUserName, setIsUserName] = useState(true);

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

  return (
    <ProfileDataUpdateFormSubmitBox>
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
    </ProfileDataUpdateFormSubmitBox>
  );
};

const ProfileDataUpdateFormSubmitBox = styled.form`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: left;
`;

// const ProfileLayout = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const ProfileBox = styled.div`
//   width: 488px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 24px;
// `;

// const ProfileTextBox = styled.div`
//   width: 100%;
//   display: block;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 24px;
// `;

// const ProfileTitleText = styled.h1`
//   color: ${Colors.black};
//   text-align: left;
//   display: block;
//   margin: 10px 0px;
// `;

export default ProfileDataUpdateForm;
