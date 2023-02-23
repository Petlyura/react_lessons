import React, { Component } from "react";

class SignUpForm extends Component {
  state = {
    login: "",
  };

  // Відповідає за оновлення стану. Кожен раз коли поле інпута буде змінюватись буде змінюватись state
  handleChange = (event) => {
    this.setState({ login: event.target.value });
  };

  // Викликається під час відправлення форми
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Signed us as: ${this.state.login}`);

    // Проп, який передається формі для виклику під час сабміту
    this.props.onSubmit({ ...this.state });
  };

  render() {
    const { login } = this.state;

    return (
      <>
        <h2>SignUp Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              placeholder="Enter login"
              value={login}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Sign up as {login}</button>
        </form>
      </>
    );
  }
}

export default SignUpForm;
