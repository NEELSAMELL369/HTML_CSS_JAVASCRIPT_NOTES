function calculatePrice(price, discount = 10) {
    if (isNaN(price) || price <= 0) {
        return "Error: Price should be a positive number.";
    }

    if (isNaN(discount) || discount < 0) {
        return "Error: Discount should be a positive number.";
    }

    const finalPrice = price - (price * (discount / 100));
    
    return `The final price after applying a ${discount}% discount is: ${finalPrice.toFixed(2)}`;
}


let priceInput = prompt("Enter the price: ");

let discountInput = prompt("Enter the discount (optional, press enter to apply 10%): ");
priceInput = parseFloat(priceInput);
discountInput = discountInput ? parseFloat(discountInput) : undefined;

const result = calculatePrice(priceInput, discountInput);
alert(result);
 