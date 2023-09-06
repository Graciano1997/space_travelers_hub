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
    bookingRockets: (state, action) => {
      const id = action.payload;
      const newState = state.rocketsArray.map((rocket) => {
        if (rocket.id !== id) {
          return rocket;
        }

        if (rocket.reserved === undefined || rocket.reserved === false) {
          return { ...rocket, reserved: true };
        }
        return { ...rocket, reserved: false };
      });
      state.rocketsArray = newState;
    },
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
      const newRocketsArray = (action.payload).map((rockect) => ({
        id: parseInt(rockect.id, 10),
        flickr_images: rockect.flickr_images,
        description: rockect.description,
        rocket_name: rockect.rocket_name,
        rocket_type: rockect.rocket_type,
      }));
      state.rocketsArray = newRocketsArray;
      console.log('********************');
      console.log(state.rocketsArray);
    },
  },
});
export const { bookingRockets } = rocketsSlice.actions;
export default rocketsSlice.reducer;
