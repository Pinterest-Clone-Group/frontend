import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Layout from './Layout';
import PinBuilder from '../pages/PinBuilder';
import PinDetail from '../pages/PinDetail';
import Pins from '../pages/Pins';
import Profile from '../pages/Profile';
import React from 'react';
import Users from '../pages/Users';
import { useSelector } from 'react-redux';

const Router = () => {
  const { userInfo, isLogined } = useSelector((state) => state.userSlice);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={!isLogined ? <Home /> : <Navigate to="/pins" />} />
          <Route path="/pins" element={isLogined ? <Pins /> : <Navigate to="/" />} />
          <Route path="/pins/:id" element={isLogined ? <PinDetail /> : <Navigate to="/" />} />
          <Route path="/pin-builder" element={isLogined ? <PinBuilder /> : <Navigate to="/" />} />
          <Route path="/users/:id" element={isLogined ? <Users user={userInfo} /> : <Navigate to="/" />} />
          <Route path="/users/profile/:id" element={isLogined ? <Profile user={userInfo} /> : <Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
