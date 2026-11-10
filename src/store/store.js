import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './userSlice.js';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
