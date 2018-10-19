window.onload = canvasApp;

function canvasApp() {

    var theCanvas = document.getElementById("canvasOne");
    var context = theCanvas.getContext("2d");

    function drawScreen() {
        // Bakgrund
        context.fillStyle = "#ffffaa";
        context.fillRect(0, 0, 500, 300);

        // Text
        context.fillStyle = "#000000";
        context.font = "20px Sans-Serif";
        context.textBaseline = "top";
        context.fillText("Hello world!", 195, 20);

        // Image
        var helloWorldImage = new Image();
        helloWorldImage.onload = function() {
            context.drawImage("./bilder/helloWorldImage", 120, 60);
        }
        helloWorldImage.src = "hello_world.png";

        // Box
        context.strokeStyle = "#000000";
        context.strokeRect(5, 5, 490, 290)
    }

    drawScreen();
}
