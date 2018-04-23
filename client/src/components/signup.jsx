import React, { Component } from 'react';
import ReactModal from 'react-modal';
import $ from 'jquery';
//direct child of header


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalSignUp: false,
      username: '',
      email: '',
      password: ''
    }
  }

  openModalSignUp () { //opens modal when state is true
    this.setState({ showModalSignUp: true });
  }

  submitSignUp () {
    $.post('/signup', this.state)
    .done((data) => {
      this.setState({ showModalSignUp: false });
      this.props.setUsername(this.state.username);
      console.log('the post was successful');
    })
    .fail(() => {
      console.log('the post was a failure');
    });
  }

  updateState (prop) { //onClick updates the state of any input field
    return (e) => {
      let state = {};
      state[prop] = e.target.value;
      this.setState(state);
    }
  }

  render () {
    return (
      <span>
        { this.props.loggedIn ? null : <button id="signup" onClick={this.openModalSignUp.bind(this)}>Sign Up</button>}
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
              <button onClick={this.submitSignUp.bind(this)}>Submit</button>
            </form>
        </div>
        </ReactModal>
     </span>
    )
  }
};

export default SignUp;
