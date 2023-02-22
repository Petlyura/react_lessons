import React, { Component } from "react";

import Value from "./Value";
import Controls from "./Controls";

import "./Counter.css";

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  // // old school state
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 0,
  //   };
  // }

  // modern state with public property
  state = {
    // value: 0,
    value: this.props.initialValue, // початковий стан від prop
  };

  handleIncrement = (event) => {
    // console.log("Кликнули увеличить");
    // console.log("this:", this);

    // setTimeout(() => {
    //   console.log("event:", event.target);
    // }, 1000); // так також працює незважаючи на асинхроність setTimeout

    // this.state.value = 6 // !!!!! так не треба робити

    // this.setState({ value: 5 }); // тыльки коли нам не потрібне значення попереднього стану

    this.setState((prevState) => {
      return { value: prevState.value + 1 };
    });
  };

  handleDecrement = (event) => {
    // console.log("Кликнули уменьшить");
    // console.log("this:", this);
    // console.log("event:", event);

    this.setState((prevState) => {
      return { value: prevState.value - 1 };
    });
  };

  render() {
    return (
      <div className="Counter">
        {/* <span className="Counter__value">{this.state.value}</span> */}
        <Value value={this.state.value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        {/* <div className="Counter__controls">
          <button
            type="button"
            // onClick={() => console.log("Кликнули увеличить")}
            onClick={this.handleIncrement}
          >
            Увеличить на 1
          </button>
          <button
            type="button"
            // onClick={() => console.log("Кликнули уменьшить")}
            onClick={this.handleDecrement}
          >
            Уменьшить на 1
          </button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
