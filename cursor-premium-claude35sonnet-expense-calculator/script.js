// Store expenses in an array
let expenses = [];

// DOM Elements
const expenseForm = document.getElementById('expenseForm');
const categoryInput = document.getElementById('category');
const amountInput = document.getElementById('amount');
const expensesList = document.getElementById('expensesList');
const calculateBtn = document.getElementById('calculateBtn');
const totalExpensesElement = document.getElementById('totalExpenses');
const averageExpenseElement = document.getElementById('averageExpense');
const topExpensesElement = document.getElementById('topExpenses');

// Add expense
expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const category = categoryInput.value.trim();
    const amount = parseFloat(amountInput.value);
    
    if (category && amount > 0) {
        const expense = {
            id: Date.now(),
            category,
            amount
        };
        
        expenses.push(expense);
        updateExpensesList();
        expenseForm.reset();
    }
});

// Update expenses list
function updateExpensesList() {
    expensesList.innerHTML = '';
    
    expenses.forEach(expense => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.category}</td>
            <td>$${expense.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            <td>
                <button class="btn-delete" onclick="deleteExpense(${expense.id})">Delete</button>
            </td>
        `;
        expensesList.appendChild(row);
    });
}

// Delete expense
function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    updateExpensesList();
}

// Calculate statistics
calculateBtn.addEventListener('click', () => {
    // Calculate total expenses
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalExpensesElement.textContent = formatCurrency(total);
    
    // Calculate average daily expense
    const averageDaily = total / 30; // Assuming 30 days per month
    averageExpenseElement.textContent = formatCurrency(averageDaily);
    
    // Get top 3 expenses
    const topExpenses = [...expenses]
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 3);
    
    // Update top expenses list
    topExpensesElement.innerHTML = topExpenses
        .map(expense => `<li>${expense.category}: ${formatCurrency(expense.amount)}</li>`)
        .join('');
    
    // If less than 3 expenses, fill remaining slots with placeholder
    for (let i = topExpenses.length; i < 3; i++) {
        topExpensesElement.innerHTML += '<li>-</li>';
    }
});

// Helper function to format currency
function formatCurrency(amount) {
    return `$${amount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}

// Add sample data (optional)
function addSampleData() {
    const sampleData = [
        { category: 'Groceries', amount: 15000 },
        { category: 'Rent', amount: 40000 },
        { category: 'Transportation', amount: 5000 },
        { category: 'Entertainment', amount: 10000 },
        { category: 'Communication', amount: 2000 },
        { category: 'Gym', amount: 3000 }
    ];
    
    sampleData.forEach(item => {
        expenses.push({
            id: Date.now() + Math.random(),
            ...item
        });
    });
    
    updateExpensesList();
}

// Uncomment the line below to add sample data when the page loads
// addSampleData(); 