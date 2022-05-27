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
      total: null,
      next: null,
      operation: null,
    };
  }

  dropValue = (e) => {
    const X = e.target.value.toString();

    if (X === '-' || X === '+' || X === '÷' || X === 'x' || X === '%') {
      this.setState({ nextString: !this.state.nextString });
      this.setState({ operation: e.target.value });
    } else if (
      (X.match(/^[0-9]+$/) !== null && this.state.nextString === false)
      || X === '.'
    ) {
      if (this.state.total === null) {
        this.setState({ total: X });
        this.setState({ outputStr: X });
      } else {
        this.setState({ total: `${this.state.total}${e.target.value}` });
        this.setState({ outputStr: this.state.total + X });
      }
    } else if (
      (X.match(/^[0-9]+$/) !== null && this.state.nextString === true)
      || X === '.'
    ) {
      if (this.state.next === null) {
        this.setState({ next: X });
        this.setState({ outputStr: X });
      } else {
        this.setState({ next: `${this.state.next}${e.target.value}` });
        this.setState({ outputStr: this.state.next + X });
      }
    } else if (X === 'AC') {
      this.setState({ outputStr: '0' });
      this.setState({ total: null });
      this.setState({ next: null });
      this.setState({ operation: null });
      this.setState({ nextString: false });
    } else if (X === '+/-') {
      if (this.state.next !== null) {
        this.setState({ next: `${-1 * parseInt(this.state.next, 10)}` });
        this.setState({
          outputStr: `${-1 * parseInt(this.state.outputStr, 10)}`,
        });
      } else {
        this.setState({ total: `${-1 * parseInt(this.state.total, 10)}` });
        this.setState({
          outputStr: `${-1 * parseInt(this.state.outputStr, 10)}`,
        });
      }
    }

    const obj = {
      total: this.state.total,
      next: this.state.next,
      operation: this.state.operation,
    };

    if (calculate(obj, X).total && X === '=') {
      this.setState({ outputStr: calculate(obj, X).total });
      this.setState({ total: null });
      this.setState({ next: null });
      this.setState({ nextString: false });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="calculator_container">
          <div className="calculator_row">
            <button type="button" className="buttonInt buttonsUp">{this.state.outputStr}</button>
          </div>
          <div className="calculator_row Between">
            <button className="buttonInt" type="button" value="AC" onClick={this.dropValue}>
              AC
            </button>
            <button className="buttonInt" type="button" value="+/-" onClick={this.dropValue}>
              +/-
            </button>
            <button className="buttonInt" type="button" value="%" onClick={this.dropValue}>
              %
            </button>
            <button className="buttonInt op" type="button" value="÷" onClick={this.dropValue}>
              ÷
            </button>
          </div>
          <div className="calculator_row Between">
            <button className="buttonInt" type="button" value="7" onClick={this.dropValue}>
              7
            </button>
            <button className="buttonInt" type="button" value="8" onClick={this.dropValue}>
              8
            </button>
            <button className="buttonInt" type="button" value="9" onClick={this.dropValue}>
              9
            </button>
            <button className="buttonInt op" type="button" value="x" onClick={this.dropValue}>
              x
            </button>
          </div>
          <div className="calculator_row Between">
            <button className="buttonInt" type="button" value="4" onClick={this.dropValue}>
              4
            </button>
            <button className="buttonInt" type="button" value="5" onClick={this.dropValue}>
              5
            </button>
            <button className="buttonInt" type="button" value="6" onClick={this.dropValue}>
              6
            </button>
            <button className="buttonInt op" type="button" value="-" onClick={this.dropValue}>
              -
            </button>
          </div>
          <div className="calculator_row Between">
            <button className="buttonInt" type="button" value="1" onClick={this.dropValue}>
              1
            </button>
            <button className="buttonInt" type="button" value="2" onClick={this.dropValue}>
              2
            </button>
            <button className="buttonInt" type="button" value="3" onClick={this.dropValue}>
              3
            </button>
            <button className="buttonInt op" type="button" value="+" onClick={this.dropValue}>
              +
            </button>
          </div>
          <div className="calculator_row buttonsDown ">
            <button className="buttonInt" id="bigButton" type="button" value="0" onClick={this.dropValue}>
              0
            </button>
            <button className="buttonInt" type="button" value="." onClick={this.dropValue}>
              .
            </button>
            <button className="buttonInt op" type="button" value="=" onClick={this.dropValue}>
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}
