import React from "react";
import styled from "styled-components";
import EachRow from "./Row";
import { useState } from "react";

function app() {
  const [AllSquares, setAllSquares] = useState([
    { 1: "X", 2: "X", 3: "" },
    { 4: "", 5: "", 6: "" },
    { 7: "", 8: "O", 9: "" },
  ]);
  console.log(AllSquares);
  const board = AllSquares.map((RowOfSquares, index) => {
    // return console.log(RowofSquares);
    return (
      <EachRow
        rowIndex={index}
        key={index}
        RowOfSquares={RowOfSquares}
        setAllSquares={setAllSquares}
      />
    );
  });

  // const board = (
  //   <div>
  //     <EachRow AllSquares={AllSquares[0]} setAllSquares={setAllSquares} />
  //   </div>
  // );

  // console.log(board);
  return (
    <GameContainer>
      <div>Status</div>
      {board}

      <button>Restart</button>
    </GameContainer>
  );
}

export default app;

const GameContainer = styled.div`
  height: 150px;
  // border: 2px solid blue;
`;
