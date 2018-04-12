import React, { Component } from 'react';
import Modal from 'react-modal';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalSignUp: false,
      firstname: '',
      lastname: '',
      username: ''
    }
    this.openModalSignUp = this.openModalSignUp.bind(this);
    this.submitSignUp = this.submitSignUp.bind(this);
    this.firstnameChange = this.firstnameChange.bind(this);
    this.lastnameChange = this.lastnameChange.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
  }

  openModalSignUp () {
    this.setState({ showModalSignUp: true });
  }

  submitSignUp () {
    this.setState({ showModalSignUp: false });
    console.log(this.state.firstname, this.state.lastname, this.state.username);
  }

  firstnameChange (e) {
    this.setState({ firstname: e.target.value });
  }

  lastnameChange (e) {
    this.setState({ lastname: e.target.value });
  }

  usernameChange (e) {
    this.setState({ username: e.target.value });
  }

  render () {
    return (
      <div>
        <button onClick={this.openModalSignUp}>Sign Up</button>
        <Modal
            isOpen={this.state.showModalSignUp}
            contentLabel="SignUp Modal"
        >
        <div>
            <h1>create your account</h1>
            <form>
            First name:
            <br/><input type="text" name="firstname" value={this.state.firstname} onChange={this.firstnameChange}/><br/>
            Last name:
            <br/><input type="text" name="lastname" value={this.state.lastname} onChange={this.lastnameChange}/><br/>
            Username:
            <br/><input type="text" name="username" value={this.state.username} onChange={this.usernameChange}/><br/>
            </form>
        </div>
            <button onClick={this.submitSignUp}>Submit</button>
        </Modal>
     </div>
    )
  }
};

export default SignUp;
