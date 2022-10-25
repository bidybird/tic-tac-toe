//name marker
// const player1 = playerFactory(formplayer1value, formmarkerselectedvalue1);
// const player2 = playerFactory(formplayer2value, formmarkerselectedvalue2);

// const playerFactory = (name, marker) => {
//   //const playerMove = () => marker;

//   const getName = () => console.log(name);
//   const getMarker = () => console.log(marker);

//   return { getName, getMarker };
// };

const player1 = playerFactory("player1", "X");

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

let array = ["x", "x", "o", "o", "o", "o", "", "", ""];

// let turns = [
//   { player: 1, location: 0 },
//   { player: 2, location: 1 },
// ];

//there are nine turns max
let turns = [turn1, turn2, turn1, turn2, turn1, turn2, turn1, turn2, turn1];
// each turn is an execution of an eventAction of an event listener on the gameBoard
let turn1 = [{ player1: selectSquare() }];
let turn2 = [{ player2: selectSquare() }];
// odd turns are playerOnes, marks with x, at location clicked

// even turns are playerTwos, marks with o, at location clicked

// each time a turn occurs the answers checked to determine a winner

// cycle repeats

// turns end if a player wins or all turns are used up

// if all turns are used up game declared a tie

// function changeTurn() {
//     if player
// }

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
