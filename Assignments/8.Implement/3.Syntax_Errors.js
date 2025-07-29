const checkout = {
  items: [],
  total: 0,

  // Add item to the cart
  addItem(item) {
    // Coerce string to number if valid
    let price = parseFloat(item.price);

    // Validate price
    if (typeof price !== 'number' || isNaN(price)) {
      console.log(`Invalid price for item "${item.name || 'Unknown'}".`);
      return;
    }

    // Optional: store cleaned item with numeric price
    this.items.push({ ...item, price });
    this.total += price;
    console.log(`Added "${item.name}" for $${price.toFixed(2)}`);
  },

  // Get formatted total
  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  }
};

// Test cases
checkout.addItem({ name: "Coffee Maker", price: "99.95" });  // Price as string
checkout.addItem({ name: "Milk", price: 3.50 });             // Price as number
checkout.addItem({ name: "Invalid Item", price: "abc" });    // Invalid price

console.log(checkout.getTotal()); // Total: $103.45
