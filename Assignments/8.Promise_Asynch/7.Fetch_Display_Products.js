async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const products = await response.json();

        // ✅ Display products in console
        products.forEach(product => {
            console.log(`Title: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log("----------------------------");
        });

        // ✅ Calculate total price using reduce
        const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
        console.log("Total price of all products:", totalPrice);

        // ✅ Display products in the webpage dynamically
        const container = document.createElement("div");
        container.style.display = "grid";
        container.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
        container.style.gap = "15px";

        products.forEach(product => {
            const card = document.createElement("div");
            card.style.border = "1px solid #ccc";
            card.style.padding = "10px";
            card.style.borderRadius = "5px";
            card.style.textAlign = "center";
            card.style.background = "#fff";

            card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" width="100">
        <h4>${product.title}</h4>
        <p><b>Price:</b> $${product.price}</p>
        <button>View Details</button>
      `;
            container.appendChild(card);
        });

        document.body.appendChild(container);

    } catch (error) {
        console.error("Failed to fetch products:", error);
        document.body.innerHTML = `<h2 style="color:red;">Failed to fetch products. Please try again later.</h2>`;
    }
}

fetchProducts();
