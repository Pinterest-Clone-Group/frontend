import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const isToken = Boolean(localStorage.getItem('accessToken'));

  // 앱 로드 시 로그인유무 체크
  useEffect(() => {
    // 로그인한 상태인 경우에만!
    if (isToken !== false) {
      navigate('/pins');
      window.location.reload();
    }
  }, []);

  return <div>Home</div>;
};

export default Home;
