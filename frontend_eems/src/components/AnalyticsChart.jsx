 
import React from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Box, Typography } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AnalyticsChart = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  const data = {
    labels: ['Travel', 'Food', 'Equipment', 'Other'],
    datasets: [
      {
        label: 'Expenses by Category',
        data: expenses.reduce(
          (acc, expense) => {
            const index = ['Travel', 'Food', 'Equipment', 'Other'].indexOf(expense.category);
            if (index !== -1) acc[index] += expense.amount;
            return acc;
          },
          [0, 0, 0, 0]
        ),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Box sx={{ p: 2, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Expense Analytics (Premium)
      </Typography>
      <Bar data={data} options={{ responsive: true }} />
    </Box>
  );
};

export default AnalyticsChart;