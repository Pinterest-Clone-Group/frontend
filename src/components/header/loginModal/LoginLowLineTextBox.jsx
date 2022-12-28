import React from 'react';

import styled from 'styled-components';

const LoginLowLineTextBox = () => {
  return (
    <LoginLowlineTextSetBox>
      <span>아직 Pinterest를 사용하고 있지 않으신가요?</span>
      <span>가입하기</span>
    </LoginLowlineTextSetBox>
  );
};

const LoginLowlineTextSetBox = styled.div`
  display: flex;
  font-weight: bold;
  margin: 5px 0px 5px 0px;
`;

export default LoginLowLineTextBox;
