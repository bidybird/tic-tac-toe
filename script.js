//gameboard module
const gameBoard = (() => {
  "use strict";
  const boardSize = 9;
  const selectBoard = document.querySelector("#gameBoard");
  const gameArray = [];
  let turnCount = 0;

  createBoard();
  fillArray();
  useResetButton();
  selectSquare();

  function createBoard() {
    for (let i = 0; i < boardSize; i++) {
      const square = document.createElement("div");
      square.dataset.location = i;
      square.classList.add("square");
      square.textContent = "";
      selectBoard.appendChild(square);
    }
  }

  function fillArray() {
    const placement = selectBoard.children;
    for (let i = 0; i < boardSize; i++) {
      gameArray[i] = placement[i].textContent;
    }
  }

  function selectSquare() {
    const placement = selectBoard.children;
    for (let i = 0; i < boardSize; i++) {
      placement[i].addEventListener("click", function (e) {
        if (placement[i].textContent === "") {
          addPlayerMarker(e.target);
          fillArray();
          console.log(turnCount);
          turnCount = turnCount + 1;
          gameBoard.turnCount = turnCount;
          checkTheMarks(marksArray);
          stopGame(); //if a result was triggered
        }
      });
    }
  }

  function stopGame() {
    if (result !== "") {
      displayResult();
      document.getElementById("gameBoard").style.visibility = "hidden";
    }
  }

  function displayResult() {
    return (document.getElementById("gameResult").textContent = result);
  }

  function useResetButton() {
    document.getElementById("replay").addEventListener("click", function () {
      result = "";
      displayResult();
      document.getElementById("gameBoard").style.visibility = "visible";
      gameBoard.turnCount = 0;
      turnCount = 0;
      winArray = [];
      fillBoardWithBlanks();
    });
  }

  function fillBoardWithBlanks() {
    const placement = selectBoard.children;
    for (let i = 0; i < boardSize; i++) {
      placement[i].textContent = "";
      gameArray[i] = placement[i].textContent;
    }
  }

  function addPlayerMarker(square) {
    const newMarker = changeMarker();
    square.textContent = newMarker;
  }

  function changeMarker() {
    if (turnCount === 0) {
      return markOne;
    } else if (turnCount % 2 === 1) {
      return markTwo;
    } else {
      return markOne;
    }
  }

  return {
    gameArray: gameArray,
    turnCount: turnCount,
  };
})();

//variable list
let playerOneName = "PlayerOne";
let markOne = "X";
let playerTwoName = "PlayerTwo";
let markTwo = "O";
let result = "";

let marksArray = gameBoard.gameArray;

let winArray = [];

function playerWin(mark) {
  return mark + mark + mark;
}

//change variable values with a form
form = document.getElementById("register");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  playerOneName = form.elements["playerOne"].value;
  markOne = form.elements["markerOne"].value;
  playerTwoName = form.elements["playerTwo"].value;
  markTwo = form.elements["markerTwo"].value;
  form.elements["playerOne"].value = "";
  form.elements["markerOne"].value = "";
  form.elements["playerTwo"].value = "";
  form.elements["markerTwo"].value = "";
});

function organizeMarks(array) {
  winArray = [];
  winArray.push(array[0] + array[1] + array[2]);
  winArray.push(array[3] + array[4] + array[5]);
  winArray.push(array[6] + array[7] + array[8]);
  winArray.push(array[0] + array[3] + array[6]);
  winArray.push(array[1] + array[4] + array[7]);
  winArray.push(array[2] + array[5] + array[8]);
  winArray.push(array[0] + array[4] + array[8]);
  winArray.push(array[2] + array[4] + array[6]);
}

function checkTheMarks(array) {
  organizeMarks(array);
  for (let i = 0; i < winArray.length; i++) {
    if (winArray[i] === playerWin(markOne)) {
      console.log(`${playerOneName} wins`);
      result = `${playerOneName} wins`;
      return result;
    } else if (winArray[i] === playerWin(markTwo)) {
      console.log(`${playerTwoName} wins`);
      result = `${playerTwoName} wins`;
      return result;
    }
  }
  if (gameBoard.turnCount % 9 === 0) {
    console.log("players tied");
    result = "players tied";
    return result;
  }
}
