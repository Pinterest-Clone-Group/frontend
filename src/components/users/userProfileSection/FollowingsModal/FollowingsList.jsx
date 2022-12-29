import React from 'react';

import userApi from '../../../../apis/userApi';
import { __getFollowingUsers } from '../../../../redux/modules/userSlice';

import styled from 'styled-components';
import Button from '../../../common/Button';
import ProfileImage from '../../../common/ProfileImage';
import { useDispatch } from 'react-redux';

const FollowingsList = ({ following, userInfo }) => {
  const dispatch = useDispatch();

  const handleFollowsClick = () => {
    userApi.updateFollows(following?.userId).then(() => {
      dispatch(__getFollowingUsers({ userId: userInfo.userId }));
    });
  };

  return (
    <FollowingsListBox>
      <FollowingsImageNameBox>
        <ProfileImageBox>
          <ProfileImage imageUrl={following.image} />
        </ProfileImageBox>
        <FollowingNameSpan>{following.name}</FollowingNameSpan>
      </FollowingsImageNameBox>
      <Button btnColor="grey" btnSize="small" onClick={handleFollowsClick}>
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
