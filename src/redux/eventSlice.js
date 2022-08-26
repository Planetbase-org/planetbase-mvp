import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  categories: "",
  event: "",
  guest: 0,
  date: "",
  status1: false,
  status2: false,
  price: 0,
  description: "",
  sponsorship: "",
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    saveEvent: (state, action) => {
      state.title = action.payload;
      state.categories = action.payload;
      state.event = action.payload;
      // state.guest = +1;e
      // state.date = action.payload;
      // state.status1 = true;
      // state.status2 = true;
      // state.price = +1;
      state.description = action.payload;
      state.sponsorship = action.payload;
    },
  },
});

export const { saveEvent } = eventSlice.actions;
export default eventSlice.reducer;
