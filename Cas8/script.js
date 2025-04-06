

document.querySelector("title").style.color = "red";

document.querySelector(".subtitle").style.color = "green";

let products = document.querySelectorAll('.product');

for(let product of products){
    product.style.color = "#3e3e3e";
}
let productPrices = document.querySelectorAll('.productPrice');

for(let price of productPrices) {

    if(productPrice >= 5000){
        price.style.color = "red";
    }
else {
    price.style.color = "green";
}
}











