 
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Mock API URL
});

// Mock API responses
export const loginUser = async ({ username, password }) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === 'employee' && password === 'pass')
        resolve({ data: { id: 1, name: 'Employee User', role: 'Employee' } });
      else if (username === 'manager' && password === 'pass')
        resolve({ data: { id: 2, name: 'Manager User', role: 'Manager' } });
      else if (username === 'admin' && password === 'pass')
        resolve({ data: { id: 3, name: 'Admin User', role: 'Admin' } });
      else throw new Error('Invalid credentials');
    }, 500);
  });
};

export const registerUser = async ({ name, email, password, role }) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { id: 4, name, role } });
    }, 500);
  });
};

export const addExpenseApi = async (expense) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { ...expense, id: Math.random() } });
    }, 500);
  });
};

export const fetchExpensesApi = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: [] });
    }, 500);
  });
};

export const fetchUsersApi = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          { id: 1, name: 'Employee User', role: 'Employee' },
          { id: 2, name: 'Manager User', role: 'Manager' },
          { id: 3, name: 'Admin User', role: 'Admin' },
        ],
      });
    }, 500);
  });
};

export default api;