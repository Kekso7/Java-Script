
let productHolder = document.getElementById("products");
let searchProduct = document.getElementById("searchProduct");

searchProduct.addEventListener("click", function() {

    let searchName = document.getElementById("searchName");
    let searchLink = 'https://dummyjson.com/products/search?q='+searchName.value;

    fetch(searchLink)
        .then(response => response.json())
        .then(function(data) {
            productHolder.innerText = "";
            for(let product of data.products) {
                appendProductToHolder(product);
            }
    })

});

fetch('https://dummyjson.com/products?limit=20&sortBy=price&order=desc')
    .then(response => response.json())
    .then(function(data) {

        for(let product of data.products) {
            appendProductToHolder(product);
        }
    })

function appendProductToHolder(product) {
    let singleProduct = document.createElement("div");

    let productTitle = document.createElement("h1");
    productTitle.innerText = product.title;

    let productCategory = document.createElement("p");
    productCategory.innerText = product.category;

    let productPrice = document.createElement("p");
    productPrice.innerText = product.price;

    singleProduct.append(productTitle, productCategory, productPrice);

    productHolder.append(singleProduct);
}














