
let cars = ['Audi', 'BMW', 'Mercedes'];

function checkCar(carList, carName) {
    for (let name of carList) {
        if (name.toLowerCase() === carName.toLowerCase()) {
            return true;
        }
    }
    return false;
}
let result = checkCar(cars, "BmW");
console.log(result);

let result2 = cars.includes('Audi');
console.log(result2);
















