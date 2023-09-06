import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rocketsArray: [],
  isLoading: false,
  hasError: false,
};

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  try {
    const request = await axios.get('https://api.spacexdata.com/v3/rockets');
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
    [getRockets.pending]: (state) => {
      state.isLoading = true;
    },
    [getRockets.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [getRockets.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rocketsArray = (action.payload).map((rockect) => ({
        id: rockect.id,
        flickr_images: rockect.flickr_images,
        description: rockect.description,
        rocket_name: rockect.rocket_name,
        rocket_type: rockect.rocket_type,
      }));
      console.log(state.rocketsArray);
    },
  },
});

export default rocketsSlice.reducer;
