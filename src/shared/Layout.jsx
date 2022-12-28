import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import NavigtaionBar from '../components/header/NavigtaionBar';
import userApi from '../apis/userApi';

function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    //"/login"일 경우
    if (location.pathname === '/login') {
      // 인가 코드 받기
      const code = location.search.split('code=')[1];

      //코드를 api에 전달
      // TODO: headers 로 올지 data로 올지 확인
      (async () => {
        try {
          const response = await userApi.getKakaoLogin(code);
          localStorage.setItem('accesstoken', response.data.accesstoken);
          localStorage.setItem('refreshtoken', response.data.refreshtoken);

          navigate('/');
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, []);

  return (
    <div>
      <NavigtaionBar />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
