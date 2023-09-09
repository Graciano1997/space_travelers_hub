import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseApiUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  error: null,
  loading: false,
};

const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await fetch(baseApiUrl);
    // const result = await response.json();
    const result = response.json();

    // const missions = result.map((mission) => ({
    //   ...mission,
    //   reserved: false,
    // }));

    // localStorage.setItem('missions', JSON.stringify(missions));

    // return missions;
    return result;
  } catch (error) {
    throw new Error('Failed to fetch missions.');
  }
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      // const idMission = action.payload;
      const missionIndex = state.missions.findIndex(
        // (m) => m.mission_id === action.payload.mission_id,
        (m) => m.mission_id === action.payload,
      );
      if (missionIndex !== -1) {
        state.missions[missionIndex].reserved = true;
      }
    },
    leaveMission: (state, action) => {
      const missionIndex = state.missions.findIndex(
        (m) => m.mission_id === action.payload,
        // (m) => m.mission_id === action.payload.mission_id,
      );
      if (missionIndex !== -1) {
        state.missions[missionIndex].reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.loading = true;// new
        state.error = null;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.missions = action.payload;
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
