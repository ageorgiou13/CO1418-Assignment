
function getCart(){
    const storedProducts = localStorage.getItem("cart");
    return storedProducts ? JSON.parse(storedProducts) : [];
}

function saveCart(cart){
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product){
    const cart= getCart();

    const inCart = cart.find(product => product.id === product.id);
    if(inCart){
        inCart.totalItems += 1;

    }
    else{
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    saveCart(cart);
}




const params = new URLSearchParams(window.location.search);
const productId= params.get('id');



const storedProduct= sessionStorage.getItem('chosenProduct');
let product = null;

if(storedProduct){
    const parsedProduct=JSON.parse(storedProduct);
    if(parsedProduct.id===productId){
        product = parsedProduct;
    }
}

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