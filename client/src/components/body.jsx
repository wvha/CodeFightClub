import React from 'react';
import Prompt from './prompt.jsx';
import Admin from './Admin.jsx';


const Body = ({ view, isLoggedIn }) => (
  <div className="container" id="body">
    { view === 'prompt' ? <Prompt isLoggedIn={isLoggedIn} /> : <Admin /> }
  </div>
)


export default Body;
