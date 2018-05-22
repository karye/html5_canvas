window.onload = startGame();

function startGame() {
	var theCanvas = document.getElementById("canvasGame");
	var context = theCanvas.getContext("2d");

	var guesses = 0;
	var message = "Gissa en bokstav a till Ö";
	var letters = ["a", "b", "c", "d", "e", "f", "g", "h",
	"i", "j", "k", "l", "m", "n", "o", "p",
	"q", "r", "s", "t", "u", "v", "w", "x",
	"y", "z", "å", "ä", "ö"];
	var today = new Date();
	var letterToGuess = "";
	var higherOrLower = "";
	var lettersGuessed;
	var gameOver = false;

	initGame();

	function initGame() {
		var letterIndex = Math.floor(Math.random() * letters.length);
		letterToGuess = letters[letterIndex];
		console.log("letterToGuess=" + letterToGuess);
		guesses = 0;
		lettersGuessed = [];
		gameOver = false;
		window.addEventListener("keydown", eventKeyPressed, true);
		drawScreen();
	}

	function drawScreen() {
        // Bakgrund
        context.fillStyle = "#ffffaa";
        context.fillRect(0, 0, 500, 300);

        // Box
		context.strokeStyle = "#000000";
        context.strokeRect(5, 5, 490, 290);
		context.textBaseline = "top";

		// Datum
		context.fillStyle = "#000000";
		context.font = "10px Sans-Serif";
		context.fillText(today, 150, 10);

        // Text
        context.fillStyle = "#FF0000";
        context.font = "14px Sans-Serif";
        context.fillText(message, 125, 30);
		context.fillStyle = "#109910";
        context.font = "16px Sans-Serif";
        context.fillText("Gissningar: " + guesses, 215, 50);

		// Högre eller lägre
		context.fillStyle = "#000000";
        context.font = "16px Sans-Serif";
        context.fillText("Högre eller lägre: " + higherOrLower, 150, 125);

		// Gissade bokstäver
		context.fillStyle = "#FF0000";
        context.font = "16px Sans-Serif";
        context.fillText("Gissade bokstäver: " + lettersGuessed.toString(), 10, 260);

		if (gameOver) {
			context.fillStyle = "#FF0000";
	        context.font = "40px Sans-Serif";
	        context.fillText("Du klarade det!", 150, 180);
		}
    }

    function eventKeyPressed(e) {
    	if (!gameOver) {
    		var letterPressed = String.fromCharCode(e.keyCode);
    		letterPressed = letterPressed.toLowerCase();
    		guesses++;
    		lettersGuessed.push(letterPressed);

    		if (letterPressed == letterToGuess) {
    			gameOver = true;
    		} else {
    			letterIndex = letters.indexOf(letterToGuess);
    			guessIndex = letters.indexOf(letterPressed);
    		}

    		if (guessIndex < 0) {
    			higherOrLower = "Detta var ingen bokstav!";
    		} else if (guessIndex > letterIndex) {
    			higherOrLower = "Låg";
    		} else {
    			higherOrLower = "hög";
    		}

    		drawScreen();
    	}
    }
}
