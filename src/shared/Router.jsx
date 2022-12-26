import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Layout from './Layout';
import Mypage from '../pages/Mypage';
import PinDetail from '../pages/PinDetail';
import Pins from '../pages/Pins';
import React from 'react';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pins" element={<Pins />} />
          <Route path="/pins/:id" element={<PinDetail />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
