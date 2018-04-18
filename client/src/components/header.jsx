import React from 'react';
import SignUp from './signup.jsx';
import Login from './login.jsx';
import User from './user.jsx';

const Header = function(props) {
  return (
    <header id="header" className="container row">
      <div id="header-filler"></div>
      <div id="logo">
        <img src="BrandonStinks.png" alt="BrandonStinks" height="90px" width="180px" />
      </div> 
        { props.user.username !== null
          ? <div className="container row" id="user"><User user={props.user} /></div>
          : <div className="container row" id="user"><SignUp setUsername={props.updateUser} /> <Login setUsername={props.updateUser} /></div> }
    </header>
  );
}

export default Header;