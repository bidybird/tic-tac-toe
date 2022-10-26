//gameboard module
const gameBoard = (() => {
  "use strict";
  const boardSize = 9;
  const selectBoard = document.querySelector("#gameBoard");
  const gameArray = [];
  let turnCount = 0;

  createBoard();
  fillArray();
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
          resetGame(); //if a result was triggered
        }
      });
    }
  }

  function resetGame() {
    if (result !== "") {
      console.log("result was triggered");
      result = "";
      gameBoard.turnCount = 0;
      turnCount = 0;
      winArray = [];
      fillBoardWithBlanks();
    }
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
const markOne = "X";
const playerOneWin = markOne + markOne + markOne;
const markTwo = "O";
const playerTwoWin = markTwo + markTwo + markTwo;
let result = "";

let marksArray = gameBoard.gameArray;

let winArray = [];

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
    if (winArray[i] === playerOneWin) {
      console.log("player1 wins");
      result = `playerX wins`;
      return result;
    } else if (winArray[i] === playerTwoWin) {
      console.log("player2 wins");
      result = `playerO wins`;
      return result;
    }
  }
  if (gameBoard.turnCount % 9 === 0) {
    console.log("players tied");
    result = "players tied";
    return result;
  }
}
