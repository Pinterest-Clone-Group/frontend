import React, { useEffect, useState } from 'react';

import UserPinCardsSection from '../components/users/userPinCardsSection/UserPinCardsSection';
import UserProfileSection from '../components/users/userProfileSection/UserProfileSection';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userApi from '../apis/userApi';

const Users = () => {
  const { id } = useParams();
  const { isLogined } = useSelector((state) => state.userSlice);
  console.log(isLogined);
  const [currentUser, setCurrentUser] = useState();
  // 렌더링 시 데이터 조회
  useEffect(() => {
    userApi.getUserInfo(id).then((res) => setCurrentUser(res.data.data));
    // dispatch(__getUserInfo({ userId: id }));
  }, []);

  return (
    <div>
      {currentUser && (
        <>
          <UserProfileSection
            profileImage={currentUser.image}
            name={currentUser.name}
            userName={currentUser.username}
            userId={currentUser.userId}
            key={currentUser.userId}
          />
          <UserPinCardsSection />
        </>
      )}
    </div>
  );
};

export default Users;
