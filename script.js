//name marker
const player1 = playerFactory(formplayer1value, formmarkerselectedvalue1);
const player2 = playerFactory(formplayer2value, formmarkerselectedvalue2);

const playerFactory = (name, marker) => {
  // marker will mark a game-board spot with their marker...
  const playerMove = () => marker;
  return { name, marker, playerMove };
};

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
