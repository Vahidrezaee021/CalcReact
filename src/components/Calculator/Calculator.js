import "./Calculator.css";
import { useState } from "react";
import { evaluate } from "mathjs";

function Calculator() {
  const [result, setResult] = useState("");
  const [hadDot, setHadDot] = useState(false);

  const operators = ['-' , '+' , '*' , '/']

  const checkInput = (text) => {
    if (text === "÷") return "/";
    if (text === "×") return "*";
    return text;
  };
  const clickHandler = (e) => {
    let input = checkInput(e.target.innerHTML);
    if (input === ".") {
      if (hadDot === true) return;
      else setHadDot(true);
    }

    if (operators.includes(input)) {
      setHadDot(false)
    }
    setResult(result + input);
  };
  const remove = () => {
    if(result.endsWith('.'))
      setHadDot(false)
    setResult(result.slice(0, -1));
  };
  const clear = () => {
    setResult("");
    setHadDot(false)

  };
  const equal = () => {
    setResult(String(evaluate(result)));
    setHadDot(false)
  };

  return (
    <>
      <div className="container">
        <div className="screen">{result}</div>
        <div className="buttons">
          <button onClick={remove} className="color">
            C
          </button>
          <button onClick={clear} className="color twoCol">
            Clear
          </button>
          <button onClick={clickHandler} className="color">
            ÷
          </button>
          <button onClick={clickHandler}>7</button>
          <button onClick={clickHandler}>8</button>
          <button onClick={clickHandler}>9</button>
          <button onClick={clickHandler} className="color">
            ×
          </button>
          <button onClick={clickHandler}>4</button>
          <button onClick={clickHandler}>5</button>
          <button onClick={clickHandler}>6</button>
          <button onClick={clickHandler} className="color">
            -
          </button>
          <button onClick={clickHandler}>1</button>
          <button onClick={clickHandler}>2</button>
          <button onClick={clickHandler}>3</button>
          <button onClick={clickHandler} className="color">
            +
          </button>
          <button onClick={clickHandler}>0</button>
          <button onClick={clickHandler}>.</button>
          <button onClick={equal} className="color twoCol">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
