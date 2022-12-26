import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Layout from './Layout';
import Mypage from '../pages/Mypage';
import Pins from '../pages/Pins';
import React from 'react';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pins" element={<Pins />} />
          <Route pate="/pins/:id" element={<Detail />} />
          <Route pate="/mypage" element={<Mypage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
