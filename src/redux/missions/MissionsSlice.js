import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseApiUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  error: null,
  loading: false,
};

const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await axios.get(baseApiUrl);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch missions.');
  }
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionIndex = state.missions.findIndex(
        (m) => m.mission_id === action.payload,
      );
      if (missionIndex !== -1) {
        state.missions[missionIndex].reserved = true;
      }
    },
    leaveMission: (state, action) => {
      const missionIndex = state.missions.findIndex(
        (m) => m.mission_id === action.payload,
      );
      if (missionIndex !== -1) {
        state.missions[missionIndex].reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.missions = (action.payload).map((mission) => ({
          mission_id: mission.mission_id,
          description: mission.description,
          mission_name: mission.mission_name,
          reserved: false,
        }));
        state.loading = false;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export { fetchMissions };

export default missionsSlice.reducer;
