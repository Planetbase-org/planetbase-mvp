import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Get user data from local storage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: null ? user : null,
    isError: false,
    isLoading: false,
    message: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        }
    },
    extraReducers: () => {
        
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer;