import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem("authToken") || null, // Load token from localStorage
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            const token = action.payload;
            state.token = token;
            localStorage.setItem('authToken', token);
        },
        logout: (state) => {
            state.token = null;
            localStorage.removeItem('authToken');
            
        },
    },
});

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;
