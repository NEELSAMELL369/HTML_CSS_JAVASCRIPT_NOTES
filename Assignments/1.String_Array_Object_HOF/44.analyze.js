function analyze(products) {
  const outOfStock = products
    .filter(product => product.stock === 0)
    .map(product => product.name);


  const totalStockValue = products
    .map(product => product.price * product.stock)
    .reduce((sum, value) => sum + value, 0);

  const avgPriceByCategory = products.reduce((acc, product) => {
    const { category, price } = product;
    if (!acc[category]) {
      acc[category] = { sum: 0, count: 0 };
    }
    acc[category].sum += price;
    acc[category].count += 1;
    return acc;
  }, {});

  const resultAvg = Object.entries(avgPriceByCategory).reduce((acc, [category, data]) => {
    acc[category] = parseFloat((data.sum / data.count).toFixed(1));
    return acc;
  }, {});

  return {
    outOfStock,
    totalStockValue,
    avgPriceByCategory: resultAvg
  } 
}


const products = [
  { id: 1, name: "Laptop", price: 72000, category: "Electronics", stock: 4 },
  { id: 2, name: "Shoes", price: 3500, category: "Fashion", stock: 0 },
  { id: 3, name: "Phone", price: 48000, category: "Electronics", stock: 7 },
  { id: 4, name: "T-Shirt", price: 1200, category: "Fashion", stock: 23 },
  { id: 5, name: "Headphones", price: 2600, category: "Electronics", stock: 0 }
];


console.log(analyze(products));
