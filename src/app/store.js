import { configureStore } from '@reduxjs/toolkit';
import eventSlice from '../redux/eventSlice';

export const store = configureStore({
    reducer: {
        events:eventSlice
    },
})

