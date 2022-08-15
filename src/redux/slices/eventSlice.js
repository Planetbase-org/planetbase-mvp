import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    categories: "",
    event: "",
    tags: [],
    guest: "",
    date: "",
    status: false,
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
            state.event = action.payload;
            state.tags = action.payload;
            state.guest = action.payload;
            state.date = action.payload;
            state.status = true;
            state.price = action.payload;
            state.description = action.payload;
            state.sponsorship = action.payload;
        }
    }
});

export default eventSlice.reducer;
export const { setEvent } = eventSlice.actions;