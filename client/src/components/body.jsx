import React from 'react';
import Prompt from './prompt.jsx';
import Admin from './admin.jsx';
import Leaderboard from './leaderboard.jsx';
//direct child of App

const Body = ({ view, isLoggedIn, username }) => (
  <div className="container fullw bg-main" id="body">
    { view === 'prompt' 
      ? <Prompt username={username} isLoggedIn={isLoggedIn} /> 
      : view === 'admin'
        ? <Admin /> 
        : <Leaderboard />}
  </div>
)


export default Body;
