
function login(username,password) {
    return username.toLowerCase() === "admin" && password.toLowerCase() === "admin";
}

let result = login('aDmin','ADmin');

console.log(result);
