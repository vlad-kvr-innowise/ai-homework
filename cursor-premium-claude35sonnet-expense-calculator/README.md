# Expense Calculator

A simple web application to help users track and analyze their monthly expenses. The application provides functionality to add expenses, calculate totals, and view spending insights.

## Features

- Add new expenses with category and amount
- View all expenses in a table format
- Delete individual expenses
- Calculate and display:
  - Total expenses
  - Average daily expense
  - Top 3 largest expenses
- Responsive design that works on both desktop and mobile devices
- Sample data available for testing

## How to Use

1. Open `index.html` in a web browser
2. Add expenses:
   - Enter the expense category
   - Enter the amount in dollars
   - Click "Add Expense"
3. View your expenses in the table
4. Click "Calculate" to see:
   - Total expenses
   - Average daily expense (based on 30-day month)
   - Top 3 largest expenses

## Sample Data

To load sample data for testing:
1. Open `script.js`
2. Uncomment the last line: `// addSampleData();`
3. Refresh the page

The sample data includes common expense categories like rent, groceries, transportation, etc.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## File Structure

```
expense-calculator/
├── index.html      # Main HTML file
├── styles.css      # CSS styles
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## Browser Compatibility

The application works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge 