


let cars = [
    {
        name: "Toyota Corolla",
        price: 18000,
        year:2025,
        image: "https://cdn.pixabay.com/photo/2023/12/13/07/58/car-8446529_1280.jpg"
    },
    {
        name: "Honda Civic",
        price: 20000,
        year:2020,
        image: "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg"
    },
    {
        name: "Ford Focus",
        price: 17000,
        year:2019,
        image: "https://cdn.pixabay.com/photo/2021/08/22/04/01/car-6564067_1280.jpg"
    },
    {
        name: "BMW 3 Series",
        price: 35000,
        year:2021,
        image: "https://cdn.pixabay.com/photo/2016/10/04/05/17/stance-1713598_1280.jpg"
    },
    {
        name: "Audi A4",
        price: 37000,
        year:2020,
        image: "https://cdn.pixabay.com/photo/2017/05/07/01/58/audi-2291508_1280.jpg"
    },
    {
        name: "Mercedes-Benz C-Class",
        price: 40000,
        year:2025,
        image: "https://cdn.pixabay.com/photo/2021/12/01/18/19/mercedes-amg-6838853_1280.jpg"
    },
    {
        name: "Volkswagen Golf",
        price: 22000,
        year:2024,
        image: "https://cdn.pixabay.com/photo/2017/07/04/21/16/golf-2472672_1280.jpg"
    },
    {
        name: "Honda Civic",
        price: 19000,
        year:2023,
        image: "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg"
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

    let year = document.createElement("span");
    year.textContent = `Godina: ${car.year}`;

    carDiv.appendChild(year);
    carName.appendChild(span);
    carDiv.appendChild(carImg);
    carDiv.appendChild(carName);

    if(car.year === 2025) {
        let productionYear = document.createElement("span");
        productionYear.textContent = "NOVO";
       productionYear.classList.add("productionYear");

        carDiv.appendChild(productionYear);
    }

    document.querySelector("#allCars").appendChild(carDiv);

    // document.querySelector("#allCars").innerHTML += "<p>"+car.name+" <span className='productPrice'>"+car.price+"</span>"+car.image+"</p>";
}




















