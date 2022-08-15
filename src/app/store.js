import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../redux/eventSlice';

export const store = configureStore({
    reducer: {
        event:eventReducer
    },
})

