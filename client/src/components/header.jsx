import React from 'react';
import SignUp from './signup.jsx';
import Login from './login.jsx';

const Header = function(props) {
  return (
    <header id="header" className="container row">
      <div id="header-filler"></div>
      <div id="logo">
        {/* <div> */}
          <img src="BrandonStinks.png" alt="BrandonStinks" height="90px" width="180px" />
        {/* </div> */}
      </div>
            
        {props.username ? <div className="container row" id="user">props.username</div> : <div className="container row" id="user"><SignUp setUsername={props.setUsername}/> <Login/></div>}
    </header>
  );
}

export default Header;