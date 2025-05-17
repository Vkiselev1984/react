import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { tasks as localTasks } from '../data/tasks';


export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, thunkAPI) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(localTasks);
      }, 1000); 
    });
  }
);

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default taskSlice.reducer;
