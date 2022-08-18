import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  categories: "",
  event: "",
  tag: [],
  guest: "",
  date: "",
  status1: false,
  status2: false,
  price: "",
  description: "",
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    event: (state, action) => {
      state.title = action.payload;
      state.categories = action.payload;
      state.event = action.payload;
      state.tag = action.payload;
      state.guest = action.payload;
      state.date = action.payload;
      state.status1 = true;
      state.status2 = true;
      state.price = action.payload;
      state.description = action.payload;
      state.sponsorship = action.payload;
    },
  },
});

export default eventSlice.reducer;
export const { events } = eventSlice.actions;
