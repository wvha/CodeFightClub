import React, { Component } from 'react';
import Modal from 'react-modal';
import $ from 'jquery';
//direct child of header

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showModalLogin: false,
        username: '',
        password: ''
    };
  }

  openModalLogin () {
    this.setState({ showModalLogin: true });
  }

  submitLogin () {
    this.setState({ showModalLogin: false });
    $.post('/login', this.state)
    .done((data) => {
      console.log('this login was a', data);
      this.props.setUsername({ 
        username: this.state.username,
        isAdmin: true
      });
    });
  }

  onChange (prop) { //@param prop - onClick set state if changes in input field
    return (e) => {
      let state = {};
      this.state[prop] = e.target.value;
      this.setState({ state });
    }
  }
 
  render () {
    return (
      <span>
        <button id="login" onClick={this.openModalLogin.bind(this)}>Login</button>
        <Modal
          isOpen={this.state.showModalLogin}
          contentLabel="Login Modal"
          className="Modal container"
          overlayClassName="Overlay"
        >
        <div className="modal container">
          <h1>Login</h1>
          <form autoComplete="off" className="container column">
            Username:
            <br/><input type="text" name="username" onChange={this.onChange.call(this, 'username')}/><br/>
            Password:
            <br/><input type="password" name="password" onChange={this.onChange.call(this, 'password')}/><br/>
            <button onClick={this.submitLogin.bind(this)}>Submit</button>
          </form>
        </div>
        </Modal>
      </span>
    )
  }
};

export default Login;
