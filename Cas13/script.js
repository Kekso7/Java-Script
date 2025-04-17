
let clickPoints = [];


let canvasElement = document.getElementById("drawArea");
let context = canvasElement.getContext("2d");
let drawButton = document.getElementById("draw");
let resetButton = document.getElementById("resetDrawing");

    canvasElement.addEventListener("click", function(event) {

    let rect = canvasElement.getBoundingClientRect();

    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;


    clickPoints.push({x: x, y: y});

});

drawButton.addEventListener("click", function() {


        context.beginPath();
        context.moveTo(clickPoints[0].x, clickPoints[0].y);

        for(let i in clickPoints) {
            if(i === 0) {
                continue;
            }
            context.lineTo(clickPoints[i].x, clickPoints[i].y);
        }

        context.stroke();

        clickPoints = [];

});

resetButton.addEventListener("click", function() {
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
});










