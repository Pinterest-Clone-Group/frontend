import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../../common/Button';

//TODO: Link 연결
const UserProfileEdit = () => {
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.userSlice.userInfo);

  return (
    <div>
      <Button btnColor="grey" btnSize="small" onClick={() => navigate(`/users/profile/${data.userId}`)}>
        프로필 수정
      </Button>
    </div>
  );
};

export default UserProfileEdit;
