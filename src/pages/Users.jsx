import React, { useEffect, useState } from 'react';

import UserPinCardsSection from '../components/users/userPinCardsSection/UserPinCardsSection';
import UserProfileSection from '../components/users/userProfileSection/UserProfileSection';
import { __getPinsMadeByUser } from '../redux/modules/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import userApi from '../apis/userApi';

const Users = () => {
  const dispatch = useDispatch();
  const params = useParams().id;

  const { followings, userInfo } = useSelector((state) => state.userSlice);

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    dispatch(__getPinsMadeByUser({ userId: params }));
    userApi.getUserInfo(params).then((res) => setCurrentUser(res.data.data));
  }, [dispatch]);

  if (!currentUser) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <UserProfileSection
        profileImage={currentUser.image}
        name={currentUser.name}
        userName={currentUser.username}
        userId={currentUser.userId}
        followings={followings}
        loginUserId={userInfo.userId}
        key={currentUser.userId}
      />
      <UserPinCardsSection userId={currentUser.userId} />
    </div>
  );
};

export default Users;
