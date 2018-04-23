import React from 'react';
import Prompt from './prompt.jsx';
import Admin from './Admin.jsx';



const Body = ({ view, isLoggedIn, username }) => (
  <div className="container" id="body">
    { view === 'prompt' ? <Prompt username={username} isLoggedIn={isLoggedIn} /> : <Admin /> }
  </div>
)


export default Body;
