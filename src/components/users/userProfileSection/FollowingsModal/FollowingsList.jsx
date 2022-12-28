import React from 'react';

import ProfileImage from '../../../common/ProfileImage';

import styled from 'styled-components';
import Button from '../../../common/Button';

const FollowingsList = () => {
  return (
    <FollowingsListBox>
      <FollowingsImageNameBox>
        <ProfileImageBox>
          <ProfileImage />
        </ProfileImageBox>
        <FollowingNameSpan>Diana</FollowingNameSpan>
      </FollowingsImageNameBox>
      <Button btnColor="grey" btnSize="small">
        언팔로우
      </Button>
    </FollowingsListBox>
  );
};

const FollowingsListBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
`;

const FollowingsImageNameBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1 1 auto;
`;

const ProfileImageBox = styled.div`
  margin: 0px 5px;
`;

const FollowingNameSpan = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export default FollowingsList;
