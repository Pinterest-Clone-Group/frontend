import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Users from '../pages/Users';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/users/:id" element={<Users />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
