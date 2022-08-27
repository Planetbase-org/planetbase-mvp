import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   title: "",
//   categories: [],
//   event: "",
//   guest: 0,
//   date: "",
//   status1: false,
//   status2: false,
//   price: 0,
//   description: "",
//   sponsorship: "",
// };

const eventSlice = createSlice({
  name: "event",
  initialState:[],
  reducers: {
    saveEvent: ((state={ event: [] }, action) => {
      const newEvent = {
        id: new Date(),
        title : action.payload.event,
        categories : action.payload.event,
        event : action.payload.event,
        guest : +1,
        date : action.payload.event,
        status1 : action.payload.event,
        status2 : action.payload.event,
        price : +1,
        description : action.payload.event,
        sponsorship : action.payload.event,
      }
      state.push(newEvent);
    },
    deleteTask: (state, action) => {
      return state.filter((event) => event.id !== action.payload.id)
    }
  },
});

export const { saveEvent, deleteTask } = eventSlice.actions;
export default eventSlice.reducer;
