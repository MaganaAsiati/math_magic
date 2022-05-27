/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outputStr: '0',
      nextString: false,
      total: 0,
      next: null,
      operation: null,
    };

    this.dropValue = this.dropValue.bind(this);
  }

  dropValue(e) {
    this.setState((state) => ({
      ...state,
      ...calculate(state, e.target.value),
    }));
  }

  render() {
    const { total, next, operation } = this.state;
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
              onClick={this.dropValue}
            >
              AC
            </button>
            <button
              className="buttonInt"
              type="button"
              value="+/-"
              onClick={this.dropValue}
            >
              +/-
            </button>
            <button
              className="buttonInt"
              type="button"
              value="%"
              onClick={this.dropValue}
            >
              %
            </button>
            <button
              className="buttonInt op"
              type="button"
              value="÷"
              onClick={this.dropValue}
            >
              ÷
            </button>
          </div>
          <div className="calculator_row Between">
            <button
              className="buttonInt"
              type="button"
              value="7"
              onClick={this.dropValue}
            >
              7
            </button>
            <button
              className="buttonInt"
              type="button"
              value="8"
              onClick={this.dropValue}
            >
              8
            </button>
            <button
              className="buttonInt"
              type="button"
              value="9"
              onClick={this.dropValue}
            >
              9
            </button>
            <button
              className="buttonInt op"
              type="button"
              value="x"
              onClick={this.dropValue}
            >
              x
            </button>
          </div>
          <div className="calculator_row Between">
            <button
              className="buttonInt"
              type="button"
              value="4"
              onClick={this.dropValue}
            >
              4
            </button>
            <button
              className="buttonInt"
              type="button"
              value="5"
              onClick={this.dropValue}
            >
              5
            </button>
            <button
              className="buttonInt"
              type="button"
              value="6"
              onClick={this.dropValue}
            >
              6
            </button>
            <button
              className="buttonInt op"
              type="button"
              value="-"
              onClick={this.dropValue}
            >
              -
            </button>
          </div>
          <div className="calculator_row Between">
            <button
              className="buttonInt"
              type="button"
              value="1"
              onClick={this.dropValue}
            >
              1
            </button>
            <button
              className="buttonInt"
              type="button"
              value="2"
              onClick={this.dropValue}
            >
              2
            </button>
            <button
              className="buttonInt"
              type="button"
              value="3"
              onClick={this.dropValue}
            >
              3
            </button>
            <button
              className="buttonInt op"
              type="button"
              value="+"
              onClick={this.dropValue}
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
              onClick={this.dropValue}
            >
              0
            </button>
            <button
              className="buttonInt"
              type="button"
              value="."
              onClick={this.dropValue}
            >
              .
            </button>
            <button
              className="buttonInt op"
              type="button"
              value="="
              onClick={this.dropValue}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}
