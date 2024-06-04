import { configureStore } from "@reduxjs/toolkit";
import fetchingStatusSlic from "./fetchingStatusSlice";
const homeRentStore = configureStore({
  reducer: {
    fetchingStatusSlic,
  },
});
export default homeRentStore;
