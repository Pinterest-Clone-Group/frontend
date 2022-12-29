import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import pinApi from '../../apis/pinApi';

const initialState = {
  pins: [],
  pin: null,
  isLoading: false,
  error: null,
};

// 현재 핀 목록 조회
export const __getPinList = createAsyncThunk('getPinList', async (payload, thunkAPI) => {
  try {
    const response = await payload.api();

    // data를 못 받아와서 property 값을 받아올수 있도록 수정했습니다.
    return thunkAPI.fulfillWithValue(response);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const __getPinDetailById = createAsyncThunk('getPinDetailById', async (payload, thunkAPI) => {
  try {
    const { data } = await pinApi.getById(payload.id);
    // data를 못 받아와서 property 값을 받아올수 있도록 수정했습니다
    return thunkAPI.fulfillWithValue(data.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

const pinSlice = createSlice({
  name: 'pins',
  initialState,
  reducers: {},
  extraReducers: {
    [__getPinList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPinList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.pins = action.payload;
    },
    [__getPinList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPinDetailById.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPinDetailById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.pin = action.payload;
    },
    [__getPinDetailById.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const {} = postSlice.actions;
export default pinSlice.reducer;
