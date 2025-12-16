
/*
this function creates the products
it builds an array of product objects including productName, total of products , the folder where images are
the product price and the description
 */

function createProducts(productName,total,imageFolder,productPrice, description){
 const productList = []; // empty product list
    for(let i = 1; i <=total; i++){ // loop from 1 up to the total of products
        productList.push({
            id: `${productName.toLowerCase()}${i}`, // unique id for each product
            name: `${productName} ${i}`,            // display name
            price: productPrice,                    // product price
             image:`${imageFolder}/${productName.toLowerCase()} (${i}).jpg`, // product image
             description: description,                                       // product description
             category: productName.toLowerCase()                             // product category
        });
    }
    return productList; // return the product list
}
// building the hoodie list
const hoodies = createProducts(
    "Hoodie",
    34,
    "images/hoodies",
    39.99,
    "Cotton authentic character and practicality are combined in this comfy, warm and luxury hoodie for students that goes with everything to create casual looks."
);
// building the jumper list
const jumpers = createProducts(
    "Jumper",
    40,
    "images/jumpers",
    29.99,
    "cotton authentic character and practically are combined in this comfy warm and winter jumper for students that goes with everything to create casual looks"
);
// building the tshirt list
const tshirts = createProducts(
    "Tshirt",
    35,
    "images/tshirts",
    19.99,
    "cotton authentic character and practically are combined in this comfy T-shirt for students that goes with everything to create casual looks"
);

// combining the 3 product arrays into 1
const allProducts = [...hoodies, ...jumpers, ...tshirts];

/* here are the helpers for the cart */
// getter reads cart from localStorage and if its empty returns nothing
function getCart(){
    const storedProducts = localStorage.getItem("cart");
    return storedProducts ? JSON.parse(storedProducts) : [];
}

// saves int local storage the current cart array
function saveCart(cart){
    localStorage.setItem("cart", JSON.stringify(cart));
}
// this function adds a product to the cart or increases the quantity if the product exists
function addToCart(product){
    const cart= getCart();

    const inCart = cart.find(item => item.id === product.id); //here it tries to find if the product exists in the cart
    if(inCart){ // if found increases quantity
        inCart.quantity += 1;

    }
    else{ //here it pushes a new product in the cart
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    saveCart(cart); // calling saveCart to update local storage
}

// the element where  all product cards are shown
const productsArrayElement = document.getElementById("product-list");
// fucntion that shows the products of the given array
function showProducts(productsArray){
    // here I clear the element
    productsArrayElement.innerHTML = "";
    //creating a card for each product
    productsArray.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "productCard";
        // here the inner Html of each card is created
        productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h4 class="product-name">${product.name}</h4>
        <p class="product-description">${product.description}
            <a href="item.html?id=${product.id}" class="product-more">more ...</a>
        </p>

        <p class="product-price">£${product.price.toFixed(2)}</p>
        <button type="button">Buy</button>
        `;
        // adding the product card to the page
        productsArrayElement.appendChild(productCard);
    });
}
// here i store the buttons for filters
const storeCategoryButtons= document.querySelectorAll(".product-categories button");
// this functions marks the selected category as current by changing the class to current category, which it has different color
function changeCurrentCategory(button){
    // reseting filters to the category class
    storeCategoryButtons.forEach(btn => {
        btn.classList.remove("current-category");
        btn.classList.add("category");
    });
// applying current-category class to the selected filter button
    button.classList.remove("category");
    button.classList.add("current-category");
}
// showing all products when the page is loaded
showProducts(allProducts);
// the filter for showing all products
document.getElementById("filter-all").onclick = () => {
    showProducts(allProducts);
    changeCurrentCategory(document.getElementById("filter-all"));
};
// the filter for showing hoodie products
document.getElementById("filter-hoodies").onclick = () => {
    showProducts(hoodies);
    changeCurrentCategory(document.getElementById("filter-hoodies"));
};
// the filter for showing jumper products
document.getElementById("filter-jumpers").onclick = () => {
    showProducts(jumpers);
    changeCurrentCategory(document.getElementById("filter-jumpers"));
};
// the filter for showing tshirt products
document.getElementById("filter-tshirts").onclick = () => {
    showProducts(tshirts);
    changeCurrentCategory(document.getElementById("filter-tshirts"));
};
//listener for clicks inside the list of products
productsArrayElement.addEventListener("click", event => {
    //finding if a button is clicked
    const buttonBuy = event.target.closest("button");
    // here it checks if the button is buy button
   if(buttonBuy.textContent.trim() !== "Buy") return;
    // finds the product for the button clicked
   const card = buttonBuy.closest(".productCard");
   const nameElement = card.querySelector(".product-name");
    // using the product name to match the object
   const product = allProducts.find(product => product.name === nameElement.textContent.trim());
   // if that product is found add it to the cart
   if (product){
       addToCart(product);
   }
});
// this is the button for going back to top of the page
const topButton = document.getElementById("go-to-top");
// here it shows the button after user scrolls 100px
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        topButton.style.display = "block"; //shows the button
    } else {
        topButton.style.display = "none"; // hides the button
    }
});
// when the button is clicked go to top of the page
topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0});
});

// event listener for the more link , when is clicked it saves the product to session storage
productsArrayElement.addEventListener("click", (event) => {
    const productLink= event.target.closest(".product-more");
    if(!productLink) return; //check if the click was not on more link
    // get the product id from the query string  item.html?id=
    const productId = new URL(productLink.href).searchParams.get("id");
    // find the product in all product list
    const chosenProduct = allProducts.find(product => product.id === productId);
    if(chosenProduct){ //if found it gets stored in session storage
        sessionStorage.setItem("chosenProduct", JSON.stringify(chosenProduct));
    }
});

// selecting the button of hamburger menu and the products page
const header = document.querySelector(".products-menu");
const toggle = document.querySelector(".hamburger-menu");

// when the hamburger button is clicked the nav open class is toggled on the header
// in css I used .products-menu.nav-open .nav-panel To show or hide the page links on >768px screens
toggle.addEventListener("click", () => {
    header.classList.toggle("nav-open");
});