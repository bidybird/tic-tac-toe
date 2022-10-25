//name marker
// const player1 = playerFactory(formplayer1value, formmarkerselectedvalue1);
// const player2 = playerFactory(formplayer2value, formmarkerselectedvalue2);

// const playerFactory = (name, marker) => {
//   // marker will mark a game-board spot with their marker...
//   const playerMove = () => marker;
//   return { name, marker, playerMove };
//};

//gameboard module
const gameBoard = (() => {
  "use strict";
  const boardSize = 9;
  const selectBoard = document.querySelector("#gameBoard");
  const gameArray = [];

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
        //console.log(e.target);
        addMarker(e.target);
        fillArray();
        return e.target;
      });
    }
  }

  function addMarker(elementSelected) {
    const newMarker = "X";
    elementSelected.textContent = newMarker;
  }

  return {
    gameArray: gameArray,
  };
})();

console.log(gameBoard.gameArray);

//game logic
const markOne = "x";
const oneWin = markOne + markOne + markOne;
const markTwo = "o";
const twoWin = markTwo + markTwo + markTwo;
let result = "";

let array = ["x", "x", "x", "o", "o", "", "", "", ""];

let answerArray = [];

function fillAnswerArray(array) {
  answerArray = [];
  answerArray.push(array[0] + array[1] + array[2]);
  answerArray.push(array[3] + array[4] + array[5]);
  answerArray.push(array[6] + array[7] + array[8]);
  answerArray.push(array[0] + array[3] + array[6]);
  answerArray.push(array[1] + array[4] + array[7]);
  answerArray.push(array[2] + array[5] + array[8]);
  answerArray.push(array[0] + array[4] + array[8]);
  answerArray.push(array[2] + array[4] + array[8]);
}

playGame();

function playGame() {
  fillAnswerArray(array);
  for (let i = 0; i < answerArray.length; i++) {
    if (answerArray[i] === oneWin) {
      console.log(`playerX wins`);
      result = `playerX wins`;
      return result;
    } else if (answerArray[i] === twoWin) {
      console.log(`playerO wins`);
      result = `playerO wins`;
      return result;
    }
  }
  console.log("players tied");
  return "players tied";
}
