import React, { Component } from "react";

class LoginForm extends Component {
  handelSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const login = form.elements.login.value;
    const password = form.elements.password.value;

    console.log(login, password);

    this.props.onSubmit({ login, password });

    form.reset();
  };

  render() {
    return (
      <>
        <h2>Неконтрольовані елементи. Login Form</h2>
        <form onSubmit={this.handelSubmit}>
          <input type="text" name="login" />
          <input type="text" name="password" />
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

export default LoginForm;
