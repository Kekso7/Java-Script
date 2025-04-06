


let cars = [
    {
        name: "Toyota Corolla",
        price: 18000,
        image: "https://cdn.pixabay.com/photo/2023/12/13/07/58/car-8446529_1280.jpg"
    },
    {
        name: "Honda Civic",
        price: 20000,
        image: "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg"
    },
    {
        name: "Ford Focus",
        price: 17000,
        image: "https://cdn.pixabay.com/photo/2021/08/22/04/01/car-6564067_1280.jpg"
    },
    {
        name: "BMW 3 Series",
        price: 35000,
        image: "https://cdn.pixabay.com/photo/2016/10/04/05/17/stance-1713598_1280.jpg"
    },
    {
        name: "Audi A4",
        price: 37000,
        image: "https://cdn.pixabay.com/photo/2017/05/07/01/58/audi-2291508_1280.jpg"
    },
    {
        name: "Mercedes-Benz C-Class",
        price: 40000,
        image: "https://cdn.pixabay.com/photo/2021/12/01/18/19/mercedes-amg-6838853_1280.jpg"
    },
    {
        name: "Volkswagen Golf",
        price: 22000,
        image: "https://cdn.pixabay.com/photo/2017/07/04/21/16/golf-2472672_1280.jpg"
    },
    {
        name: "Hyundai Elantra",
        price: 19000,
        image: "https://cdn.pixabay.com/photo/2021/08/20/05/40/hyundai-6559521_1280.jpg"
    }
];

for(let car of cars){

    let carDiv = document.createElement("div");
    let carImg = document.createElement("img");
    carImg.src = car.image;
    let carName = document.createElement("p");
    carName.textContent = car.name;
    let span = document.createElement("span");
    span.textContent = car.price;

    carName.appendChild(span);
    carDiv.appendChild(carImg);
    carDiv.appendChild(carName);

    document.querySelector("#allCars").appendChild(carDiv);

    // document.querySelector("#allCars").innerHTML += "<p>"+car.name+" <span className='productPrice'>"+car.price+"</span>"+car.image+"</p>";
}













