import React from 'react';
import Prompt from './prompt.jsx';
import Admin from './admin.jsx';
import Leaderboard from './leaderboard.jsx';
import WaitingRoom from './waitingRoom.jsx';
import Problems from './problems.jsx';
import GameRoom from './gameRoom.jsx';
//direct child of App

const Body = (props) => {
  let body;
  const view = props.view;
  
  if (view === 'prompt') {
    // hacky
    body = (
      <GameRoom 
        username={ props.username } 
        isLoggedIn={ props.isLoggedIn } 
        messages={ props.messages }  
        handleInputChangeChat={ props.handleInputChangeChat }
        handleSubmitChat={ props.handleSubmitChat }
        userMessageChat={ props.userMessage }
      />

    );
  
  } else if (view === 'admin') {
    body = <Admin />;
  
  } else if (view === 'leaderboard') {
    body = <Leaderboard />;
  
  } else if (view === 'waitingRoom') {
    body = (
      <WaitingRoom 
        username={ props.username }
        messages={ props.messages }
        handleInputChangeChat={ props.handleInputChangeChat }
        handleSubmitChat={ props.handleSubmitChat }
        userMessageChat={ props.userMessage }
      />
    )
  } else if (view === 'problems') {
    body = (
      <Problems changeProblem={props.changeProblem}/>
    )
  
  } else if (view === 'gameRoom') {
    body = (
      <GameRoom 
        username={ props.username }
        scoreboard={ props.scoreboard }
        messages={ props.messages }
        userMessageChat={ props.userMessage }
        handleInputChangeChat={ props.handleInputChangeChat }
        handleSubmitChat={ props.handleSubmitChat }
      />
    )
  } else if (view === 'singleProblem') {
    body = (
      <Prompt username={props.username} isLoggedIn={props.isLoggedIn} problem={props.problem}/>
    )
  }

  return (
    <div className="fullw" style={{height: 'calc(100% - 190px)'}}>
      {body}
    </div>
  )
}

export default Body;
