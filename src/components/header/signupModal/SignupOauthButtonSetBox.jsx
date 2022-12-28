import React from 'react';

import styled from 'styled-components';
import Button from '../../common/Button';

const SignupOauthButtonSetBox = () => {
  const signupButton = { padding: '0px 18px', margin: '8px 0px 0px', height: '40px', width: '268px' };

  return (
    <OauthButtonSetBox>
      <Button btnColor="facebook" style={signupButton}>
        Facebook으로 계속하기
      </Button>
      <Button btnColor="white" style={signupButton}>
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

export default SignupOauthButtonSetBox;
