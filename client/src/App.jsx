import React, { Component } from 'react';
import Modal from 'react-modal';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/theme/cobalt';
import 'brace/mode/javascript';
import SignUp from './components/signup.jsx';
import Login from './components/login.jsx';
import $ from 'jquery';

Modal.setAppElement('#app');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solution: "",
      tests: "[typeof add === 'function', add(1,2) === 3, add(3,3) === 6]"
    };
    this.clickHandler = this.clickHandler.bind(this);
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
        solution: this.state.solution,
        tests: this.state.tests
      },
      success: data => {
        var results = JSON.parse(data);
        console.log('success', results);
      },
      error: err => console.log(err)
    });
  }

  render () {
    return (
      <div>
        <SignUp/>
        <Login/>
        <AceEditor
          mode="javascript"
          theme={"cobalt"}
          width="50%" height="50vh"
          onChange={(event)=>(this.onChange(event))}
          value={this.state.solution}
        />
        <button onClick={this.clickHandler}>Submit</button>
        <h1>Code Fight Club</h1>
        <br/>
        <br/>
        <h3>We have one rule... don't talk about code fight club</h3>
      </div>
    );
  }
}

export default App
