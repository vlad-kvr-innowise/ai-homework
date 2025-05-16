// Expense Calculator JavaScript

// Initialize expenses array
let expenses = [
    { category: "Groceries", amount: 15000 },
    { category: "Rent", amount: 40000 },
    { category: "Transportation", amount: 5000 },
    { category: "Entertainment", amount: 10000 },
    { category: "Communication", amount: 2000 },
    { category: "Gym", amount: 3000 }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const categoryInput = document.getElementById('category');
    const amountInput = document.getElementById('amount');
    const addExpenseButton = document.getElementById('add-expense');
    const expenseList = document.getElementById('expense-list');
    const calculateButton = document.getElementById('calculate');
    const totalExpensesElement = document.getElementById('total-expenses');
    const averageDailyElement = document.getElementById('average-daily');
    const topExpensesElement = document.getElementById('top-expenses');

    // Initialize the expense list with sample data
    updateExpenseList();

    // Add expense event listener
    addExpenseButton.addEventListener('click', () => {
        const category = categoryInput.value.trim();
        const amount = parseFloat(amountInput.value);

        if (category && !isNaN(amount) && amount > 0) {
            // Add expense to array
            const expense = {
                category: category,
                amount: amount
            };
            expenses.push(expense);

            // Clear inputs
            categoryInput.value = '';
            amountInput.value = '';

            // Update expense list
            updateExpenseList();
        } else {
            alert('Please enter a valid category and amount');
        }
    });

    // Calculate button event listener
    calculateButton.addEventListener('click', () => {
        if (expenses.length === 0) {
            alert('Please add at least one expense');
            return;
        }

        // Calculate total expenses
        const totalExpenses = calculateTotalExpenses();
        totalExpensesElement.textContent = `$${totalExpenses.toLocaleString()}`;

        // Calculate average daily expense (total / 30 days)
        const averageDaily = totalExpenses / 30;
        averageDailyElement.textContent = `$${averageDaily.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

        // Find top 3 expenses
        const topExpenses = findTopExpenses(3);
        displayTopExpenses(topExpenses);
    });

    // Function to update the expense list in the UI
    function updateExpenseList() {
        // Clear the current list
        expenseList.innerHTML = '';

        // Add each expense to the table
        expenses.forEach((expense, index) => {
            const row = document.createElement('tr');

            const categoryCell = document.createElement('td');
            categoryCell.textContent = expense.category;
            row.appendChild(categoryCell);

            const amountCell = document.createElement('td');
            amountCell.textContent = `$${expense.amount.toLocaleString()}`;
            row.appendChild(amountCell);

            const actionCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.style.backgroundColor = '#f44336';
            deleteButton.addEventListener('click', () => {
                expenses.splice(index, 1);
                updateExpenseList();
            });
            actionCell.appendChild(deleteButton);
            row.appendChild(actionCell);

            expenseList.appendChild(row);
        });
    }

    // Function to calculate total expenses
    function calculateTotalExpenses() {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    // Function to find top N expenses
    function findTopExpenses(n) {
        // Sort expenses by amount (descending)
        return [...expenses]
            .sort((a, b) => b.amount - a.amount)
            .slice(0, n);
    }

    // Function to display top expenses
    function displayTopExpenses(topExpenses) {
        topExpensesElement.innerHTML = '';

        topExpenses.forEach(expense => {
            const listItem = document.createElement('li');
            listItem.textContent = `${expense.category} ($${expense.amount.toLocaleString()})`;
            topExpensesElement.appendChild(listItem);
        });
    }
});
