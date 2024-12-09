import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slice";

export default configureStore({
   reducer: {
      weather: weatherReducer,
   },
});
