import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = null; // MY API_KEY

export const fetchWeather = createAsyncThunk(
   "weather/fetchWeather",
   async function (cityName, { rejectWithValue }) {
      try {
         const resp = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
         );

         if (!resp.ok) {
            throw new Error("Server Error!");
         }

         const data = await resp.json();

         return data;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   }
);

const weatherSlice = createSlice({
   name: "weather",
   initialState: {
      weatherData: null,
      loading: false,
      error: null,
   },
   extraReducers: (builder) => {
      builder.addCase(fetchWeather.pending, (state) => {
         state.loading = true;
         state.error = null;
      });
      builder.addCase(fetchWeather.fulfilled, (state, action) => {
         state.loading = false;
         state.error = null;
         state.weatherData = action.payload;
      });
      builder.addCase(fetchWeather.rejected, (state, action) => {
         state.loading = false;
         state.error = action.payload;
      });
   },
});

export default weatherSlice.reducer;
