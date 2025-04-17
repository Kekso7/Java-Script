
let clickPoints = [];


let canvasElement = document.getElementById("drawArea");
let context = canvasElement.getContext("2d");
let lineCounter = document.getElementById("lineCounter");
let drawButton = document.getElementById("draw");
let resetButton = document.getElementById("resetDrawing");
let drawWithColor = document.getElementById("drawWithColor");
let drawCounter = 0;

    canvasElement.addEventListener("click", function(event) {

    let rect = canvasElement.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;


    clickPoints.push({x: x, y: y});

});

// nacrtaj
drawButton.addEventListener("click", function() {

    let randomColor = generateRandomColor();

    drawPath(randomColor);
    incrementDrawCounter();
    resetClickPoints();
    sendDrawMessage(randomColor);

});

// nacrtaj sa bojom
drawWithColor.addEventListener("click", function() {
    let color = prompt("Unesite boju koju zelite");

    drawPath(color);
    incrementDrawCounter();
    resetClickPoints();
    sendDrawMessage(color);
});

resetButton.addEventListener("click", function() {
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
});

function incrementDrawCounter() {
    drawCounter++;
}

function resetClickPoints() {
    clickPoints = [];
}

function sendDrawMessage(){
    lineCounter.innerText = "Nacrtana "+drawCounter+" linija "+color;
}

function generateRandomColor() {
    return "#"+Math.floor(Math.random()*16777215).toString(16);
}

function drawPath(color){
    context.beginPath();
    context.moveTo(clickPoints[0].x, clickPoints[0].y);

    for(let i in clickPoints) {
        if(i === 0) {
            continue;
        }
        context.lineTo(clickPoints[i].x, clickPoints[i].y);
    }

    context.strokeStyle = color;
    context.stroke();
}



















