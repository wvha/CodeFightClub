import React from 'react';
import Prompt from './prompt.jsx';
import Challenge from './Challenge.jsx';
import $ from 'jquery';


class Body extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isPrompt: false,
      prompt: {
        title: "Compete Against Hackers Around the World!",
        body: `Log in or sign up to start competing with developers around the world to find out who can solve toy problems the fastest! Check the leaderboards to see how you rank today!`,
        code: "var iAmAwesome = function() {\n\n};",
        tests: ["typeof iAmAwesome"]
      }
    };
  }

  getPrompt () {
    $.get('/challenges')
      .done(data => console.log(Object.keys(data)))
      .fail(err => console.log(`You suck: ${err}` ));
  }

  updateCode (e) {
    const prompt = this.state.prompt;
    prompt.code = e;
    this.setState(prompt);
  }
  
  testCode (e) {
    const prompt = this.state.prompt;
    $.ajax({
      method: 'POST',
      url: '/challenge',
      data: {
        solution: prompt.code,
        tests: prompt.tests
      }
    }).done((res) => {
      console.log(res);
    });
  }
  
  renderJoinButton () {
    return (
      <button onClick={this.getPrompt.bind(this)}><strong>Join In!</strong></button>
    );
  }

  renderRunButton () {
    return (
      <button onClick={this.testCode.bind(this)}><strong>Run Code</strong></button>
    );
  }

  render () {
    return (
      <div className="container row" id="body">
        <div className="body container">
          <Challenge solution={this.state.prompt.code} solve={this.updateCode.bind(this)} />
          <div className="container submit">
            { this.state.isPrompt ? this.renderRunButton() : this.renderJoinButton() }
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