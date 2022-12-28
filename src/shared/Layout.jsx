import NavigtaionBar from '../components/header/NavigtaionBar';
import React from 'react';
import { useSelector } from 'react-redux';

function Layout({ children }) {
  const { userInfo, isLogined } = useSelector((state) => state.userSlice);

  return (
    <div>
      <NavigtaionBar user={userInfo} isLogined={isLogined} />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
