import React from 'react';

const User = function(props) {
  return (
    <span>
      <span>{props.user.username}</span>
      <span>{props.user.score}</span>
    </span>
  );
};

export default User;