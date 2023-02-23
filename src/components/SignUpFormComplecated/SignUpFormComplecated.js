import React, { Component } from "react";
import { nanoid } from "nanoid";

const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
};

class SignUpFormComplecated extends Component {
  state = { ...INITIAL_STATE };

  // Для всіх інпутів створюємо один обробник
  // Розрізняти інпути будемо за атрибутом name
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { login, email, password } = this.state;
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);

    this.props.onSubmit({ ...this.state });

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  logingInput = nanoid();

  render() {
    const { login, email, password } = this.state;

    return (
      <>
        <h2>Більш складна форма</h2>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.logingInput}>Name:</label>

          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
            id={this.logingInput}
          />

          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <button type="submit">Sign up as {login}</button>
        </form>
      </>
    );
  }
}

export default SignUpFormComplecated;
