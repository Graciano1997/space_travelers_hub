import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rocketsArray: [],
  isLoading: false,
  hasError: false,
};

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  try {
    const request = await axios.get('url');
    return request.data;
  } catch (error) {
    return error;
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {

  },
  extraReducers: {

  },
});

export default rocketsSlice.reducer;
