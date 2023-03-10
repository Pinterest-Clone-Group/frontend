import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import userApi from '../../apis/userApi';

const initialState = {
  userInfo: null,
  likedPins: [],
  followings: [],
  pinsArrs: [],
  response: {},
  message: '',
  isLoading: false,
  error: null,
  isLogined: localStorage.getItem('isLogined'),
};

// 회원가입
export const __signup = createAsyncThunk('signup', async (payload, thunkAPI) => {
  try {
    const response = await userApi.signup(payload);
    alert('회원가입 성공! 로그인 해주시기 바랍니다.');
    location.reload();
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    const { errorMessage } = error;
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
    location.reload();
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    const { errorMessage } = error;
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
    return thunkAPI.fulfillWithValue(response.data);
  } catch (error) {
    const { errorMessage } = error.response.data;
    alert(errorMessage);
    return thunkAPI.rejectWithValue(error);
  }
});

// 회원이 작성한 핀 조회
export const __getPinsMadeByUser = createAsyncThunk('getPinsMadeByUser', async (payload, thunkAPI) => {
  try {
    const { data } = await userApi.getPinsMadeByUser(payload.userId);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

// 회원이 즐겨찾기 한 핀 조회
export const __getLikedPins = createAsyncThunk('getLikedPins', async (payload, thunkAPI) => {
  try {
    const { data } = await userApi.getLikedPinsByUserId(payload.userId);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});
// 회원이 팔로우한 유저 조회
export const __getFollowingUsers = createAsyncThunk('getFollowingUsers', async (payload, thunkAPI) => {
  try {
    const { data } = await userApi.getFollowingUsers(payload.userId);
    console.log(data);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
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
      state.isLoading = false;
      state.userInfo = action.payload;
    },
    [__getUserInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 사용자 정보 수정
    [__updateUserInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    [__updateUserInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 회원 작성 핀 조회
    [__getPinsMadeByUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPinsMadeByUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.pinsArr = action.payload;
    },
    [__getPinsMadeByUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 회원이 즐겨찾기 한 핀 조회
    [__getLikedPins.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.likedPins = action.payload;
    },
    // 팔로우한 사용자 조회
    [__getFollowingUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [__getFollowingUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.followings = action.payload;
    },
    [__getFollowingUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { login, logout, changeProfile } = userSlice.actions;
export default userSlice.reducer;
