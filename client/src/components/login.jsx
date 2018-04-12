import React, { Component } from 'react';
import Modal from 'react-modal';
import $ from 'jquery';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showModalLogin: false,
        username: '',
        password: ''
    };
    this.openModalLogin = this.openModalLogin.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
  }

  openModalLogin () {
    this.setState({ showModalLogin: true });
  }

  submitLogin () {
    this.setState({ showModalLogin: false });
    $.post('/login', this.state)
    .done((data) => {
      console.log('this login was... ', data);
    });
  }

  onChangeUsername (e) {
    this.setState({ username: e.target.value });
  }

  onChangePassword (e) {
    this.setState({ password: e.target.value });
  }

  render () {
    return (
      <div>
        <button onClick={this.openModalLogin}>Login</button>
        <Modal
           isOpen={this.state.showModalLogin}
           contentLabel="SignUp Modal"
        >
        <div>
          <h1>Login</h1>
          <form>
            Username:
            <br/><input type="text" name="username" onChange={this.onChangeUsername}/><br/>
            Password:
            <br/><input type="text" name="password" onChange={this.onChangePassword}/><br/>
          </form>
        </div>
          <button onClick={this.submitLogin}>Submit</button>
        </Modal>
      </div>
    )
  }
};

export default Login;
