let cities = [
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


let citySelector = document.querySelector("#citySelector");

for (let city of cities) {
    let option = document.createElement("option");
    // option.textContent = city;
    option.innerHTML = city;
    citySelector.appendChild(option);
}

let typs = [
    "Stanovi",
    "Poslovni prostori",
    "Kuce",
    "Placevi",
    "Garaze/parking"
];
let typeSelector = document.querySelector("#typeSelector");

for (let type of typs) {
    let typeOption = document.createElement("option");
    typeOption.innerHTML = type;
    typeSelector.appendChild(typeOption);
}
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

let roomSelector = document.querySelector("#roomSelector");

for (let room of rooms) {
    let roomOption = document.createElement("option");
    roomOption.innerHTML = room;
    roomSelector.appendChild(roomOption);
}



let currentCity = null;
let currentRoom = null;
let currentType = null;

roomSelector.addEventListener("change", function (event) {
    currentRoom = event.currentTarget.value;
});

typeSelector.addEventListener("change", function (event) {
    currentType = event.currentTarget.value;
});

citySelector.addEventListener("change", function (event) {
    currentCity = event.currentTarget.value;
});

document.querySelector("#searchPropertiesBtn").addEventListener("click", function () {

    console.log(currentCity+" "+currentRoom+" "+currentType);

});


let realEstates = [
    {
        city: "Beograd",
        option:"Garsonjera",
        type: "Stanovi",
        price:"48600",
        size: 50
    },
    {
        city: "Novi Sad",
        option: null,
        type: "Kuce",
        price:"148600",
        size: 90
    },
    {
        city: "Tuzla",
        option: "Jednosoban stan",
        type: "Stanovi",
        price:"35000",
        size: 35
    },
    {
        city: "Skoplje",
        option: "Dvosoban stan",
        type: "Stanovi",
        price:"90000",
        size: 65
    },
    {
        city: "Priština",
        option: "Trosoban stan",
        type: "Stanovi",
        price:"115000",
        size: 80
    },
    {
        city: "Niš",
        option: "4.5 i vise soba",
        type: "Stanovi",
        price:"140000",
        size: 100
    },
    {
        city: "Kragujevac",
        option: "Jednosoban stan",
        type: "Stanovi",
        price:"35000",
        size: 45
    },
    {
        city: "Leskovac",
        option: "Garsonjera",
        type: "Stanovi",
        price:"30000",
        size: 30
    },
    {
        city: "Čačak",
        option: null,
        type: "Kuce",
        price:"120000",
        size: 110
    },
    {
        city: "Pljevlja",
        option: "Trosobn stan",
        type: "Stanovi",
        price:"60000",
        size: 70
    },
    {
        city: "Zrenjanin",
        option: "Jednosoban stan",
        type: "Stanovi",
        price:"28000",
        size: 40
    },
    {
        city: "Subotica",
        option: "Dvoiposoban stan",
        type: "Stanovi",
        price:"85000",
        size: 65
    },
];

for(let estate of realEstates) {
    let estateDiv = document.createElement("div");

    let title = document.createElement("p");
    title.innerText = estate.type+" "+estate.city;

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










