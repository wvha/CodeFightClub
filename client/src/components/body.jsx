import React from 'react';
import Prompt from './prompt.jsx';
import Challenge from './Challenge.jsx';


class Body extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      prompt: {
        title: "Compete Against Hackers Around the World!",
        body: `Log in or sign up to start competing with developers around the world to find out who can solve toy problems the fastest! Check the leaderboards to see how you rank today!`,
        solution: "var iAmAwesome = function() {\n\n};"
      }
    };
  }

  render () {
    return (
      <div className="container row" id="body">
        <div className="body container">
          <Challenge solution={this.state.prompt.solution} change={this.onChange}/>
          <div className="container submit">
            <button onClick={this.clickHandler}>Submit</button>
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