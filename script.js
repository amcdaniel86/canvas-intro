function draw(){
    let canvas = document.getElementById('example');

    const ctx = canvas.getContext('2d');

    // ctx.fillRect(40,80,20,60);
    // ctx.clearRect(45,45,60,60);
    // ctx.strokeRect(15,50,66,50);
    // ctx.fillStyle = 'blue';
    // ctx.fillRect(25,25,90,20);
    // ctx.fillStyle = 'purple';
    

    //     ctx.beginPath();
    //     let x = 100; // x coord
    //     let y = 79; // ycoord
    //     let radius = 40;
    //     let startAngle = 6;
    //     let endAngle = Math.PI*2;
    //     ctx.arc(x, y, radius, startAngle, endAngle, true)
    //     ctx.moveTo(290,75);
    //     ctx.arc(250,75,40,0,endAngle, true);
    //     ctx.stroke();
    //     ctx.fill();
    //     ctx.lineWidth = 10;
    //     ctx.lineJoin = 'miter';
    //     ctx.beginPath();
    //     ctx.stroke();

        // ctx.lineJoin styles = 'round', 'bevel', 'miter'


        // ctx.moveTo(50,50);
        // ctx.lineTo(50,75);
        // ctx.lineTo(100,25);
        // ctx.lineTo(75,50);
        // ctx.fill(56);
        // ctx.stroke(98);
       
        //image instructions below
        let img = new Image();
        img.onload = function() {
          ctx.drawImage(img, 0,0,180,150);
        };
        img.src = 'https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg';

        above order is must for images
        //announce img
        // img.onload = function() {
          ctx.drawImage(img properties, size, position);s
        }


  draw()

  // hangman notes
  // words array - words in the Game
  // secretWord - hidden word currently used while playing
  // triedLetters - array
  // guessedLetter
  // -errorsLeft - start at 10, goes down when user uses wrong letter.
  // getWord() returns random word from array
  // checkIfLetter() 
  // checkClickedLetters()evaluates if guessletter was correct  - add guessedLetter variable     
  // checkGameover -returns true or false, win or lost 
  // checkWinner - 
  // badGuesses:
  // goodGuesses

  // attach javascript.js at bottom of file. don't use document$ at top.

  separate class - separate file: all functions for drawing stuff.
  functions - pass number to with iterations
  drawHangman1 - Head, arm, arm, torso
  
