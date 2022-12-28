import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import userApi from '../../apis/userApi';

const initialState = {
  user: null, // 사용자 정보
  error: null, // 에러
  response: {},
  isLoading: false,
};

// 회원가입
export const __signup = createAsyncThunk('signup', async (payload, thunkAPI) => {
  //   const { email, password } = payload;
  try {
    const response = await userApi.signup(payload);
    return thunkAPI.fulfillWithValue(response.data);
    window.alert('회원가입 성공! 로그인 해주시기 바랍니다.');
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
  //     // 사용자 정보 조회
  //     getUserInfo: (state, action) => {
  //       state.user = action.payload;
  //     },
  //     // 로그인 유무 판단
  //     loginCheck: (state) => {
  //       const userId = localStorage.getItem('userId');
  //       const tokenCheck = localStorage.getItem('accessToken');
  //       // 브라우저에 토큰이 있으면
  //       if (tokenCheck && userId !== null) {
  //         state.user = { id: userId }; // 사용자 ID를 가져온다
  //       }
  //     },
  //     // 로그아웃
  //     logout: (state) => {
  //       // deleteCookie("accessToken"); // access token을 지운다
  //       localStorage.removeItem('accessToken'); // access token을 지운다
  //       // deleteCookie("refreshToken"); // refresh token을 지운다
  //       localStorage.removeItem('refreshToken'); // refresh token을 지운다
  //       localStorage.removeItem('userId'); // localstorage의 userId를 지운다
  //       state.user = null; // 사용자 정보 삭제
  //       window.location.href = '/'; // 메인으로 이동
  //     },
  //   },
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
  },
});

// export const { getUserInfo, loginCheck, logout } = userSlice.actions;
export default userSlice.reducer;
