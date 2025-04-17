function calculateTax(amount, tax = 0.15) {

    return amount+(amount * tax);
}
calculateTax(500,0.2);
calculateTax(100); // (100, 0.15);


function getFullName(firstName, lastName, middleName = '', nickName = 'A') {

    return firstName+" "+lastName+" "+middleName+" "+nickName;
}
let marina = getFullName("Marina","Krajcik","Vanja");
let mila = getFullName("Mila","Petrovic");

console.log(marina, mila);

let smokesTax = calculateTax(500, 0.1);

smokesTax = smokesTax * 5;
console.log(smokesTax);













