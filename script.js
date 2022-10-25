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
const markerOne = "x";
const markerTwo = "o";
const playerX = "";
const playerO = "";
const result = "";

const array = [
  markerOne,
  markerOne,
  "",
  "",
  "",
  markerOne,
  markerOne,
  "",
  markerOne,
];

if (
  (array[0] === markerOne && array[0] === array[1] && array[1] === array[2]) ||
  (array[3] === markerOne && array[3] === array[4] && array[4] === array[5]) ||
  (array[6] === markerOne && array[6] === array[7] && array[7] === array[8]) ||
  (array[0] === markerOne && array[0] === array[3] && array[3] === array[6]) ||
  (array[1] === markerOne && array[1] === array[4] && array[4] === array[7]) ||
  (array[2] === markerOne && array[2] === array[5] && array[5] === array[8]) ||
  (array[0] === markerOne && array[0] === array[4] && array[4] === array[8]) ||
  (array[2] === markerOne && array[2] === array[4] && array[4] === array[6])
) {
  playerX = "wins";
  console.log(`playerX ${playerX}`);
  result = `playerX ${playerX}`;
  return result;
} else if (
  (array[0] === markerTwo && array[0] === array[1] && array[1] === array[2]) ||
  (array[3] === markerTwo && array[3] === array[4] && array[4] === array[5]) ||
  (array[6] === markerTwo && array[6] === array[7] && array[7] === array[8]) ||
  (array[0] === markerTwo && array[0] === array[3] && array[3] === array[6]) ||
  (array[1] === markerTwo && array[1] === array[4] && array[4] === array[7]) ||
  (array[2] === markerTwo && array[2] === array[5] && array[5] === array[8]) ||
  (array[0] === markerTwo && array[0] === array[4] && array[4] === array[8]) ||
  (array[2] === markerTwo && array[2] === array[4] && array[4] === array[6])
) {
  playerO = "wins";
  console.log(`playerO ${playerO}`);
  result = `playerO ${playerO}`;
  return result;
} else if (
  array[0] !== "" &&
  array[1] !== "" &&
  array[2] !== "" &&
  array[3] !== "" &&
  array[4] !== "" &&
  array[5] !== "" &&
  array[6] !== "" &&
  array[7] !== "" &&
  array[8] !== ""
) {
  result = `playerX and playerO tied`;
}
