import React from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '../../common/Button';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/');
    window.location.reload();
  };

  return (
    <div>
      <Button btnColor="brand" btnSize="small" onClick={handleLogout}>
        로그아웃
      </Button>
    </div>
  );
};

export default LogoutButton;
