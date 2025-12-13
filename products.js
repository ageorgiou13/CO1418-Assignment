function createProducts(productName,total,imageFolder,productPrice, description){
 const productList = [];
    for(let i = 1; i <=total; i++){
        productList.push({
            id: `${productName.toLowerCase()}${i}`,
            name: `${productName} ${i}`,
            price: productPrice,
             image:`${imageFolder}/${productName.toLowerCase()} (${i}).jpg`,
             description: description,
             category: productName.toLowerCase()
        });
    }
    return productList;
}

const hoodies = createProducts(
    "Hoodie",
    34,
    "images/hoodies",
    39.99,
    "Cotton authentic character and practicality are combined in this comfy, warm and luxury hoodie for students that goes with everything to create casual looks."
);

const jumpers = createProducts(
    "Jumper",
    40,
    "images/jumpers",
    29.99,
    "cotton authentic character and practically are combined in this comfy warm and winter jumper for students that goes with everything to create casual looks"
);

const tshirts = createProducts(
    "Tshirt",
    35,
    "images/tshirts",
    19.99,
    "cotton authentic character and practically are combined in this comfy T-shirt for students that goes with everything to create casual looks"
);

// combining the 3 product arrays into 1
const allProducts = [...hoodies, ...jumpers, ...tshirts];

const productsArrayElement = document.getElementById("product-list");

function showProducts(productsArray){
    productsArrayElement.innerHTML = "";

    productsArray.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "productCard";

        productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <h4 class="product-name">${product.name}</h4>
        <p class="product-description">${product.description} 
            <a href="item.html?id=${product.id}" class="product-more">more ...</a> 
        </p>
           
        <p class="product-price">£${product.price.toFixed(2)}</p>
        <button type="button">Buy</button>
        `;

        productsArrayElement.appendChild(productCard);
    });
}

const storeCategoryButtons= document.querySelectorAll(".product-categories button");

function changeCurrentCategory(button){
    storeCategoryButtons.forEach(btn => {
        btn.classList.remove("current-category");
        btn.classList.add("category");
    });

    button.classList.remove("category");
    button.classList.add("current-category");
}

showProducts(allProducts);

document.getElementById("filter-all").onclick = () => {
    showProducts(allProducts);
    changeCurrentCategory(document.getElementById("filter-all"));
};

document.getElementById("filter-hoodies").onclick = () => {
    showProducts(hoodies);
    changeCurrentCategory(document.getElementById("filter-hoodies"));
};

document.getElementById("filter-jumpers").onclick = () => {
    showProducts(jumpers);
    changeCurrentCategory(document.getElementById("filter-jumpers"));
};

document.getElementById("filter-tshirts").onclick = () => {
    showProducts(tshirts);
    changeCurrentCategory(document.getElementById("filter-tshirts"));
};



const topButton = document.getElementById("go-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0});
});


productsArrayElement.addEventListener("click", (event) => {
    const productLink= event.target.closest(".product-more");
    if(!productLink) return;

    const productId = new URL(productLink.href).searchParams.get("id");

    const chosenProduct = allProducts.find(product => product.id === productId);
    if(chosenProduct){
        sessionStorage.setItem("chosenProduct", JSON.stringify(chosenProduct));
    }
});