import React from 'react';
import Prompt from './prompt.jsx';
import Challenge from './Challenge.jsx';


class Body extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isPrompt: false,
      prompt: {
        title: "Compete Against Hackers Around the World!",
        body: `Log in or sign up to start competing with developers around the world to find out who can solve toy problems the fastest! Check the leaderboards to see how you rank today!`,
        solution: "var iAmAwesome = function() {\n\n};"
      }
    };
  }

  joinQueue () {
    return (
      <button onClick={this.clickHandler}><strong>Join In!</strong></button>
    );
  }

  runCode () {
    return (
      <button onClick={this.clickHandler}><strong>Submit</strong></button>
    );
  }

  clickHandler () {
    if (this.state.isPrompt) {
      // TODO: send a post request to the server for testing
    } else {
      // TODO: send a get request to the server for a prompt
    }
  }

  updateSolution () {
    // TODO: update solution 
  }

  render () {
    return (
      <div className="container row" id="body">
        <div className="body container">
          <Challenge solution={this.state.prompt.solution} solve={this.updateSolution} />
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