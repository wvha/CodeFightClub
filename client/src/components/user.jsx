import React from 'react';

const User = function(props) {
  return (
    <span className="container">
      <span>{props.user.username}</span>
      <span>{props.user.score}</span>
      {props.user.isAdmin ? <button id="admin" onClick={props.renderAdmin}>Admin</button> : null}
      <button id="logout" onClick={props.logout}>Logout</button>
    </span>
  );
};

export default User;