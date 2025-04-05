let content = "video"; // ako promenim na image onda ispisuje sliku

if (content == "video") {
    console.log("https://www.youtube.com/results?search_query=itmentorstva");
}
else if(content == "site"){
    console.log("itmentorstva.com")
}
else if(content == "music"){
    console.log("spotify");
}
else{
    console.log("https://cdn.pixabay.com/photo/2025/02/11/21/33/kingfisher-9399869_1280.jpg");
}

// if, else if, else

let cena = 500;

if(cena <= 500) {
    console.log("Jeftino je");
}
else if (cena > 500) {
    console.log("Skupo je");
}


let component = "keyboard";
let price = 50;

// da li je component tastatura i da li je price 50

if(component == "keyboard" && price == 50){
    console.log("Uspesno testiranje");
}
else {
    console.log("Neuspesno testiranje")
}