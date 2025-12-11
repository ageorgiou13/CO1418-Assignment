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
    35,
    "images/hoodies",
    39.99,
    "Cotton authentic character and practicality are combined in this comfy, warm and luxury hoodie for students that goes with everything to create casual looks."
);

const jumpers = createProducts(
    "Jumper",
    35,
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

