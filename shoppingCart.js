const products = [
    { name: "Library Stool Chair", price: 20, image: "./Asserts/images/library-chairs1.jpg" },
    { name: "Library Stool Chair", price: 20, image: "./Asserts/images/library-furniture-2.jpg" },
    
];


function renderProducts(productsArray = products) {
    const productContainer = document.querySelector(".product-list");
    productContainer.innerHTML = "";

    productsArray.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        productContainer.appendChild(productItem);
    });
}

function addToCart(product) {
    const cartItems = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");
    const totalPrice = parseFloat(totalPriceElement.textContent);

    const cartItem = document.createElement("li");
    cartItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;

    totalPriceElement.textContent = (totalPrice + product.price).toFixed(2);
    cartItems.appendChild(cartItem);
}


document.addEventListener("click", function(event) {
    if (event.target.classList.contains("addCart-btn")) {
        const productItem = event.target.closest(".product-item");
        const productName = productItem.querySelector("h3").textContent;
        const productPrice = parseFloat(productItem.querySelector(".price").textContent.slice(1)); // Remove $ sign
        const product = { name: productName, price: productPrice };
        
        addToCart(product);
    }
});


function clearCart() {
    const cartItems = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");

    cartItems.innerHTML = "";

    totalPriceElement.textContent = "0";
}


document.querySelector(".clear-btn").addEventListener("click", clearCart);


function sortProductsByPrice() {
    products.sort((a, b) => a.price - b.price);
    renderProducts();
}


document.querySelector(".sort-btn").addEventListener("click", sortProductsByPrice);


function filterProductsByPrice(priceRange) {
    const filterPrice = parseFloat(priceRangeInput.value);
    const filteredProducts = products.filter(product => product.price <= filterPrice);
    renderProducts(filteredProducts);
}


document.getElementById("priceRange").addEventListener("change", function(event) {
    const priceRange = event.target.value;
    filterProductsByPrice(priceRange);
});



