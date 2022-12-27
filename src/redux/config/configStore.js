import { configureStore } from '@reduxjs/toolkit';
import pinModule from '../modules/pinModule';

// reducers

const store = configureStore({
  reducer: {
    pins: pinModule,
  },

  //devtools 배포환경에선 사용못하도록 막기위함
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
