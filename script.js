//name marker
// const player1 = playerFactory(formplayer1value, formmarkerselectedvalue1);
// const player2 = playerFactory(formplayer2value, formmarkerselectedvalue2);

// const playerFactory = (name, marker) => {
//   //const playerMove = () => marker;

//   const getName = () => console.log(name);
//   const getMarker = () => console.log(marker);

//   return { getName, getMarker };
// };

//const player1 = playerFactory("player1", "X");

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
        addPlayerMarker(e.target);
        fillArray();
        return e.target;
      });
    }
  }

  function addPlayerMarker(square) {
    const newMarker = "x"; //changeMarker()
    square.textContent = newMarker;
  }

  //function changeMarker(markOne, markTwo) {}

  return {
    gameArray: gameArray,
  };
})();

console.log(gameBoard.gameArray);

//game logic
const markOne = "x";
const playerOneWin = markOne + markOne + markOne;
const markTwo = "o";
const playerTwoWin = markTwo + markTwo + markTwo;
let result = "";

let marksArray = gameBoard.gameArray;

console.log(marksArray);

// let turns = [
//   { player: 1, location: 0 },
//   { player: 2, location: 1 },
// ];

//there are nine turns max
////let turns = [turn1, turn2, turn1, turn2, turn1, turn2, turn1, turn2, turn1];
// each turn is an execution of an eventAction of an event listener on the gameBoard
////let turn1 = [{ player1: selectSquare() }];
////let turn2 = [{ player2: selectSquare() }];
// odd turns are playerOnes, marks with x, at location clicked

// even turns are playerTwos, marks with o, at location clicked

// each time a turn occurs the answers checked to determine a winner

// cycle repeats

// turns end if a player wins or all turns are used up

// if all turns are used up game declared a tie

// function changeTurn() {
//     if player
// }

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

checkTheMarks();

function checkTheMarks() {
  organizeMarks(marksArray);
  for (let i = 0; i < winArray.length; i++) {
    if (winArray[i] === playerOneWin) {
      result = `playerX wins`;
      return result;
    } else if (winArray[i] === playerTwoWin) {
      result = `playerO wins`;
      return result;
    }
  }
  return "players tied";
}
