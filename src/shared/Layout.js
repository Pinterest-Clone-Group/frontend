import React from 'react';

import UnAuthorizedNavigtaionBar from '../components/header/UnAuthorizedNavigtaionBar';

function Layout({ children }) {
  return (
    <div>
      <UnAuthorizedNavigtaionBar />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
