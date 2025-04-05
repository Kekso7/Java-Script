// vezba

let name = "Admin";

name = name.toLowerCase();
console.log(name);

if (name == "admin") {
    console.log("Pozdrav admine");
}
else {
    console.log("Vi niste administrator");
}
if (name[0] == "a")  {
    console.log("Vase ime pocinje samoglasnikom");
}
let samoglasnici = ["a","e","i","o","u"];

if (samoglasnici.includes(name[0]))  {
    console.log("Vase ime pocinje nekim samoglasnikom");
}

let number = "2";
if(number == 2) {
    console.log("Broj je 2");
}
else {
    console.log("Broj nije 2");
}