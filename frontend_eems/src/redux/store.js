 
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import expenseReducer from './expenseSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    expenses: expenseReducer,
    users: userReducer,
  },
});