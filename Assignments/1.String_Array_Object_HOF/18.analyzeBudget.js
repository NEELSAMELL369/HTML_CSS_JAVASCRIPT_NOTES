function analyzeBudget(transactions) {
  const categoryTotals = {};
  const subCategoryTotals = {};




  transactions.forEach(txn => {
    const amount = Number(txn.amount.replace("₹", ""));


    categoryTotals[txn.category] = (categoryTotals[txn.category] || 0) + amount;


    subCategoryTotals[txn.subCategory] = (subCategoryTotals[txn.subCategory] || 0) + amount;
  });



  let maxSubCategory = null;
  let maxSubAmount = 0;
  for (const subCat in subCategoryTotals) {
    if (subCategoryTotals[subCat] > maxSubAmount) {
      maxSubCategory = subCat;
      maxSubAmount = subCategoryTotals[subCat];
    }
  }

  return {
    categoryTotals,
    maxSubCategory,
    maxSubAmount
  };
}

const transaction = [
  { name: "Rent", category: "Housing", subCategory: "Fixed", amount: "₹20000" },
  { name: "Groceries", category: "Food", subCategory: "Essentials", amount: "₹3500" },
  { name: "Electricity", category: "Housing", subCategory: "Utilities", amount: "₹3000" },
  { name: "Dining Out", category: "Food", subCategory: "Leisure", amount: "₹1200" },
  { name: "Netflix", category: "Entertainment", subCategory: "Subscriptions", amount: "₹500" },
  { name: "Internet", category: "Housing", subCategory: "Utilities", amount: "₹999" }
];

console.log(analyzeBudget(transaction));
