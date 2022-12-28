import { configureStore } from '@reduxjs/toolkit';

// reducers
import userSlice from '../modules/userSlice';

const store = configureStore({
  reducer: {
    userSlice: userSlice,
  },

  //devtools 배포환경에선 사용못하도록 막기위함
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
