import React from 'react';

import UserProfileSection from '../components/users/userProfileSection/UserProfileSection';
import UserPinCardsSection from '../components/users/userPinCardsSection/UserPinCardsSection';

const Users = () => {
  return (
    <div>
      <UserProfileSection />
      <UserPinCardsSection />
    </div>
  );
};

export default Users;
