import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  categories: [],
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
      const newEvent = {
        id: new Date(),
        title : action.payload,
        categories : action.payload,
        event : action.payload,
        guest : +1,
        date : action.payload,
        status1 : action.payload,
        status2 : action.payload,
        price : +1,
        description : action.payload,
        sponsorship : action.payload,
      }
      state.push
    },
    deleteTask: (state, action) => {
      return state.filter((event) => event.id !== action.payload.id)
    }
  },
});

export const { saveEvent } = eventSlice.actions;
export default eventSlice.reducer;
