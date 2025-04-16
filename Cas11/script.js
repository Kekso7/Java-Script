let cities = [
    "Svi",
    "Beograd",
    "Subotica",
    "Novi Sad",
    "Sarajevo",
    "Podgorica",
    "Zagreb",
    "Split",
    "Rijeka",
    "Osijek",
    "Mostar",
    "Banja Luka",
    "Tuzla",
    "Zenica",
    "Skoplje",
    "Bitola",
    "Prilep",
    "Tetovo",
    "Priština",
    "Peć",
    "Mitrovica",
    "Niš",
    "Kragujevac",
    "Leskovac",
    "Čačak",
    "Kumanovo",
    "Pljevlja"
];

let types = [
    "Stanovi",
    "Poslovni prostori",
    "Kuce",
    "Placevi",
    "Garaze/parking"
];

let rooms = [
    "Garsonjera",
    "Jednosoban stan",
    "Jednoiposoban stan",
    "Dvosoban stan",
    "Dvoiposoban stan",
    "Trosoban stan",
    "Troiposoban stan",
    "Cetvorosoban stan",
    "4.5 i vise soba"
];

let realEstates = [
    {
        city: "Beograd",
        option:"Garsonjera",
        type: "Stanovi",
        price: 48600,
        size: 50
    },
    {
        city: "Novi Sad",
        option: null,
        type: "Kuce",
        price: 148600,
        size: 90
    },
    {
        city: "Tuzla",
        option: "Jednosoban stan",
        type: "Stanovi",
        price: 35000,
        size: 35
    },
    {
        city: "Skoplje",
        option: "Dvosoban stan",
        type: "Stanovi",
        price: 90000,
        size: 65
    },
    {
        city: "Beograd",
        option: "Trosoban stan",
        type: "Stanovi",
        price: 115000,
        size: 80
    },
    {
        city: "Niš",
        option: "4.5 i vise soba",
        type: "Stanovi",
        price: 140000,
        size: 100
    },
    {
        city: "Kragujevac",
        option: "Jednosoban stan",
        type: "Stanovi",
        price: 35000,
        size: 45
    },
    {
        city: "Leskovac",
        option: "Garsonjera",
        type: "Stanovi",
        price: 30000,
        size: 30
    },
    {
        city: "Čačak",
        option: null,
        type: "Kuce",
        price: 120000,
        size: 110
    },
    {
        city: "Novi Sad",
        option: "Trosobn stan",
        type: "Stanovi",
        price: 60000,
        size: 70
    },
    {
        city: "Zrenjanin",
        option: "Jednosoban stan",
        type: "Stanovi",
        price: 28000,
        size: 40
    },
    {
        city: "Subotica",
        option: "Dvoiposoban stan",
        type: "Stanovi",
        price: 85000,
        size: 65
    },
];

// cities -------------------------------------------

let citiesSelector = document.querySelector("#citiesSelector");

for (let city of cities) {
    let cityOption = document.createElement("option");
    cityOption.innerHTML = city;



    let cityFound = false;
    let cityCount = 0;

    for(let estate of realEstates) {
        if(estate.city === city) {
            cityFound = true;
            cityCount++;
        }
    }

    if(city === "Svi") {
        cityCount = realEstates.length;
    }

    cityOption.innerHTML += "("+cityCount+")";
    cityOption.value = city;

    citiesSelector.appendChild(cityOption);

    if(!cityFound && city !== "Svi") {
        cityOption.setAttribute("disabled", "true");
    }
}

// types -------------------------------------------

let typesSelector = document.querySelector("#typeSelector");

for (let type of types) {
    let typeOption = document.createElement("option");
    typeOption.innerHTML = type;
    typesSelector.appendChild(typeOption);
}

// rooms --------------------------------------------

let roomSelector = document.querySelector("#roomSelector");

for (let room of rooms) {
    let roomOption = document.createElement("option");
    roomOption.innerHTML = room;
    roomSelector.appendChild(roomOption);
}
// -----------------------------------------------------------------
let currentCity = null;
let currentRoom = null;
let currentType = null;

roomSelector.addEventListener("change", function (event) {
    currentRoom = event.currentTarget.value;
});

typesSelector.addEventListener("change", function (event) {
    currentType = event.currentTarget.value;
});

citiesSelector.addEventListener("change", function (event) {
    currentCity = event.currentTarget.value;

    let allEstates = document.getElementsByClassName("realEstate");

    for (let realEstate of allEstates) {

        let estateCity = realEstate.querySelector(".city").textContent;

        realEstate.classList.remove("hidden");

        if(estateCity !== currentCity && currentCity !== "Svi") {
            realEstate.classList.add("hidden");
        }
    }
});

for(let estate of realEstates) {
    let estateDiv = document.createElement("div");
    estateDiv.classList.add("realEstate");

    let title = document.createElement("p");
    title.innerText = estate.city;
    title.classList.add("city");

    let estateOption = document.createElement("p");
    if(estate.option == null) {
        estateOption.innerText = "-";
    }
    else {
        estateOption.innerText = estate.option;
    }

    let estatePrice = document.createElement("p");
    estatePrice = estate.price;

    let estateSize = document.createElement("p");
    estateSize = estate.size;

    estateDiv.append(title);
    estateDiv.append(estateOption);
    estateDiv.append(estatePrice);
    estateDiv.append(estateSize);

    document.querySelector("#estates").appendChild(estateDiv);
}










