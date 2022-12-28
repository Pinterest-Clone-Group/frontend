import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import UserProfileSection from '../components/users/userProfileSection/UserProfileSection';
import UserPinCardsSection from '../components/users/userPinCardsSection/UserPinCardsSection';

import { __getUserInfo } from '../redux/modules/userSlice';

const Users = () => {
  const navigate = useNavigate();

  const isToken = Boolean(localStorage.getItem('accessToken'));

  useEffect(() => {
    // 로그인한 상태인 경우에만!
    if (isToken !== true) {
      navigate('/');
      window.location.reload();
    }
  }, []);

  const params = useParams().id;
  const dispatch = useDispatch();

  // 렌더링 시 데이터 조회
  useEffect(() => {
    dispatch(__getUserInfo(params));
  }, []);

  const { data } = useSelector((state) => state.userSlice.userInfo);

  try {
    if (data !== undefined) {
      return (
        <div>
          <UserProfileSection
            profileImage={data.image}
            name={data.name}
            userName={data.username}
            userId={data.id}
            key={data.id}
          />
          <UserPinCardsSection />
        </div>
      );
    }
  } catch (error) {
    console.log(error);
    return <div>error</div>;
  }

  // console.log(data);
  // console.log(isLoading);

  // if (isLoading) {
  //   return <div>...loading</div>;
  // }
  // if (error) {
  //   console.log(error);
  //   return <div>error</div>;
  // }
};

export default Users;
