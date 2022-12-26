import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Mypage from '../pages/Mypage';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route pate="/:id" element={<Detail />} />
          <Route pate="/mypage" element={<Mypage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
