import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '../../common/Button';

const UserProfileEdit = () => {
  const navigate = useNavigate();
  const params = useParams().id;

  const { userInfo } = useSelector((state) => state.userSlice);

  // console.log(userInfo);

  if (userInfo === null) {
    return <div>...loading</div>;
  }

  if (parseInt(params) === parseInt(userInfo.userId)) {
    return (
      <div>
        <Button btnColor="grey" btnSize="small" onClick={() => navigate(`/users/profile/${userInfo.userId}`)}>
          프로필 수정
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <Button btnColor="brand" btnSize="small">
          팔로우
        </Button>
      </div>
    );
  }
};

export default UserProfileEdit;
