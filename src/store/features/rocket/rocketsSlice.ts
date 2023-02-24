import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../..";

interface RocketLaunchState {
  countdown: number;
  launching: boolean;
}

const initialState: RocketLaunchState = {
  countdown: 10,
  launching: false,
};

export const rocketLaunchSlice = createSlice({
  name: "rocketLaunch",
  initialState,
  reducers: {
    decrementCountdown: (state) => {
      state.countdown -= 1;
    },
    launchRocket: (state) => {
      state.launching = true;
    },
    reset: (state) => {
      state.countdown = 10;
      state.launching = false;
    },
  },
});

export const { decrementCountdown, launchRocket, reset } =
  rocketLaunchSlice.actions;

export const launchRocketAsync =
  (): AppThunk =>
  (
    dispatch: (arg0: {
      payload: undefined;
      type: "rocketLaunch/launchRocket";
    }) => void
  ) => {
    setTimeout(() => {
      dispatch(launchRocket());
    }, 5000);
  };

export const rocketLaunchReducer = rocketLaunchSlice.reducer;
