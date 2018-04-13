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
      solution: ""
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
        solution: this.state.solution
      }
    }).done((res) => {
      console.log(res);
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
