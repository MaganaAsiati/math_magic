/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Calculator.css';

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="calculator_container">
          <div className="calculator_row">
            <button className="buttonInt buttonsUp" type="button">
              0
            </button>
          </div>
          <div className="calculator_row Between">
            <button className="buttonInt" type="button">
              AC
            </button>
            <button className="buttonInt" type="button">
              +/-
            </button>
            <button className="buttonInt" type="button">
              %
            </button>
            <button className="buttonInt op" type="button">
              ÷
            </button>
          </div>
          <div className="calculator_row Between">
            <button className="buttonInt" type="button">
              7
            </button>
            <button className="buttonInt" type="button">
              8
            </button>
            <button className="buttonInt" type="button">
              9
            </button>
            <button className="buttonInt op" type="button">
              x
            </button>
          </div>
          <div className="calculator_row Between">
            <button className="buttonInt" type="button">
              4
            </button>
            <button className="buttonInt" type="button">
              5
            </button>
            <button className="buttonInt" type="button">
              6
            </button>
            <button className="buttonInt op" type="button">
              -
            </button>
          </div>
          <div className="calculator_row Between">
            <button className="buttonInt" type="button">
              1
            </button>
            <button className="buttonInt" type="button">
              2
            </button>
            <button className="buttonInt" type="button">
              3
            </button>
            <button className="buttonInt op" type="button">
              +
            </button>
          </div>
          <div className="calculator_row buttonsDown ">
            <button className="buttonInt" id="bigButton" type="button">
              0
            </button>
            <button className="buttonInt" type="button">
              .
            </button>
            <button className="buttonInt op" type="button">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}
