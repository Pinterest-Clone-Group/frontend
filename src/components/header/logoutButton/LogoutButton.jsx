import Button from '../../common/Button';
import React from 'react';
import { logout } from '../../../redux/modules/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    dispatch(logout());
    navigate('/');
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
