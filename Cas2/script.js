

    //          0:Bread, 1:Milk  2:Jogurt
let products = ["Bread", "Milk", "Jogurt"];
console.log(products, products[1]);

products.push("newsPaper");
console.log(products[3]);

products.splice(0, 1);
console.log(products);

let cars = ["BMW", "Audi","Mercedes"];
console.log(cars);

// pozovem cars i zamenim njenu vrednost
cars[0] = "Zastava";
console.log(cars);

// vezba sortirati array cars A,B,C,D,E...
    cars.sort();
    console.log(cars);


    // Objekti
let personalID = {
    name: "Marina",
    lastName: "Krajcik",
    dateOfBirth: "11.01.1992",
    hobbies: ["programming", "snowboarding"]
};

console.log(personalID.name, personalID.dateOfBirth);

// height 175.5

    personalID.height = "175.5cm";
                    //personalID["name"] i personalID.name je isto
    console.log(personalID, personalID["name"],personalID.name);

    // vezba ispisati prvi hobi
    console.log(personalID.hobbies[0]);

    //vezba nova varijabla "sentence" name has gone hobby

    let sentence = personalID.name+" has gone "+personalID.hobbies[1];
    console.log(sentence);


    /**
     * shop:
     * name,products,openingHours,closingHours
     */

    let shop = {
      name: "Bicycle Shop",
      products: ["Trek", "Kellys", "Giant", "Canyon"],
      openingHours: "08:00",
      closingHours: "20:00"
    };
    console.log(shop);




