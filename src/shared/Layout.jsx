import NavigtaionBar from '../components/header/NavigtaionBar';
import React from 'react';

function Layout({ children }) {
  return (
    <div>
      <NavigtaionBar />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
