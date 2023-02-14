import React from "react";
import styled from "styled-components";
import { useState } from "react";
function EachRow({ RowOfSquares, setAllSquares, rowIndex }) {
  const [currentPlayer, setCurrentPlayer] = useState("");
  const player1 = "X";
  const player2 = "O";
  function handleClick(boxNumber) {
    if (currentPlayer == "" || currentPlayer == player2) {
      setCurrentPlayer(player1);
    } else {
      setCurrentPlayer(player2);
    }
    setAllSquares((prev) => {
      return prev.map((row, index) => {
        return index !== rowIndex
          ? row
          : { ...row, [boxNumber]: currentPlayer };
      });
    });
    console.log(RowOfSquares);
  }
  const OneRow = [];
  for (const [key, value] of Object.entries(RowOfSquares)) {
    if (key % 3 == 0) {
      OneRow.push(
        <Box
          key={key}
          onClick={() => handleClick(key)}
          style={{ borderRight: "solid 2px #a6a6a6" }}
        >
          {value}
        </Box>
      );
    } else {
      OneRow.push(
        <Box key={key} onClick={() => handleClick(key)}>
          {value}
        </Box>
      );
    }
  }

  return <Row>{OneRow}</Row>;
}

export default EachRow;

const Row = styled.div`
  width: 150px;
  height: 50px;
  //   align-item: center;
  //   justify-content: center;
`;

const Box = styled.div`
  text-align: center;
  //   align-item: center;
  //   padding-top: 5px;
  font-size: 22px;
  font-weight: 800;
  //   justify-content: center;
  width: 30%;
  height: 100%;
  display: inline-block;
  background: white;
  border: solid 2px red;
  border-right: none;
  //   margin: 0;
`;
