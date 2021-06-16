import { useState } from "react";
import "./App.css";

const players = {
  first: "O",
  second: "X",
};

const blocks = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
};

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(players.first);
  const [blockState, setBlockState] = useState(blocks);

  // {
  //   ...{ O: [1,2,3], X: [4,5,6] },
  //   O: [1, 2, 3, 4],
  // }

  // {
  //   O: [1, 2, 3]
  //   X: [4, 5, 6]
  //   O: [1, 2, 3, 4]
  // }

  // {
  //   X: [4, 5, 6, 7]
  //   O: [1, 2, 3, 4]
  // }

  /**
 * 

    index = 1

    { ...blockState, [index]: currentPlayer }

    { ....{
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
          6: "",
          7: "",
          8: "",
          9: "",
        },
        1: 'O'
    }


    { 
        1: "O",      
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        1: 'O'
    }

 */

  const onClick = (e) => {
    const index = e.currentTarget.getAttribute("index");

    if (blockState[index] === "") {
      const updatedState = { ...blockState, [index]: currentPlayer };
      setBlockState(updatedState);

      for (const combination of winningCombinations) {
        for (const key of combination) {
        }
      }

      // winningCombinations.forEach((combination) => {
      //   combination.forEach((key) => {
      //     updatedState[key] === currentPlayer

      //   });
      // });

      setCurrentPlayer(
        currentPlayer === players.first ? players.second : players.first
      );
    }
  };

  return (
    <div className="App">
      <div id="boardWrapper">
        {Array(9)
          .fill()
          .map((elem, index) => (
            <div
              key={index}
              id="innerBlock"
              index={index + 1}
              onClick={onClick}
            >
              {/* {blockState[index + 1]}
               */}

              {index + 1}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
