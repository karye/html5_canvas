// Sida 31

window.onload = canvasApp;

function canvasApp() {

    var theCanvas = document.getElementById("canvasOne");
    var context = theCanvas.getContext("2d");

    var alpha = 0;
    var fadeIn = true;
    var text = "Hej min värld!";
    var helloWorldImage = new Image();
    helloWorldImage.src = "./bilder/html5bg.png";

    function drawScreen() {

        // Bakgrunden
        context.globalAlpha = 1;
        context.fillStyle = "#000000";
        context.fillRect(0, 0, 640, 480);

        // Bilden
        context.globalAlpha = .25;
        context.drawImage(helloWorldImage, 0, 0);

        // Tona in eller ut
        if (fadeIn) {
            alpha += .01;
            if (alpha >= 1) {
                alpha = 1;
                fadeIn = false;
            }
        } else {
            alpha -= .01;
            if (alpha < 0) {
                alpha = 0;
                fadeIn = true;
            }
        }

        // För ändra graden av transparens på det som ritas
        context.globalAlpha = alpha;

        // Texten
        context.font = "72px Sans-Serif";
        context.textBaseline = "top";
        context.fillStyle = "#FFFFFF";
        context.fillText(text, 150, 200);
    }

    // Animationsmotorn - anopas var 20ms
    function gameLoop() {
        window.setTimeout(gameLoop, 20);
        drawScreen();
    }

    // Starta Animationsmotorn
    gameLoop();
}
