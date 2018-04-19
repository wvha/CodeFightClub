import React from 'react';
import Challenge from './Challenge.jsx';
import $ from 'jquery';

class Prompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPrompt: true,
      prompt: {
        title: "Compete Against Hackers Around the World!",
        body: `Log in or sign up to start competing with developers around the world to find out who can solve toy problems the fastest! Check the leaderboards to see how you rank today!`,
        code: "var iAmAwesome = function() {\n\n};",
        tests: '[typeof iAmAwesome === "function", iAmAwesome(2,3) === 5]'
      },
    }
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
        tests: this.state.prompts.tests
      }
    }).done((res) => {
      console.log(res);
    });
  }

  updateSolution (e) {
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
          solve={this.updateSolution.bind(this)}
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