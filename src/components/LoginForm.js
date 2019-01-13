import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: '',
      password: '',
    };
    this.updatedUsername = this.updatedUsername.bind(this)
    this.updatedPassword = this.updatedPassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
      event.preventDefault();
      if ((this.state.username.length !== 0) && (this.state.password.length !== 0)) {
        this.props.onSubmit()
      }
    }

  updatedUsername(event) {
      this.setState({
        username: event.target.value,
      })
    }

    updatedPassword(event) {
      this.setState({
        password: event.target.value,
      })
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
             value={this.state.username}
             onChange={this.updatedUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
            value={this.state.password}
            onChange={this.updatedPassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
