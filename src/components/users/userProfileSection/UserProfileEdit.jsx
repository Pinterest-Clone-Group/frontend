import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

// import userApi from '../../../apis/userApi';
import { __updateFollows, __getFollowingUsers } from '../../../redux/modules/userSlice';

import Button from '../../common/Button';

const UserProfileEdit = ({ followings, loginUserId }) => {
  const navigate = useNavigate();
  const params = useParams().id;

  const dispatch = useDispatch();

  // const handleFollowsClick = () => {
  //   userApi.updateFollows(params).then(() => {
  //     dispatch(__getFollowingUsers({ userId: loginUserId }));
  //   });
  // };

  const { userInfo } = useSelector((state) => state.userSlice);

  useEffect(() => {
    dispatch(__getFollowingUsers({ userId: userInfo.userId }));
  }, []);

  const handleFollowsClick = () => {
    dispatch(__updateFollows(params));
  };

  if (parseInt(params) === parseInt(loginUserId)) {
    return (
      <div>
        <Button btnColor="grey" btnSize="small" onClick={() => navigate(`/users/profile/${loginUserId}`)}>
          프로필 수정
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        {followings.some((following) => following.userId === params) ? (
          <Button btnColor="grey" onClick={handleFollowsClick}>
            언팔로우
          </Button>
        ) : (
          <Button btnColor="brand" onClick={handleFollowsClick}>
            팔로우
          </Button>
        )}
      </div>
    );
  }
};

export default UserProfileEdit;
