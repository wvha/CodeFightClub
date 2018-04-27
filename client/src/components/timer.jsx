import React, { Component } from 'react';

const Timer = (props) => {
  let timer;
  if (props.timer > 0 && props.view === 'waitingRoom') {
    timer = (
      <span className="container">
        <span>Next Fight In: </span>
        <button>{props.timer}</button>
      </span>
    );
  } else if (props.timer > 0) {
    timer = (
      <span className="container">
        <span>Next Fight In: </span>
        <button>{props.timer}</button>
        <button onClick={props.changeView('waitingRoom')}>Join Fight</button>
      </span>
    );
  } else {
    timer = (
      <span className="container">
        <span>Time Left: </span>
        <button>{props.gameTimer}</button>
      </span>
    );
  }

  return (
    <span className="container">
      {timer}
    </span>
  )
}

export default Timer;