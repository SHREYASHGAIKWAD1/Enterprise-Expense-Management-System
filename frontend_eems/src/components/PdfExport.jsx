import React from 'react';
import { Button } from '@mui/material';
import jsPDF from 'jspdf';

const PdfExport = ({ expenses }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Set font for the document
    doc.setFont('Helvetica', 'normal');
    
    // Header background (gradient-like effect with a solid color)
    doc.setFillColor(25, 118, 210); // MUI primary blue (#1976d2)
    doc.rect(0, 0, 210, 30, 'F'); // Full-width header rectangle
    
    // Title
    doc.setTextColor(255, 255, 255); // White text
    doc.setFontSize(20);
    doc.setFont('Helvetica', 'bold');
    doc.text('Expense Report', 20, 20);
    
    // Reset text color and font for the table
    doc.setTextColor(0, 0, 0); // Black text
    doc.setFontSize(12);
    doc.setFont('Helvetica', 'normal');
    
    // Table header
    const startY = 40;
    doc.setFillColor(200, 220, 255); // Light blue background for header
    doc.rect(20, startY, 170, 10, 'F'); // Table header background
    doc.setFont('Helvetica', 'bold');
    doc.text('No.', 22, startY + 7);
    doc.text('Description', 35, startY + 7);
    doc.text('Amount', 100, startY + 7);
    doc.text('Category', 130, startY + 7);
    doc.text('Status', 160, startY + 7);
    
    // Table rows
    let y = startY + 10;
    expenses.forEach((expense, index) => {
      // Alternating row colors
      if (index % 2 === 0) {
        doc.setFillColor(240, 245, 255); // Very light blue for even rows
        doc.rect(20, y, 170, 10, 'F');
      }
      
      // Row content
      doc.setFont('Helvetica', 'normal');
      doc.text(`${index + 1}.`, 22, y + 7);
      doc.text(expense.description, 35, y + 7);
      doc.text(`$${expense.amount}`, 100, y + 7);
      doc.text(expense.category, 130, y + 7);
      doc.text(expense.status, 160, y + 7);
      
      // Row border
      doc.setDrawColor(150, 150, 150); // Gray border
      doc.rect(20, y, 170, 10); // Border for each row
      y += 10;
    });
    
    // Footer
    const pageHeight = doc.internal.pageSize.height;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100); // Gray text
    doc.setFont('Helvetica', 'italic');
    doc.text(
      `Generated on ${new Date().toLocaleDateString()} by Enterprise Expense Management System`,
      20,
      pageHeight - 15
    );
    
    // Subtle watermark (optional branding)
    doc.setFontSize(30);
    doc.setTextColor(200, 200, 200, 0.2); // Very light gray with transparency
    doc.setFont('Helvetica', 'bold');
    doc.text('EEMS', 80, pageHeight / 2, { angle: 45 }); // Diagonal watermark
    
    // Save the PDF
    doc.save('expense-report.pdf');
  };

  return (
    <Button variant="contained" color="primary" onClick={generatePDF} sx={{ mt: 2 }}>
      Export to PDF (Premium)
    </Button>
  );
};

export default PdfExport;