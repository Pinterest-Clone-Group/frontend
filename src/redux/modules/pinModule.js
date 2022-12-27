import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  pins: [],
  pin: null,
  isLoading: false,
  error: null,
};

// 현재 핀 목록 조회
export const __getPinList = createAsyncThunk('getPinList', async (payload, thunkAPI) => {
  try {
    const { data } = await payload.api();
    return thunkAPI.fulfillWithValue(data.pins);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

const pinModule = createSlice({
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
  },
});

// export const {} = postSlice.actions;
export default pinModule.reducer;
