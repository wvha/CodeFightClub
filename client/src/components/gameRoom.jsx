import React from 'react';
import Challenge from './challenge.jsx';
import $ from 'jquery';
import Results from './results.jsx';
import { subscribeToGameSocket, gameComplete, joinWaitingRoom } from '../socket/api.jsx';
import ChatBox from './chatBox.jsx';
import Scoreboard from './scoreboard.jsx';
//direct child of body

class GameRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isComplete: false,
      prompt: {},
      view: "prompt",
      results: ""
    }
    this.handleTestResponse = this.handleTestResponse.bind(this);
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
  }).done(this.handleTestResponse);

  }

  handleTestResponse (res) {
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
      console.log('passing', passing);
      if (passing) {
        this.setState({ //updates the score of the user if all tests pass
          isComplete: true
        });

        // this is where we tell the socket we pas
        console.log('game complete')
        gameComplete();

        $.ajax({
          method: 'PATCH',
          url: `/users:${this.props.username}`
        });
      }
    }

  getPrompt () {
    $.get('/randomChallenge')
      .done( data => {
        let challenge = JSON.parse(data);
        challenge =                                                                              
        // this is hardcoded challenge
        {"_id":"5adeac2c3ddeb49ecc359bd3","title":"RETURN THIS","body":"Return this exact string: \"BrandonVcantHang\"","funcName":"returnThis","params":"","__v":0,"tests":[{"input":"","expected":"'BrandonVcantHang'","_id":"5adeac2c3ddeb49ecc359bd4"}]};
        
        
        
        
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
    } else if (this.state.view === 'scoreboard') {
      return <Scoreboard scoreboard={this.props.scoreboard}/>
    } else if (this.state.view === 'chat') {
      return (
        <ChatBox 
          messages={ this.props.messages }
          userMessage={ this.props.userMessageChat }
          handleInputChange={ this.props.handleInputChangeChat }
          handleSubmit={ this.props.handleSubmitChat }
        />
      );
    }
  }

  componentWillMount() { 
    this.getPrompt();
  }

  render() {
    return (
      <div style={{display: 'flex', 'align-items': 'stretch'}}>
        <div style={{flex: 10}}>
          <Challenge
          solution={this.state.prompt.code}
          solve={this.updateUserSolution.bind(this)}
          />
          <div className="">
            {this.runCode()}   
          </div>
        </div>
        <div style={{flex: 7}} id="promptView">
          <div className="" id="promptViewButtons">
            <button type="button" onClick={() => this.setState({view: 'prompt'})}>Prompt</button>
            { this.state.results !== '' 
              ? <button type="button" onClick={() => this.setState({view: 'results'})}>Results</button>
              : undefined
            }
            { this.props.scoreboard 
              ? <button type="button" onClick={() => this.setState({view: 'scoreboard'})}>Scoreboard</button>
              : undefined }
            <button type="button" onClick={() => this.setState({view: 'chat'})}>Chat</button>
          </div>
            {this.renderButton()}
        </div>
      </div>
    )
  }
}

export default GameRoom;