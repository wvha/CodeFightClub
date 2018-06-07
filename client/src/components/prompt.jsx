import React from 'react';
import Challenge from './challenge.jsx';
import $ from 'jquery';
import Results from './results.jsx';
//direct child of body

class Prompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isComplete: false,
      prompt: {
        title: "Compete Against Hackers Around the World!",
        funcName: "",
        body: `Log in or sign up to start competing with developers around the world to find out who can solve toy problems the fastest! Check the leaderboards to see how you rank today!`,
        code: "var iAmAwesome = function() {\n\n};",
        tests: ''
      },
      view: "prompt",
      results: ""
    }

    if (this.props.problem) {
      
      let p = this.props.problem;
      let prompt = this.state.prompt;

      console.log(p, prompt);

      prompt.title = p.title;
      prompt.body = p.body;
      prompt.funcName = p.funcName;
      prompt.code = `function ${p.funcName}(${p.params}) {\n\n}`;
      prompt.tests = p.tests;
      
      this.setState({
        view: 'prompt',
        isComplete: false,
        prompt: prompt,
        results: ''
      });

    }
  }

  joinQueue () {
    return (
      <button onClick={this.getPrompt.bind(this)}><strong>{this.state.isComplete ? "Play Again" : "Join In!"}</strong></button>
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
      this.setState({
        results: JSON.parse(res),
        view: "results"
      });
      var array = JSON.parse(res);
      var passing = true;
      array.forEach((test) => {
        if (test.status === 'fail') {
          passing = false;
        }
      });
      if (passing) {
        this.setState({ //updates the score of the user if all tests pass
          isComplete: true
        });
        $.ajax({
          method: 'PATCH',
          url: `/users:${this.props.username}`
        });
        $.ajax({
          method: 'POST',
          url: `/users:${this.props.username}`
        });
      }
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
        prompt.code = `function ${challenge.funcName}(${challenge.params}) {\n\n}`;
        prompt.tests = challenge.tests;
        this.setState({
          view: 'prompt',
          isComplete: false,
          prompt: prompt,
          results: ''
        });
      })
      .fail( err => {
        console.error(err);
      })
  }

  updateUserSolution (e) { //setting the property of the prompt object to setState
    let prompt = this.state.prompt;
    prompt.code = e;
    this.setState(prompt);
  }

  renderButton() {
    if (this.state.view === 'prompt') {
      return (
        <div className="container fullw column" id="promptViewContent">
          <h1 id="prompt-title">{this.state.prompt.title}</h1>
          <p id="prompt-body">{this.state.prompt.body}</p>
        </div>
      )
    } else if (this.state.view === 'results') {
      return (
        <Results results={this.state.results}/>
      )
    }
  }

  render() {
    return (
      <div className="container row fullh fullw">
        <div className="body container column">
          <Challenge
          solution={this.state.prompt.code}
          solve={this.updateUserSolution.bind(this)}
          />
          <div className="container submit fullw">
            { this.props.isLoggedIn && !this.state.isComplete && !!this.state.prompt.funcName ? this.runCode() : this.joinQueue() }   
          </div>
        </div>
        <div></div>
        <div className="body container column" id="promptView">
          {this.state.results.length === 0 ? null : <div className="container row fullw" id="promptViewButtons">
            <button type="button" onClick={() => this.setState({view: 'prompt'})}>Prompt</button>
            <button type="button" onClick={() => this.setState({view: 'results'})}>Results</button>
          </div>}
            {this.renderButton()}
        </div>
      </div>
    )
  }
}

export default Prompt;
