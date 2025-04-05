// IF uslovi ili conditional statements

let product = "Bread";
let price = 99;

// ako je hleb 99 dinara ispisati "hleb je skup", ako je manje "hleb je jeftin"
/**
 *  if - govorimo kodu da radimo poredjenje
 *  () - pisemo uslov - da li je hleb 99 dinara
 *  {} - sta treba da se desi - ispisati "hleb je skup"
 *  = dodelimo vrednost / postavimo vrednost - proizvod = "hleb"
 *  == === - poredimo vrednost
 */


if(price == 99) {
    console.log("Bread is expensive");
}

// vezba

if(product == "Bread"){
    console.log("Bread is here");
}


// ako je BMW ispisati M3
// else - ako nije BMW ispisati nije bmw

let car = "BMW";

if(car == "BMW"){
    console.log("BMW M3");
}
else {
    console.log("Its not BMW");
}