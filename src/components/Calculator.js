import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const dropValue = (e) => {
    setState((state) => ({
      ...state,
      ...calculate(state, e.target.value),
    }));
  };

  const { total, next, operation } = state;
  return (
    <div className="calculator">
      <div className="calculator_container">
        <div className="calculator_row">
          <button type="button" className="buttonInt buttonsUp">
            {total}
            {operation}
            {next}
          </button>
        </div>
        <div className="calculator_row Between">
          <button
            className="buttonInt"
            type="button"
            value="AC"
            onClick={dropValue}
          >
            AC
          </button>
          <button
            className="buttonInt"
            type="button"
            value="+/-"
            onClick={dropValue}
          >
            +/-
          </button>
          <button
            className="buttonInt"
            type="button"
            value="%"
            onClick={dropValue}
          >
            %
          </button>
          <button
            className="buttonInt op"
            type="button"
            value="÷"
            onClick={dropValue}
          >
            ÷
          </button>
        </div>
        <div className="calculator_row Between">
          <button
            className="buttonInt"
            type="button"
            value="7"
            onClick={dropValue}
          >
            7
          </button>
          <button
            className="buttonInt"
            type="button"
            value="8"
            onClick={dropValue}
          >
            8
          </button>
          <button
            className="buttonInt"
            type="button"
            value="9"
            onClick={dropValue}
          >
            9
          </button>
          <button
            className="buttonInt op"
            type="button"
            value="x"
            onClick={dropValue}
          >
            x
          </button>
        </div>
        <div className="calculator_row Between">
          <button
            className="buttonInt"
            type="button"
            value="4"
            onClick={dropValue}
          >
            4
          </button>
          <button
            className="buttonInt"
            type="button"
            value="5"
            onClick={dropValue}
          >
            5
          </button>
          <button
            className="buttonInt"
            type="button"
            value="6"
            onClick={dropValue}
          >
            6
          </button>
          <button
            className="buttonInt op"
            type="button"
            value="-"
            onClick={dropValue}
          >
            -
          </button>
        </div>
        <div className="calculator_row Between">
          <button
            className="buttonInt"
            type="button"
            value="1"
            onClick={dropValue}
          >
            1
          </button>
          <button
            className="buttonInt"
            type="button"
            value="2"
            onClick={dropValue}
          >
            2
          </button>
          <button
            className="buttonInt"
            type="button"
            value="3"
            onClick={dropValue}
          >
            3
          </button>
          <button
            className="buttonInt op"
            type="button"
            value="+"
            onClick={dropValue}
          >
            +
          </button>
        </div>
        <div className="calculator_row buttonsDown ">
          <button
            className="buttonInt"
            id="bigButton"
            type="button"
            value="0"
            onClick={dropValue}
          >
            0
          </button>
          <button
            className="buttonInt"
            type="button"
            value="."
            onClick={dropValue}
          >
            .
          </button>
          <button
            className="buttonInt op"
            type="button"
            value="="
            onClick={dropValue}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
