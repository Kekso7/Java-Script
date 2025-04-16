
function sayHello () {
    console.log("Hello")
}
sayHello();
sayHello();
sayHello();

function online() {
    console.log("Sajt je online");
}
online();

function isAdult(age) {
    if(age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("Not adult");
    }
}

let maki = 55;

isAdult(15);
isAdult(20);
isAdult(maki);

function writeFullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
writeFullName("Marina", "Krajcik");
