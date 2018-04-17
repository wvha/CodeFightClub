import React, { Component } from 'react';
import Modal from 'react-modal';
import AceEditor from 'react-ace';
import brace from 'brace';
import $ from 'jquery';
import 'brace/theme/cobalt';
import 'brace/mode/javascript';
import SignUp from './components/signup.jsx';
import Login from './components/login.jsx';
<<<<<<< HEAD
import Challenge from './components/Challenge.jsx';
=======
import $ from 'jquery';
>>>>>>> e3c7ec78443877a4f27e3d79b2f8964620035acd

Modal.setAppElement('#app');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solution: "",
      username: null
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.onChange = this.onChange.bind(this);
  } 

  onChange (val) {
    this.setState({ solution: val });
  }

  clickHandler (e) {
    console.log(this.state.solution);
    $.ajax({
      method: 'POST',
      url: '/challenge',
      data: {
        solution: this.state.solution
      }
    }).done((res) => {
      console.log(res);
    });
  }

  setUsername(user) {
    this.setState({ username: user });
  }

  render () {
    return (
      <div>
        <h1>Code Fight Club</h1>
        {this.state.username ? this.state.username : <h2><SignUp setUsername={this.setUsername}/> <Login/></h2>}
        <Challenge solution={this.state.solution} change={this.onChange}/>
        <button onClick={this.clickHandler}>Submit</button>
        <br/><br/>
        <h3>We have one rule... don't talk about code fight club</h3>
      </div>
    );
  }
}

export default App
