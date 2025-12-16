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

    const inCart = cart.find(product => product.id === product.id);//here it tries to find if the product exists in the cart
    if(inCart){// if found increases quantity
        inCart.totalItems += 1;

    }
    else{//here it pushes a new product in the cart
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    saveCart(cart);// calling saveCart to update local storage
}



// reads the query string from the url
const params = new URLSearchParams(window.location.search);
// get the id
const productId= params.get('id');


// get the selected product data
const storedProduct= sessionStorage.getItem('chosenProduct');
let product = null; //variable to put the product object or it will stay null if there is no project
// if we have a stored product , parse it and checking that it matches id
if(storedProduct){
    const parsedProduct=JSON.parse(storedProduct);
    if(parsedProduct.id===productId){
        product = parsedProduct;
    }
}
// if the product is found , build the card of the product
if(product){
    const productCard = document.getElementById("item");
    productCard.className = "productCard";
    productCard.innerHTML= `

        
        <img src="${product.image}" alt="${product.name}" class="product-image"> 
        <h4 class="product-name">${product.name}</h4> 
        <p class="product-description">${product.description}  
        </p>
           
        <p class="product-price">£${product.price.toFixed(2)}</p> 
        <button type="button">Buy</button> 
        `;
}
// selecting the button of hamburger menu and the products page
const header = document.querySelector(".item-menu");
const toggle = document.querySelector(".hamburger-menu");
// when the hamburger button is clicked the nav open class is toggled on the header
// in css I used .products-menu.nav-open .nav-panel To show or hide the page links on >768px screens
toggle.addEventListener("click", () => {
    header.classList.toggle("nav-open");
});