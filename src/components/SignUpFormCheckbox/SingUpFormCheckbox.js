import React, { Component } from "react";

const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
  agreed: false,
};

class SignUpFormCheckbox extends Component {
  state = { ...INITIAL_STATE };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Якщо тип елемента – checkbox, беремо значення checked,
    // в іншому випадку – value
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { login, email, password, agreed } = this.state;
    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`
    );

    this.props.onSubmit({ ...this.state });

    this.reset();
  };

  reset = () => this.setState({ ...INITIAL_STATE });

  render() {
    const { login, email, password, agreed } = this.state;

    return (
      <>
        <h2>Signup Form with Checkbox</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                placeholder="Enter login"
                name="login"
                value={login}
                onChange={this.handleChange}
                id={this.logingInput}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Agree to terms
              <input
                type="checkbox"
                checked={agreed}
                name="agreed"
                onChange={this.handleChange}
              />
            </label>
          </div>

          <button type="submit" disabled={!agreed}>
            Sign up as {login}
          </button>
        </form>
      </>
    );
  }
}

export default SignUpFormCheckbox;
