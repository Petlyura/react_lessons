import React, { Component } from "react";
import SignUpFormCheckbox from "./components/SignUpFormCheckbox/index.js";
import SignUpFormRadio from "./components/SignUpFormRadio/SignUpFormRadio.js";
import SignUpFormSelect from "./components/SignUpFormSelect/SignUpFormSelect.js";

// import LoginForm from "./components/LoginForm";

// import SignUpForm from "./components/SignUpForm/SignUpForm";

// import SignUpFormComplecated from "./components/SignUpFormComplecated";

class App extends Component {
  // state = {
  //   inputValue: "",
  // };

  // handleChange = (event) => {
  //   this.setState({ inputValue: event.target.value });
  // };

  showFormValues = (values) => console.log(values);

  render() {
    // const { inputValue } = this.state;

    return (
      <>
        <h1>Форми</h1>

        {/* <LoginForm onSubmit={(values) => console.log(values)} /> */}

        {/* <input type="text" value={inputValue} onChange={this.handleChange} /> */}

        {/* <SignUpForm onSubmit={(values) => console.log(values)} /> */}

        {/* <SignUpFormComplecated onSubmit={this.showFormValues} /> */}

        {/* <SignUpFormCheckbox onSubmit={this.showFormValues} /> */}

        {/* <SignUpFormRadio onSubmit={this.showFormValues} /> */}

        <SignUpFormSelect onSubmit={this.showFormValues} />
      </>
    );
  }
}

export default App;
