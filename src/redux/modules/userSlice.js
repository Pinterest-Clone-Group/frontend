import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import userApi from '../../apis/userApi';

const initialState = {
  userInfo: null,
  response: {},
  isLoading: false,
  error: null,
  isLogined: false,
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

// 로그인
export const __login = createAsyncThunk('login', async (payload, thunkAPI) => {
  try {
    const response = await userApi.login(payload);
    localStorage.setItem('accessToken', response.data.accessToken.split(' ')[1]);
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

// 마이페이지 회원정보 조회
export const __getUserInfo = createAsyncThunk('getUserInfo', async (payload, thunkAPI) => {
  try {
    const { data } = await userApi.getUserInfo(payload.userId);
    return thunkAPI.fulfillWithValue({ ...data.data, userId: payload.userId });
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

// 회원 정보 수정
export const __updateUserInfo = createAsyncThunk('updateUserInfo', async (payload, thunkAPI) => {
  try {
    const response = await userApi.updateUserInfo(payload);
    alert('회원 정보 수정 성공!');
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
  reducers: {
    login: (state) => {
      state.isLogined = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLogined = false;
    },
    changeProfile: (state, action) => {
      state.user.image = action.payload;
    },
  },
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
    // 사용자 정보 조회
    [__getUserInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [__getUserInfo.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
    },
    [__getUserInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isLogined = false;
    },
  },
});

export const { login, logout, changeProfile } = userSlice.actions;
export default userSlice.reducer;
