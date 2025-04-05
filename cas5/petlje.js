/**
 * let i - interacijom - ponavljanjem
 *
 *  uslov do kada ce petlja raditi
 * i<100;
 *
 * nakon svakog ponavljanja povecava i za 1
 * let i = 0, i < 100, i++
 * let i = 1, i < 100, i ++
 */

let cars = [
    "Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz", "Volkswagen", "Audi", "Hyundai",
    "Kia", "Subaru", "Mazda", "Lexus", "Dodge", "Ram", "Jeep", "Chrysler", "GMC", "Cadillac",
    "Acura", "Infiniti", "Lincoln", "Volvo", "Jaguar", "Land Rover", "Porsche", "Ferrari", "Lamborghini", "Maserati",
    "Bentley", "Rolls-Royce", "Bugatti", "Tesla", "Mini", "Fiat", "Alfa Romeo", "Peugeot", "Renault", "Citroën",
    "Skoda", "Seat", "Opel", "Suzuki", "Mitsubishi", "Genesis", "Aston Martin", "McLaren", "Koenigsegg", "Pagani"
];

// for
for(let i = 0; i < cars.length; i++){

    let firstLetter = cars[i][0].toLowerCase();
    if (firstLetter === "a") {
        continue;
    }

    console.log(cars[i]);
}

console.log(cars.length);

// mora da se promeni malo i veliko slovo
// prvo slovo






// forEach - vazno
// for in - vazno
