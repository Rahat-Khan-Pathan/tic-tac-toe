import React, { useEffect, useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [won, setWon] = useState("");
  const [array, setArray] = useState(["", "", "", "", "", "", "", "", ""]);
  const [now, setNow] = useState(1);
  const [my, setMy] = useState(false);
  const [you, setYou] = useState(false);
  const [win, setWin] = useState(false);
  const [id, setId] = useState(-1);
  const [xWon, setXWon] = useState(0);
  const [oWon, setOWon] = useState(0);

  const disabled = () => {
    const buttons = document.querySelectorAll(".my-btn");
    for (const btn of buttons) {
      btn.setAttribute("disabled", "true");
    }
  };
  const enabled = () => {
    const buttons = document.querySelectorAll(".my-btn");
    for (const btn of buttons) {
      btn.removeAttribute("disabled");
    }
  };
  const restart = () => {
    setYou(false);
    setWon("");
    setArray(["", "", "", "", "", "", "", "", ""]);
    setNow(1);
    setMy(false);
    setWin(false);
    setId(-1);
    enabled();
  };
  const showWinner = (value) => {
    if (value === "O") {
      setTimeout(() => {
        setWon("I Won!");
        setOWon(oWon + 1);
      }, 800);
    } else if (value === "X") {
      setTimeout(() => {
        setWon("You Won!");
        setXWon(xWon + 1);
      }, 800);
    } else if (value === "draw") setWon("Draw!");
    setMy(false);
  };
  const check = (a, b, c) => {
    if (a === b && b === c && a !== "" && b !== "" && c !== "") return true;
    else return false;
  };
  const check2 = () => {
    return (
      array[0] &&
      array[1] &&
      array[2] &&
      array[3] &&
      array[4] &&
      array[5] &&
      array[6] &&
      array[7] &&
      array[8]
    );
  };
  const checkAiO = (a, b, c) => {
    return (a === b && b !== c && b === "O" && c==='');
  };
  const checkAiX = (a, b, c) => {
    return (a === b && b !== c && b === "X" && c==='');
  };

  useEffect(() => {
    if (check(array[0], array[1], array[2])) {
      disabled();
      setWin(true);
      showWinner(array[0]);
    } else if (check(array[3], array[4], array[5])) {
      disabled();
      setWin(true);
      showWinner(array[3]);
    } else if (check(array[6], array[7], array[8])) {
      disabled();
      setWin(true);
      showWinner(array[6]);
    } else if (check(array[0], array[3], array[6])) {
      disabled();
      setWin(true);
      showWinner(array[0]);
    } else if (check(array[1], array[4], array[7])) {
      disabled();
      setWin(true);
      showWinner(array[1]);
    } else if (check(array[2], array[5], array[8])) {
      disabled();
      setWin(true);
      showWinner(array[2]);
    } else if (check(array[0], array[4], array[8])) {
      disabled();
      setWin(true);
      showWinner(array[0]);
    } else if (check(array[2], array[4], array[6])) {
      disabled();
      setWin(true);
      showWinner(array[2]);
    } else if (check2()) {
      disabled();
      setWin(true);
      showWinner("draw");
    }
    if (!win && you) {
      setTimeout(() => {
        setMy(true);
      }, 600);
    }
  }, [array, win, you]);
  useEffect(() => {
    if (!my) return;
    if (win || won) return;
    const newArray = [...array];
    if (checkAiO(array[0], array[1], array[2])) newArray[2] = "O";
    else if (checkAiO(array[1], array[2], array[0])) newArray[0] = "O";
    else if (checkAiO(array[0], array[2], array[1])) newArray[1] = "O";
    else if (checkAiO(array[3], array[4], array[5])) newArray[5] = "O";
    else if (checkAiO(array[4], array[5], array[3])) newArray[3] = "O";
    else if (checkAiO(array[3], array[5], array[4])) newArray[4] = "O";
    else if (checkAiO(array[6], array[7], array[8])) newArray[8] = "O";
    else if (checkAiO(array[7], array[8], array[6])) newArray[6] = "O";
    else if (checkAiO(array[6], array[8], array[7])) newArray[7] = "O";
    else if (checkAiO(array[0], array[3], array[6])) newArray[6] = "O";
    else if (checkAiO(array[3], array[6], array[0])) newArray[0] = "O";
    else if (checkAiO(array[0], array[6], array[3])) newArray[3] = "O";
    else if (checkAiO(array[1], array[4], array[7])) newArray[7] = "O";
    else if (checkAiO(array[4], array[7], array[1])) newArray[1] = "O";
    else if (checkAiO(array[1], array[7], array[4])) newArray[4] = "O";
    else if (checkAiO(array[2], array[5], array[8])) newArray[8] = "O";
    else if (checkAiO(array[5], array[8], array[2])) newArray[2] = "O";
    else if (checkAiO(array[2], array[8], array[5])) newArray[5] = "O";
    else if (checkAiO(array[0], array[4], array[8])) newArray[8] = "O";
    else if (checkAiO(array[4], array[8], array[0])) newArray[0] = "O";
    else if (checkAiO(array[0], array[8], array[4])) newArray[4] = "O";
    else if (checkAiO(array[2], array[4], array[6])) newArray[6] = "O";
    else if (checkAiO(array[4], array[6], array[2])) newArray[2] = "O";
    else if (checkAiO(array[2], array[6], array[4])) newArray[4] = "O";
    else if (checkAiX(array[0], array[1], array[2])) newArray[2] = "O";
    else if (checkAiX(array[1], array[2], array[0])) newArray[0] = "O";
    else if (checkAiX(array[0], array[2], array[1])) newArray[1] = "O";
    else if (checkAiX(array[3], array[4], array[5])) newArray[5] = "O";
    else if (checkAiX(array[4], array[5], array[3])) newArray[3] = "O";
    else if (checkAiX(array[3], array[5], array[4])) newArray[4] = "O";
    else if (checkAiX(array[6], array[7], array[8])) newArray[8] = "O";
    else if (checkAiX(array[7], array[8], array[6])) newArray[6] = "O";
    else if (checkAiX(array[6], array[8], array[7])) newArray[7] = "O";
    else if (checkAiX(array[0], array[3], array[6])) newArray[6] = "O";
    else if (checkAiX(array[3], array[6], array[0])) newArray[0] = "O";
    else if (checkAiX(array[0], array[6], array[3])) newArray[3] = "O";
    else if (checkAiX(array[1], array[4], array[7])) newArray[7] = "O";
    else if (checkAiX(array[4], array[7], array[1])) newArray[1] = "O";
    else if (checkAiX(array[1], array[7], array[4])) newArray[4] = "O";
    else if (checkAiX(array[2], array[5], array[8])) newArray[8] = "O";
    else if (checkAiX(array[5], array[8], array[2])) newArray[2] = "O";
    else if (checkAiX(array[2], array[8], array[5])) newArray[5] = "O";
    else if (checkAiX(array[0], array[4], array[8])) newArray[8] = "O";
    else if (checkAiX(array[4], array[8], array[0])) newArray[0] = "O";
    else if (checkAiX(array[0], array[8], array[4])) newArray[4] = "O";
    else if (checkAiX(array[2], array[4], array[6])) newArray[6] = "O";
    else if (checkAiX(array[4], array[6], array[2])) newArray[2] = "O";
    else if (checkAiX(array[2], array[6], array[4])) newArray[4] = "O";
    else if(array[4]==='') newArray[4]="O";
    else if(array[1]==='X' && array[0]==='') newArray[0]="O";
    else if(array[3]==='X' && array[0]==='') newArray[0]="O";
    else if(array[1]==='X' && array[2]==='') newArray[2]="O";
    else if(array[5]==='X' && array[2]==='') newArray[2]="O";
    else if(array[3]==='X' && array[6]==='') newArray[6]="O";
    else if(array[7]==='X' && array[6]==='') newArray[6]="O";
    else if(array[7]==='X' && array[8]==='') newArray[8]="O";
    else if(array[5]==='X' && array[8]==='') newArray[8]="O";
    else if(array[0]==='') newArray[0]="O";
    else if(array[2]==='') newArray[2]="O";
    else if(array[6]==='') newArray[6]="O";
    else if(array[8]==='') newArray[8]="O";
    else {
      while (true) {
        const i = Math.round(Math.random() * 8);
        if (!array[i]) {
          if (now === 0) {
            newArray[i] = "O";
          } else {
            newArray[i] = "X";
          }
          break;
        }
      }
    }
    setNow((now + 1) % 2);
    setArray(newArray);
    setMy(false);
    setYou(false);
    enabled();
  }, [my]);
  useEffect(() => {
    if (id !== -1 && !array[id]) {
      const newArray = [...array];
      if (now === 0) {
        newArray[id] = "O";
      } else {
        newArray[id] = "X";
      }
      setNow((now + 1) % 2);
      setArray(newArray);
      setYou(true);
      disabled();
    }
  }, [id]);
  const style1 = {
    color: "#f2ebd3",
  };
  const style2 = {
    color: "#545454",
  };
  return (
    <>
      <div className="game-container d-flex flex-column justify-content-center align-items-center">
        <div className="turn">
          <div
            className="your-turn"
            style={now === 1 ? { borderBottom: "4px solid #14bdac" } : {}}
          >
            <h1>Your Turn (X) : {xWon}</h1>
          </div>
          <div
            className="my-turn"
            style={now === 0 ? { borderBottom: "4px solid #14bdac" } : {}}
          >
            <h1>My Turn (O) : {oWon}</h1>
          </div>
        </div>
        <div className="game row row-cols-3 m-0">
          <div className="col border-bt border-rt">
            <button
              style={array[0] === "O" ? style1 : style2}
              className="my-btn"
              onClick={() => setId(0)}
            >
              {array[0]}
            </button>
          </div>
          <div className="col border-bt border-rt">
            <button
              style={array[1] === "O" ? style1 : style2}
              className="my-btn"
              onClick={() => setId(1)}
            >
              {array[1]}
            </button>
          </div>
          <div className="col border-bt">
            <button
              style={array[2] === "O" ? style1 : style2}
              className="my-btn"
              onClick={() => setId(2)}
            >
              {array[2]}
            </button>
          </div>
          <div className="col border-bt border-rt">
            <button
              style={array[3] === "O" ? style1 : style2}
              className="my-btn"
              onClick={() => setId(3)}
            >
              {array[3]}
            </button>
          </div>
          <div className="col border-bt border-rt">
            <button
              style={array[4] === "O" ? style1 : style2}
              className="my-btn"
              onClick={() => setId(4)}
            >
              {array[4]}
            </button>
          </div>
          <div className="col border-bt">
            <button
              style={array[5] === "O" ? style1 : style2}
              className="my-btn"
              onClick={() => setId(5)}
            >
              {array[5]}
            </button>
          </div>
          <div className="col border-rt">
            <button
              style={array[6] === "O" ? style1 : style2}
              className="my-btn"
              onClick={() => setId(6)}
            >
              {array[6]}
            </button>
          </div>
          <div className="col border-rt">
            <button
              style={array[7] === "O" ? style1 : style2}
              className="my-btn"
              onClick={() => setId(7)}
            >
              {array[7]}
            </button>
          </div>
          <div className="col">
            <button
              style={array[8] === "O" ? style1 : style2}
              className="my-btn"
              onClick={() => setId(8)}
            >
              {array[8]}
            </button>
          </div>
        </div>
        {won && (
          <>
            <div className="won-container">
              <h1>{won}</h1>
            </div>
            <button className="restart btn" onClick={restart}>
              Restart
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default TicTacToe;
