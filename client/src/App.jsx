import React, { Component } from 'react';
import Modal from 'react-modal';
import AceEditor from 'react-ace';
import brace from 'brace';
import $ from 'jquery';
import 'brace/theme/cobalt';
import 'brace/mode/javascript';
// import SignUp from './components/signup.jsx';
// import Login from './components/login.jsx';
import Challenge from './components/Challenge.jsx';
import Header from './components/header.jsx';
import Body from './components/body.jsx';
import Footer from './components/footer.jsx';

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
      <div className="container" id="main">
        {/* <h1>Code Fight Club</h1> */}
        <Header username={this.state.username} />
        <Body change={this.onChange} />
        <Footer />
        {/* {this.state.username ? this.state.username : <h2><SignUp setUsername={this.setUsername}/> <Login/></h2>} */}
        {/* <Challenge solution={this.state.solution} change={this.onChange}/>
        <button onClick={this.clickHandler}>Submit</button> */}
        {/* <br/><br/>
        <h3>We have one rule... don't talk about code fight club</h3> */}
      </div>
    );
  }
}

export default App
