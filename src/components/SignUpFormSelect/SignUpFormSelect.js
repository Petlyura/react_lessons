import React, { Component } from "react";

const Gender = {
  MALE: "male",
  FEMALE: "female",
};

const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
  agreed: false,
  gender: null,
  age: "",
};

class SignUpFormSelect extends Component {
  state = { ...INITIAL_STATE };

  handleChange = (event) => {
    const { name, type, checked, value } = event.target;

    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { login, email, password, agreed, gender, age } = this.state;

    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}, Gender: ${gender}, Age: ${age}`
    );

    this.props.onSubmit({ ...this.state });

    this.reset();
  };

  reset = () => this.setState({ ...INITIAL_STATE });

  render() {
    const { login, email, password, agreed, gender, age } = this.state;

    return (
      <>
        <h2>Signup Form with Radiobuttons</h2>
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

          <section>
            <h3>Choose your gender</h3>
            <label>
              Male
              <input
                type="radio"
                checked={gender === Gender.MALE}
                name="gender"
                value={Gender.MALE}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Female
              <input
                type="radio"
                checked={gender === Gender.FEMALE}
                name="gender"
                value={Gender.FEMALE}
                onChange={this.handleChange}
              />
            </label>
          </section>

          <label>
            Choose your age
            <select name="age" value={age} onChange={this.handleChange}>
              <option value="" disabled>
                ...
              </option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36+">36+</option>
            </select>
          </label>

          <button type="submit" disabled={!agreed}>
            Sign up as {login}
          </button>
        </form>
      </>
    );
  }
}

export default SignUpFormSelect;
