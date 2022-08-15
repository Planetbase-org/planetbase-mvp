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
            state.
        }
    }
})