import React, { Component } from "react";

import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = (index) => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = (index) => {
    const optionsClasses = ["ColorPicker__option"];

    if (index === this.state.activeOptionIdx) {
      optionsClasses.push("ColorPicker__option--active");
    }

    return optionsClasses.join(" ");
  };

  render() {
    const { options } = this.props;
    // const activeOptionLabel = options[this.state.activeOptionIdx].label;
    const { label } = options[this.state.activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        {/* <p>Выбран цвет: {activeOptionLabel}</p> */}
        <p>Выбран цвет: {label}</p>

        <div>
          {options.map(({ label, color }, index) => {
            // const optionsClasses = ["ColorPicker__option"];

            // if (index === this.state.activeOptionIdx) {
            //   optionsClasses.push("ColorPicker__option--active");
            // }

            const optionClassName = this.makeOptionClassName(index);

            return (
              <button
                key={label}
                // className="ColorPicker__option"
                // className={optionsClasses.join(" ")}
                className={optionClassName}
                style={{
                  backgroundColor: color,
                  // border:
                  //   index === this.state.activeOptionIdx
                  //     ? "5px solid black"
                  //     : "none",
                }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
