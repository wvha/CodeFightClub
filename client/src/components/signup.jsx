import React, { Component } from 'react';
import ReactModal from 'react-modal';
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
  }

  openModalSignUp () {
    this.setState({ showModalSignUp: true });
  }

  submitSignUp () {
    $.post('/signup', this.state)
    .done((data) => {
      this.setState({ showModalSignUp: false });
      console.log('the post was successful');
      this.props.setUsername(this.state.username);
    })
    .fail(() => {
      console.log('the post was a failure');
    });
  }

  //// usernameChange (e) {
  ////   this.setState({ username: e.target.value });
  //// }

  //// emailChange (e) {
  ////   this.setState({ email: e.target.value });
  //// }

  //// passwordChange (e) {
  ////   this.setState({ password: e.target.value });
  //// }

  updateState (prop) {
    return (e) => {
      let state = {};
      state[prop] = e.target.value;
      this.setState(state);
    }
  }

  render () {
    return (
      <span>
        { this.props.loggedIn ? null : <button id="signup" onClick={this.openModalSignUp}>Sign Up</button>}
        <ReactModal
            isOpen={this.state.showModalSignUp}
            contentLabel="SignUp Modal"
            className="Modal container"
            overlayClassName="Overlay"
        >
        <div className="modal container">
            <h1>create your account</h1>
            <form autoComplete="off" className="container">
              Username: 
              <br/><input type="text" name="username" value={this.state.username} onChange={this.updateState('username')}/><br/>
              Email:
              <br/><input type="text" name="email" value={this.state.email} onChange={this.updateState('email')}/><br/>
              Password: 
              <br/><input type="password" name="password" value={this.state.password} onChange={this.updateState('password')}/><br/>
              <button onClick={this.submitSignUp}>Submit</button>
            </form>
        </div>
        </ReactModal>
     </span>
    )
  }
};

export default SignUp;
