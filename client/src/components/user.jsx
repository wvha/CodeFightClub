import React from 'react';
//direct child of header

const User = function(props) {
  return (
    <span className="container">
      <span>{props.user.score}</span>
      {props.user.isAdmin ? <button id="admin" onClick={props.view === 'admin' ? props.changeView('prompt') : props.changeView('admin')}>{props.view === 'admin' ? 'Play' : 'Admin'}</button> : null}
      <button id="logout" onClick={props.logout}>Logout</button>
    </span>
  );
};

export default User;