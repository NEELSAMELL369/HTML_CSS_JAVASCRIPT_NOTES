function groupAndCountCategories(categories) {
  // Step 1: Use reduce to count category occurrences
  const counts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return counts;
}

// Extra Challenge: Sort categories by their count in descending order
function sortCategoriesByCount(countsObj) {
  return Object.entries(countsObj)
    .sort((a, b) => b[1] - a[1])      // Sort by count descending
    .map(entry => entry[0]);          // Return only category names
}

// Example input
const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

// Get counts
const groupedCounts = groupAndCountCategories(categories);
console.log("Grouped Counts:", groupedCounts);

// Sorted categories (Extra Challenge)
const sortedCategories = sortCategoriesByCount(groupedCounts);
console.log("Sorted Categories:", sortedCategories);
