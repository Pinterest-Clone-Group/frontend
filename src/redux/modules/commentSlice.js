import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import commentApi from '../../apis/commentApi';

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

// 현재 댓글 목록 조회
export const __getCommentList = createAsyncThunk('getCommentList', async (payload, thunkAPI) => {
  try {
    const { data } = await commentApi.getAll({ pinId: payload.pinId });
    return thunkAPI.fulfillWithValue(data.comment);
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const __updateComment = createAsyncThunk('editComment', async (payload, thunkAPI) => {
  try {
    const { commentId, comment } = payload;
    await commentApi.updateById({ commentId, comment });
    return thunkAPI.fulfillWithValue(payload);
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export const __deleteComment = createAsyncThunk('deleteComment', async (payload, thunkAPI) => {
  try {
    await commentApi.deleteById({ commentId: payload.commentId });
    return thunkAPI.fulfillWithValue(payload);
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [__getCommentList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCommentList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getCommentList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__updateComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.map((e) => ({
        ...e,
        comment: e.commentId === action.payload.commentId ? action.payload.comment : e.comment,
      }));
    },
    [__updateComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.filter((comment) => comment.commentId !== action.payload.commentId);
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const {} = commentSlice.actions;
export default commentSlice.reducer;
