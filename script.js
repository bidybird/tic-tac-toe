//name marker
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
        return e.target;
      });
    }
  }

  function selectSquareText() {
    console.log(selectSquare().textContent);
    return selectSquare().textContent;
  }

  return {
    gameArray: gameArray,
    createBoard: createBoard,
    fillArray: fillArray,
  };
})();

// const makeBoard = gameBoard.createBoard;
// const array = gameBoard.fillArray;
// const square = gameBoard.selectSquare;

console.log(gameBoard.gameArray);

// const gameBoard = (() => {
//   "use strict";
//   const gameArray = [];

//   const placement = document.querySelector("#gameBoard").children;

//   function gameContent() {
//     for (let i = 0; i < placement.length; i++) {
//       gameArray[i] = placement[i].textContent;

//       placement[i].addEventListener("click", function (e) {
//         console.log(e.target);
//       });
//     }
//     return gameArray;
//   }

//   return { value: gameContent() };
//})();

// placement.addEventListener("click", function (e) {
//   console.log(e.target);
// });

// const displayController(() => {
//     const ;
//     const ;
//     return {
//         ,

//     };
// })();
