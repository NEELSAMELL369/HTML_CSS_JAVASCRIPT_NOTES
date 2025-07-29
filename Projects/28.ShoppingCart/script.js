// Example product data
const products = [
    { id: 1, name: 'Product 1', price: 25.99, img: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 19.99, img: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 15.49, img: 'https://via.placeholder.com/150' },
];

const cartItemsContainer = document.getElementById('cart-items');
const totalItems = document.querySelector('.total-items');
const totalPrice = document.querySelector('.total-price');

let cart = [];

// Function to update the cart display
function updateCart() {
    cartItemsContainer.innerHTML = '';
    let totalItemsCount = 0;
    let totalAmount = 0;

    cart.forEach(item => {
        totalItemsCount += item.quantity;
        totalAmount += item.price * item.quantity;

        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.dataset.id = item.id;

        itemElement.innerHTML = `
            <img src="${item.img}" alt="Product Image" class="product-img">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p class="price">$${item.price.toFixed(2)}</p>
                <div class="quantity">
                    <button class="decrement">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="increment">+</button>
                </div>
            </div>
            <button class="remove">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);

        itemElement.querySelector('.increment').addEventListener('click', () => {
            item.quantity++;
            updateCart();
        });

        itemElement.querySelector('.decrement').addEventListener('click', () => {
            if (item.quantity > 1) {
                item.quantity--;
                updateCart();
            }
        });

        itemElement.querySelector('.remove').addEventListener('click', () => {
            cart = cart.filter(cartItem => cartItem.id !== item.id);
            updateCart();
        });
    });

    totalItems.textContent = totalItemsCount;
    totalPrice.textContent = totalAmount.toFixed(2);
}

// Add products to the cart dynamically
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}

// Example of adding products to the cart
addToCart(1);
addToCart(2);
addToCart(3);
