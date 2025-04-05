
let products = ["bread", "milk", "Onion"];

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

for (let i in products) {
    console.log(products[i]);
}

let korpa = [
    {
        name: "Bread",
        price: 99,
        amount: 1
    },
    {
        name: "Onion",
        price: 150,
        amount: 4

    },
    {
        name: "Milk",
        price: 250,
        amount: 1
    }

];

/**
 * koliko kosta prvi proizvod
 * gde su podaci ---korpa
 * kako izvuci podatak --- korpa[0]
 * koju vrstu podatka dobijam iz korpe - objekat
 * sta objekat sadrzi { name: "Bread", price:99, amount: 1}
 * sta trazim iz objekta ["price"]
 */
console.log(korpa[0]["price"]);


for(let product in korpa) {


    // varijabla
    let productPrice = korpa[product]["price"];

    if(productPrice > 200) {
        break;
    }
    console.log(productPrice);
}