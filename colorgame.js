var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector(".color-display");
var message = document.querySelector(".message");
var heading = document.querySelector(".title");
var resetButton = document.querySelector(".reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();

  function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
      squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
          message.textContent = "Correct!";
          changeColors(clickedColor);
          heading.style.backgroundColor = clickedColor;
          resetButton.textContent = "Play again?";
        } else {
          this.style.background = "#232323";
          message.textContent = "Try again!";
        }
      });
    }
  }
}

function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      if (this.textContent === "Easy") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset();
      // alternative to "if & if else" =
      // this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
    });
  }
}

function reset() {
  //Generate all new colors
  colors = generateRandomColors(numSquares);
  //pick new random color from array
  pickedColor = pickColor();
  //change color display to match picked color
  heading.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colours";
  message.textContent = "";
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

//OLD CODE COMMMENTED OUT:

// easy.addEventListener("click", function(){
//     hard.classList.remove("selected")
//     easy.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i]
//         }
//         else{
//             squares[i].style.display = "none";
//         }
//     }
// })

// hard.addEventListener("click", function(){
//     easy.classList.remove("selected")
//     hard.classList.add("selected")
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//             squares[i].style.backgroundColor = colors[i]
//             squares[i].style.display = "block";
//     }
// })

resetButton.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  //loop through all squares and match given color
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //Make array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
