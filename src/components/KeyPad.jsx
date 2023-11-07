import { useEffect, useState } from "react";
import Calculator from "./Calculator";
import "./keypad-style.css";

export default function KeyPad() {
  const [displayArr, setDisplayArr] = useState([]); //array of number to be operated upon
  const [dotFlag, setDotFlag] = useState(false); //flag to check if there is only one point in the number
  const [number1, setNumber1] = useState(0);
  const [operatorPressed, setOperatorPressed] = useState(false);
  const [operator, setOperator] = useState("+");
  const [equalsPressed, setEqualsPressed] = useState(false);

  //Explanation of Functions:
  //handleNumClick = handles the clicking of numerical buttons on the keypad, inputs the number in the displayArr
  //clear = clears displayArr(and display div) and sets dotFlag to false
  //handleDot = set dotFlag to true, which means that the floating point can only be entered once in a number

  function handleNumClick(event) {
    //handle event for keypad press
    if (operatorPressed === true && dotFlag === false) {
      setDisplayArr(() => []);
      setOperatorPressed(false);
    }
    setEqualsPressed(() => false);
    setDisplayArr((prevState) => [...prevState, event.target.outerText]);
  }

  function handleDot(event) {
    //allow only one point in the array of number
    if (displayArr.length === 0 || operatorPressed === true) {
      setDisplayArr(() => [0]);
      setDotFlag(true);
      setOperatorPressed(false);
    }

    if (dotFlag === false) {
      setDotFlag(true);
      setDisplayArr((prevState) => [...prevState, event.target.outerText]);
    } else {
      setDisplayArr((prevState) => [...prevState]);
    }
  }

  function clear() {
    //function to clear display and dotFlag
    setDotFlag(false);
    setOperatorPressed(false);
    setEqualsPressed(false);
    setDisplayArr(() => []);
    setNumber1(0);
    setOperator("+");
  }

  function handleOperation(event) {
    setDotFlag(false);
    setOperator(event.target.outerText);
    if (displayArr.length !== 0 && operatorPressed === false) {
      let num1 = displayArr.join("");
      num1 = parseFloat(num1);

      if (equalsPressed === true) {
        if (operator === "+" || operator === "-") {
          num1 = 0;
          setEqualsPressed(false);
        } else if (operator === "×" || operator === "÷") {
          num1 = 1;
          setEqualsPressed(false);
        }
      }

      if (operator === "+") {
        setNumber1((number1) => {
          if ((number1 / num1) % 1 !== 0)
            return parseFloat((number1 + num1).toFixed(4));
          else return number1 + num1;
        });
      } else if (operator === "-") {
        setNumber1((number1) => {
          if ((number1 / num1) % 1 !== 0)
            return parseFloat((number1 - num1).toFixed(4));
          else return number1 - num1;
        });
      } else if (operator === "×") {
        setNumber1((number1) => {
          if ((number1 / num1) % 1 !== 0)
            return parseFloat((number1 * num1).toFixed(4));
          else return number1 * num1;
        });
      } else if (operator === "÷" && number1 !== 0) {
        setNumber1((number1) => {
          if ((number1 / num1) % 1 !== 0)
            return parseFloat((number1 / num1).toFixed(4));
          else return number1 / num1;
        });
      }
      setDisplayArr(() => []);
      setOperatorPressed(true);
    }
  }

  function handleCalculate() {
    if (equalsPressed === false && displayArr.length !== 0) {
      let num2 = displayArr.join("");
      num2 = parseFloat(num2);

      if (operator === "+") {
        setNumber1(() => {
          if ((number1 / num2) % 1 !== 0)
            return parseFloat((number1 + num2).toFixed(4));
          else return number1 + num2;
        });
      } else if (operator === "-") {
        setNumber1(() => {
          if ((number1 / num2) % 1 !== 0)
            return parseFloat((number1 - num2).toFixed(4));
          else return number1 - num2;
        });
      } else if (operator === "×") {
        setNumber1(() => {
          if ((number1 / num2) % 1 !== 0)
            return parseFloat((number1 * num2).toFixed(4));
          else return number1 * num2;
        });
      } else if (operator === "÷") {
        setNumber1(() => {
          if ((number1 / num2) % 1 !== 0)
            return parseFloat((number1 / num2).toFixed(4));
          else return number1 / num2;
        });
      }
    }
    setEqualsPressed(() => true);
    //setDisplayArr(() => [number1]);
  }

  useEffect(() => {
    if (equalsPressed === true || operatorPressed === true) {
      setDisplayArr(() => [number1]);
    }

    //console.log(number1, equalsPressed);
  }, [number1, equalsPressed, operatorPressed]);

  return (
    <div>
      <Calculator display={displayArr} />
      <div className="row">
        <div className="button empty-button"></div>
        <div className="button empty-button"></div>
        <div className="button empty-button"></div>
        <div className="button right-col-button" onClick={clear}>
          AC
        </div>
      </div>
      <div className="row">
        <div className="button" onClick={handleNumClick}>
          7
        </div>
        <div className="button" onClick={handleNumClick}>
          8
        </div>
        <div className="button" onClick={handleNumClick}>
          9
        </div>
        <div className="button right-col-button" onClick={handleOperation}>
          ÷
        </div>
      </div>
      <div className="row">
        <div className="button" onClick={handleNumClick}>
          4
        </div>
        <div className="button" onClick={handleNumClick}>
          5
        </div>
        <div className="button" onClick={handleNumClick}>
          6
        </div>
        <div className="button right-col-button" onClick={handleOperation}>
          ×
        </div>
      </div>
      <div className="row">
        <div className="button" onClick={handleNumClick}>
          1
        </div>
        <div className="button" onClick={handleNumClick}>
          2
        </div>
        <div className="button" onClick={handleNumClick}>
          3
        </div>
        <div className="button right-col-button" onClick={handleOperation}>
          -
        </div>
      </div>
      <div className="row">
        <div className="button" onClick={handleNumClick}>
          0
        </div>
        <div className="button" onClick={handleDot}>
          .
        </div>
        <div
          className="button"
          onClick={handleCalculate}
          onKeyDown={(e) => {
            console.log(e);
          }}
        >
          =
        </div>
        <div className="button right-col-button" onClick={handleOperation}>
          +
        </div>
      </div>
    </div>
  );
}
