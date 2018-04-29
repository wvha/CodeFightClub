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
    body = <GameRoom username={props.username} isLoggedIn={props.isLoggedIn} />;
  } else if (view === 'admin') {
    body = <Admin />;
  } else if (view === 'leaderboard') {
    body = <Leaderboard />;
  } else if (view === 'waitingRoom') {
    body = <WaitingRoom username={ props.username }/>
  } else if (view === 'problems') {
    body = <Problems />
  } else if (view === 'gameRoom') {
    body = (
      <GameRoom 
        scoreboard={ props.scoreboard }
        messages={ props.messages }
        userMessageChat={ props.userMessageChat }
        handleInputChangeChat={ props.handleInputChangeChat }
        handleSubmitChat={ props.handleSubmitChat }
      />
     )
  }

  return (
    <div className="container fullw bg-main" id="body">
      {body}
    </div>
  )
}

export default Body;
