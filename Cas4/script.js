let name = "Marina";
let password = "tajnasifra";
/**
if(name == "Marina"){
    console.log("Pozdrav Marina");
}
else{
    console.log("Niste Marina");
}

if(password == "tajnasifra"){
    console.log("Uneli ste tacnu sifru");
}
else{
    console.log("Sifra nije tacna");
}
*/

if (name == "Marina" && password == "tajnasifra") {
    console.log("Tacni podaci");

} else {
    console.log("Nisu tacni podaci");
}

// vezba userType
let userType = "admin";

if (userType == "admin" || userType == "moderator") {
    console.log("Vi ste administrator");
}
else{
    console.log("Vi ste obican clan");
}

let allowedTypes = ["admin", "moderator"]; // da li "userType" postoji u "allowedTypes"

let typeCheck = allowedTypes.includes(userType);

console.log(typeCheck);

if(typeCheck == true){ // if(typeCheck)
    console.log("2 Vi ste administrator");
}
else{
    console.log("Vi niste administrator");
}

let dayOfTheWeek = "Friday";

if(dayOfTheWeek == "Sunday" || dayOfTheWeek == "Saturday"){
    console.log("Weekend");
}
else if(dayOfTheWeek == "Friday"){
    console.log("Weekend is coming");
}
else{
    console.log("Work");
}

