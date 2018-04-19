import React from 'react';
import Prompt from './prompt.jsx';
import Challenge from './Challenge.jsx';
import $ from 'jquery';


class Body extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isPrompt: true,
      prompt: {
        title: "Compete Against Hackers Around the World!",
        funcName: "iAmAwesome",
        body: `Log in or sign up to start competing with developers around the world to find out who can solve toy problems the fastest! Check the leaderboards to see how you rank today!`,
        code: "var iAmAwesome = function() {\n\n};",
        tests: [ {input: '5, 6', expected: '11'}, {input: '3, 4', expected: '7'}, {input: '30, 30', expected: '60'} ]
      }
    };
  }

  componentWillMount() {
    $.ajax({
      method: 'GET',
      url: '/challenge:add',
      success: data => {
        let problem = JSON.parse(data);
        let prompt = this.state.prompt;
        prompt.funcName = problem.funcName;
        prompt.code = problem.initialCode;
        prompt.tests = problem.tests;
        this.setState(prompt);
      },
      error: err => {
        console.log(err);
      }
    });
  }

  joinQueue () {
    return (
      <button onClick={this.clickHandler}><strong>Join In!</strong></button>
    );
  }

  runCode () {
    return (
      <button onClick={this.clickHandler.bind(this)}><strong>Submit</strong></button>
    );
  }

  clickHandler (e) {
    if (this.state.isPrompt) {
      this.testSolution(e);
    } else {
      // TODO: send a get request to the server for a prompt
      this.testSolution(e);
    }
  }

  testSolution (e) {
    $.ajax({
      method: 'POST',
      url: '/challenge',
      data: {
        solution: this.state.prompt.code,
        tests: this.state.prompt.tests,
        funcName: this.state.prompt.funcName
      }
    }).done((res) => {
      console.log(JSON.parse(res));
    });
  }

  updateSolution (e) {
    let prompt = this.state.prompt;
    prompt.code = e;
    this.setState(prompt);
  }

  render () {
    return (
      <div className="container row" id="body">
        <div className="body container">
          <Challenge
          solution={this.state.prompt.code}
          solve={this.updateSolution.bind(this)}
          />
          <div className="container submit">
            { this.state.isPrompt ? this.runCode() : this.joinQueue() }
          </div>
        </div>
        <div></div>
        <div className="body">
          <Prompt prompt={this.state.prompt} />
        </div>
      </div>
    );
  }
}

export default Body;
