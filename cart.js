
// getter reads cart from localStorage and if its empty returns nothing
function getCart() {
    const storedProducts = localStorage.getItem("cart");
    return storedProducts ? JSON.parse(storedProducts) : [];
}
// the element that the cart items will be shown in
const cartProductsElement = document.getElementById("cart-items");
// show products that are in the cart
function showCart() {
    const cart = getCart(); //getting the items that the cart contains
    cartProductsElement.innerHTML = ""; //clear the element
    // creating one row for each product exists in the cart
    cart.forEach(product => {
        const cartRow = document.createElement("div");
         cartRow.className ="cart-row";
        // quantity of the product, image,name and price
         cartRow.innerHTML =`
            <span class="quantity">${product.quantity}</span>
            <span class="cart-product">
            <img src="${product.image}" alt="${product.name}" class="cart-image">
            <span class="product-name">${product.name}</span>
            </span>
            <span class="product-price">£${product.price.toFixed(2)}</span>
         `;
         // adding the row to the cart list
         cartProductsElement.appendChild(cartRow);
    });
}
// load the cart items
 showCart();

// selecting the button of hamburger menu and the products page
const header = document.querySelector(".cart-menu");
const toggle = document.querySelector(".hamburger-menu");
// when the hamburger button is clicked the nav open class is toggled on the header
// in css I used .products-menu.nav-open .nav-panel To show or hide the page links on >768px screens
toggle.addEventListener("click", () => {
    header.classList.toggle("nav-open");
});
