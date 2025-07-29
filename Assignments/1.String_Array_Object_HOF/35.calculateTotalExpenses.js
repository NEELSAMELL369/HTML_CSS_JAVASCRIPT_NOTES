function calculateTotalExpenses(expenses) {
    // Sum up the amount values from all expense items
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    return totalExpenses;
}

// Example usage:
const expenses = [
    { name: "Food", amount: 50 },
    { name: "Transportation", amount: 30 },
    { name: "Internet", amount: 45 },
    { name: "Groceries", amount: 80 }
];

const totalExpenses = calculateTotalExpenses(expenses);
console.log(totalExpenses); // Output should be 205
