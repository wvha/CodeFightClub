import React from 'react';
import Prompt from './prompt.jsx';
import Admin from './admin.jsx';
import Leaderboard from './leaderboard.jsx';
import Problems from './problems.jsx';
//direct child of App

const Body = ({ view, isLoggedIn, username, changeProblem, problem }) => (
  <div className="container fullw bg-main" id="body">
    { view === 'prompt' 
      ? <Prompt username={username} isLoggedIn={isLoggedIn} problem={problem}/> 
      : view === 'admin'
        ? <Admin /> 
        : view === 'leaderboard'
        ? <Leaderboard />
        : <Problems changeProblem={changeProblem} />
      }
  </div>
)


export default Body;
