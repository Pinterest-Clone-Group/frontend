import React from 'react';

import styled from 'styled-components';

const SignupLowLineTextBox = () => {
  return (
    <SignupLowlineTextSetBox>
      <span>이미 회원이신가요?</span>
      <span>로그인하기</span>
    </SignupLowlineTextSetBox>
  );
};

const SignupLowlineTextSetBox = styled.div`
  display: flex;
  font-weight: bold;
  margin: 5px 0px 5px 0px;
`;

export default SignupLowLineTextBox;
