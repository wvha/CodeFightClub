import React from 'react';
import Challenge from './Challenge.jsx';
import $ from 'jquery';

class Prompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPrompt: false,
      prompt: {
        title: "Compete Against Hackers Around the World!",
        funcName: "",
        body: `Log in or sign up to start competing with developers around the world to find out who can solve toy problems the fastest! Check the leaderboards to see how you rank today!`,
        code: "var iAmAwesome = function() {\n\n};",
        tests: ''
      },
    }
  }

  joinQueue () {
    return (
      <button onClick={this.getPrompt.bind(this)}><strong>Join In!</strong></button>
    );
  }

  runCode () {
    return (
      <button onClick={this.testUserSolution.bind(this)}><strong>Submit</strong></button>
    );
  }

  testUserSolution (e) {
    $.ajax({
      method: 'POST',
      url: '/challenge',
      data: {
        solution: this.state.prompt.code,
        funcName: this.state.funcName,
        tests: this.state.prompt.tests
      }
    }).done((res) => {
      console.log(JSON.parse(res));
    });
  }

  getPrompt () {
    $.get('/randomChallenge')
      .done( data => {
        let challenge = JSON.parse(data);
        let prompt = this.state.prompt;
        prompt.title = challenge.title;
        prompt.body = challenge.body;
        prompt.funcName = challenge.funcName;
        prompt.code = `function ${challenge.funcName}(${challenge.params}) { \n\n }`;
        prompt.tests = challenge.tests;
        this.setState({ isPrompt: true });
        this.setState(prompt);
        //console.log(JSON.parse(data));
      })
      .fail( err => {
        console.error(err);
      })
  }

  updateUserSolution (e) {
    let prompt = this.state.prompt;
    prompt.code = e;
    this.setState(prompt);
  }

  render() {
    return (
      <div className="container row" id="prompt">
        <div className="body container">
          <Challenge
          solution={this.state.prompt.code}
          solve={this.updateUserSolution.bind(this)}
          />
          <div className="container submit">
            { this.state.isPrompt && this.props.isLoggedIn ? this.runCode() : this.joinQueue() }
          </div>
        </div>
        <div></div>
        <div className="body">
          <h1 id="prompt-title">{this.state.prompt.title}</h1>
          <p id="prompt-body">{this.state.prompt.body}</p>
        </div>
      </div>
    )
  }
}

export default Prompt;
