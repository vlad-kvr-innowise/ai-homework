document.addEventListener('DOMContentLoaded', function() {
    const expenseTable = document.getElementById('expenseTable').getElementsByTagName('tbody')[0];
    const totalElement = document.getElementById('total');
    const averageElement = document.getElementById('average');
    const top3Element = document.getElementById('top3');

    function calculateExpenses() {
        let total = 0;
        let expenses = [];

        for (let row of expenseTable.rows) {
            const amount = parseFloat(row.cells[1].textContent);
            total += amount;
            expenses.push(amount);
        }

        const average = total / 30;
        expenses.sort((a, b) => b - a);
        const top3 = expenses.slice(0, 3);

        totalElement.textContent = `$${total.toFixed(2)}`;
        averageElement.textContent = `$${average.toFixed(2)}`;
        top3Element.textContent = top3.map(amount => `$${amount.toFixed(2)}`).join(', ');
    }

    window.calculateExpenses = calculateExpenses;
}); 