 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addExpenseApi, fetchExpensesApi } from '../services/api';

export const addExpenseAsync = createAsyncThunk('expenses/addExpense', async (expense) => {
  const response = await addExpenseApi(expense);
  return response.data;
});

export const fetchExpensesAsync = createAsyncThunk('expenses/fetchExpenses', async () => {
  const response = await fetchExpensesApi();
  return response.data;
});

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    expenses: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addExpense(state, action) {
      state.expenses.push({ ...action.payload, id: state.expenses.length + 1 });
    },
    approveExpense(state, action) {
      const expense = state.expenses.find((exp) => exp.id === action.payload);
      if (expense) expense.status = 'Approved';
    },
    rejectExpense(state, action) {
      const expense = state.expenses.find((exp) => exp.id === action.payload);
      if (expense) expense.status = 'Rejected';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addExpenseAsync.fulfilled, (state, action) => {
        state.expenses.push(action.payload);
      })
      .addCase(fetchExpensesAsync.fulfilled, (state, action) => {
        state.expenses = action.payload;
      });
  },
});

export const { addExpense, approveExpense, rejectExpense } = expenseSlice.actions;
export default expenseSlice.reducer;