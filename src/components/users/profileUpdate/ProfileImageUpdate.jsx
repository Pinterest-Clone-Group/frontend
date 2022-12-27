import React from 'react';

import ProfileImage from '../../common/ProfileImage';
import Button from '../../common/Button';

import styled from 'styled-components';
// import { Colors } from '../styles';

const ProfileImageUpdate = () => {
  return (
    <ProfileImageUpdateLayout>
      <ProfileImageBox>
        <ProfileImage size={90} />
      </ProfileImageBox>
      <Button btnColor="grey" btnSize="small">
        변경
      </Button>
    </ProfileImageUpdateLayout>
  );
};

const ProfileImageUpdateLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

const ProfileImageBox = styled.div`
  margin: 16px;
`;

export default ProfileImageUpdate;
