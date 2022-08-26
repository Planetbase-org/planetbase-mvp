import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/auth/authSlice';
import eventReducer from '../redux/eventSlice';

export const store = configureStore({
    reducer: {
        event: eventReducer,
        auth: authReducer
    },
})


