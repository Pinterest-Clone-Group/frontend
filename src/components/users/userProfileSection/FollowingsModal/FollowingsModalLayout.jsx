import React from 'react';

import FollowingsList from './FollowingsList';

import styled from 'styled-components';

const FollowingsModalLayout = () => {
  return (
    <div>
      <FollowingsLayout>
        <FollowingsTextBox>
          <FollwingsTitleBox>팔로잉</FollwingsTitleBox>
        </FollowingsTextBox>
        <FollowingsList />
      </FollowingsLayout>
    </div>
  );
};

const FollowingsLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const FollowingsTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const FollwingsTitleBox = styled.h1`
  color: rgb(51, 51, 51);
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
  display: block;
  font-size: 28px;
  font-weight: bold;
  margin: 0px 0px 0px 0px;
`;

export default FollowingsModalLayout;
