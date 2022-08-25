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
  }


const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    saveEvent: (state, action) => {
      state.title = action.payload;
      state.categories = action.payload;
      state.event = action.payload;
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

export const { saveEvent } = eventSlice.actions;
export default eventSlice.reducer;
