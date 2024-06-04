import { createSlice } from "@reduxjs/toolkit";

const fetchingStatusSlic = createSlice({
  name: "fetchingStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {},
    markFetchingStart: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});
export const fetchingStatusAction = fetchingStatusSlic.actions;
export default fetchingStatusSlic;
