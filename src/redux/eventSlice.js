import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    categories: "",
    events: "",
    tags: [],
    guest: "",
    date: "",
    status1: false,
    status2: false,
    price: "",
    description: "",
    sponsorship: "",
};

const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {
        setEvent: (state, action) => {
            state.title = action.payload;
            state.categories = action.payload;
            state.events = action.payload;
            state.tags = action.payload;
            state.guest = action.payload;
            state.date = action.payload;
            state.status1 = true;
            state.status2 = true;
            state.price = action.payload;
            state.description = action.payload;
            state.sponsorship = action.payload;
        }
    }
});

export default eventSlice.reducer;
export const { saveEvent } = eventSlice.actions;