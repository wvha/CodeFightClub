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
            <form autoComplete="off">
            Username: 
            <br/><input type="text" name="username" value={this.state.username} onChange={this.usernameChange}/><br/>
            Email: 
            <br/><input type="text" name="email" value={this.state.email} onChange={this.emailChange}/><br/>
            Password: 
            <br/><input type="password" name="password" value={this.state.password} onChange={this.passwordChange}/><br/>
            </form>
        </div>
            <button onClick={this.submitSignUp}>Submit</button>
        </Modal>
     </span>
    )
  }
};

export default SignUp;
