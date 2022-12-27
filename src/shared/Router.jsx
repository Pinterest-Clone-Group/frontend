import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Layout from './Layout';
import Mypage from '../pages/Mypage';
import Users from '../pages/Users';
import PinBuilder from '../pages/PinBuilder';
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
          <Route path="/pin-builder" element={<PinBuilder />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/users/:id" element={<Users />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
