import React, { Component } from 'react';
import Modal from 'react-modal';
import SignUp from './components/signup.jsx';
import Login from './components/login.jsx';

Modal.setAppElement('#app');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div>
        <SignUp/> 
        <Login/>
        <h1>Code Fight Club</h1>
        <br/>
        <br/>
        <h3>We have one rule... don't talk about code fight club</h3>
      </div>
    );
  }
}

export default App
