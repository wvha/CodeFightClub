import React, { Component } from 'react';
import Modal from 'react-modal';
import $ from 'jquery';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalSignUp: false,
      username: '',
      email: '',
      password: ''
    }
    this.openModalSignUp = this.openModalSignUp.bind(this);
    this.submitSignUp = this.submitSignUp.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  openModalSignUp () {
    this.setState({ showModalSignUp: true });
  }

  submitSignUp () {
    this.setState({ showModalSignUp: false });
    $.post('/signup', this.state)
    .done((data) => {
      console.log('the post was successful');
      this.props.setUsername(this.state.username);
    })
    .fail(() => {
      console.log('the post was a failure');
    });
  }

  usernameChange (e) {
    this.setState({ username: e.target.value });
  }

  emailChange (e) {
    this.setState({ email: e.target.value });
  }

  passwordChange (e) {
    this.setState({ password: e.target.value });
  }

  render () {
    return (
      <span>
        <button onClick={this.openModalSignUp}>Sign Up</button>
        <Modal
            isOpen={this.state.showModalSignUp}
            contentLabel="SignUp Modal"
        >
        <div>
            <h1>create your account</h1>
<<<<<<< HEAD
            <form autoComplete="off">
            Username: 
=======
            <form>
            Username:
>>>>>>> e3c7ec78443877a4f27e3d79b2f8964620035acd
            <br/><input type="text" name="username" value={this.state.username} onChange={this.usernameChange}/><br/>
            Email:
            <br/><input type="text" name="email" value={this.state.email} onChange={this.emailChange}/><br/>
<<<<<<< HEAD
            Password: 
            <br/><input type="password" name="password" value={this.state.password} onChange={this.passwordChange}/><br/>
=======
            Password:
            <br/><input type="text" name="password" value={this.state.password} onChange={this.passwordChange}/><br/>
>>>>>>> e3c7ec78443877a4f27e3d79b2f8964620035acd
            </form>
        </div>
            <button onClick={this.submitSignUp}>Submit</button>
        </Modal>
     </span>
    )
  }
};

export default SignUp;
