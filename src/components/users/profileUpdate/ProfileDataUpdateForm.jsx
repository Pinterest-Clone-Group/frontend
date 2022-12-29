import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { __updateUserInfo } from '../../../redux/modules/userSlice';

import styled from 'styled-components';
import Button from '../../common/Button';
import Label from '../../common/Label';
import Input from '../../common/Input';
import ValidationText from '../../common/ValidationText';

// TODO: 정보 수정 기능 연결 (404 에러 확인)

const ProfileDataUpdateForm = ({ userId, name, userName }) => {
  // console.log(userId, name, userName);
  const dispatch = useDispatch();
  // 아이디, 비밀번호, 이름 입력
  const [profileName, setName] = useState('');
  const [profileUserName, setUserName] = useState('');

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState('');
  const [userNameMessage, setUserNameMessage] = useState('');

  // 유효성 검사
  const [isName, setIsName] = useState(true);
  const [isUserName, setIsUserName] = useState(true);

  const onBlurName = () => {
    if (profileName.length < 2 || profileName.length > 12) {
      setNameMessage('이름을 2자이상 13자 미만으로 입력해주세요.');
      setIsName(false);
    } else {
      setIsName(true);
    }
    if (profileName === '') {
      setIsName(true);
    }
  };

  const onBlurUserName = () => {
    if (profileUserName.length < 2 || profileUserName.length > 12) {
      setUserNameMessage('이름을 2자이상 13자 미만으로 입력해주세요.');
      setIsUserName(false);
    } else {
      setIsUserName(true);
    }
    if (profileUserName === '') {
      setIsUserName(true);
    }
  };

  const handelProfileUpdateSubmit = () => {
    console.log(userId, profileName, profileUserName);
    dispatch(__updateUserInfo({ userId: userId, name: profileName, username: profileUserName }));
  };

  return (
    <ProfileDataUpdateFormSubmitBox>
      <NameInputBox>
        <Label>이름</Label>
        <Input
          isValueValid={true}
          width="232px"
          height="28px"
          padding="8px 16px"
          id="name"
          name="name"
          placeholder={name}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          onBlur={onBlurName}
        />
        {isName ? null : <ValidationText isValueValid={isName}>{nameMessage}</ValidationText>}
      </NameInputBox>
      <NameInputBox>
        <Label>닉네임</Label>
        <Input
          isValueValid={true}
          width="232px"
          height="28px"
          padding="8px 16px"
          id="userName"
          name="namuserNamee"
          placeholder={userName}
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          onBlur={onBlurUserName}
        />
        {isUserName ? null : <ValidationText isValueValid={isUserName}>{userNameMessage}</ValidationText>}
      </NameInputBox>
      <div>
        <Button
          type="button"
          btnColor="grey"
          style={{ margin: '10px 0px' }}
          btnSize="small"
          onClick={handelProfileUpdateSubmit}
        >
          저장
        </Button>
      </div>
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

const NameInputBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;

export default ProfileDataUpdateForm;
