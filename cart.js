

function getCart() {
    const storedProducts = localStorage.getItem("cart");
    return storedProducts ? JSON.parse(storedProducts) : [];
}

const cartProductsElement = document.getElementById("cart-items");

function showCart() {
    const cart = getCart();
    cartProductsElement.innerHTML = "";

    cart.forEach(product => {
        const cartRow = document.createElement("div");
         cartRow.className ="cart-row";

         cartRow.innerHTML =`
            <span class="quantity">${product.quantity}</span>
            <span class="cart-product">
            <img src="${product.image}" alt="${product.name}" class="cart-image">
            <span class="product-name">${product.name}</span>
            </span>
            <span class="product-price">£${product.price.toFixed(2)}</span>
         `;
         cartProductsElement.appendChild(cartRow);
    });
}
 showCart();

