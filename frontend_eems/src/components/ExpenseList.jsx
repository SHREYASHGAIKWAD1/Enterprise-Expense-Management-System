 
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Box, Chip } from '@mui/material';
import { approveExpense, rejectExpense } from '../redux/expenseSlice';
import PdfExport from './PdfExport';

const ExpenseList = ({ isManager = false }) => {
  const expenses = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();

  return (
    <Box sx={{ p: 2 }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Amount</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Status</TableCell>
              {isManager && <TableCell>Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell>${expense.amount}</TableCell>
                <TableCell>{expense.description}</TableCell>
                <TableCell>{expense.category}</TableCell>
                <TableCell>
                  <Chip
                    label={expense.status}
                    color={expense.status === 'Approved' ? 'success' : expense.status === 'Pending' ? 'warning' : 'error'}
                  />
                </TableCell>
                {isManager && (
                  <TableCell>
                    {expense.status === 'Pending' && (
                      <>
                        <Button
                          variant="contained"
                          color="success"
                          size="small"
                          onClick={() => dispatch(approveExpense(expense.id))}
                          sx={{ mr: 1 }}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          size="small"
                          onClick={() => dispatch(rejectExpense(expense.id))}
                        >
                          Reject
                        </Button>
                      </>
                    )}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isManager && <PdfExport expenses={expenses} />}
    </Box>
  );
};

export default ExpenseList;