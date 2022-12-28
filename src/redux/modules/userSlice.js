import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import userApi from '../../apis/userApi';

const initialState = {
  // user: null, // 사용자 정보
  // error: null, // 에러
  response: {},
  isLoading: false,
};

// 회원가입
export const __signup = createAsyncThunk('signup', async (payload, thunkAPI) => {
  try {
    const response = await userApi.signup(payload);
    alert('회원가입 성공! 로그인 해주시기 바랍니다.');
    window.location.reload();
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    const { errorMessage } = error.response.data;
    alert(errorMessage);
    return thunkAPI.rejectWithValue(error);
  }
});

// 회원가입
export const __login = createAsyncThunk('login', async (payload, thunkAPI) => {
  try {
    const response = await userApi.login(payload);
    localStorage.setItem('accessToken', response.data.accessToken.split('%')[1]);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    alert('로그인 성공!');
    window.location.reload();
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    const { errorMessage } = error.response.data;
    alert(errorMessage);
    return thunkAPI.rejectWithValue(error);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    // 회원가입
    [__signup.pending]: (state) => {
      state.isLoading = true;
    },
    [__signup.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
    },
    [__signup.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 로그인
    [__login.pending]: (state) => {
      state.isLoading = true;
    },
    [__login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
    },
    [__login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const { loginCheck } = userSlice.actions;
export default userSlice.reducer;
