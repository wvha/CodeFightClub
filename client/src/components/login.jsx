import React, { Component } from 'react';
import Modal from 'react-modal';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showModalLogin: false
    };
    this.openModalLogin = this.openModalLogin.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  openModalLogin () {
    this.setState({ showModalLogin: true });
  }
  
  submitLogin () {
    this.setState({ showModalLogin: false });
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
            <br/><input type="text" name="username"/><br/>
            Password: 
            <br/><input type="text" name="password"/><br/>
          </form>
        </div>
          <button onClick={this.submitLogin}>Submit</button>
        </Modal>
      </div>
    )
  }
};

export default Login;