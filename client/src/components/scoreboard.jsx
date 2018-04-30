import React, { Component } from 'react'
import PropTypes from 'prop-types'

function suffix(i) {
  var j = i % 10,
      k = i % 100;
  if (j == 1 && k != 11) {
      return i + "st";
  }
  if (j == 2 && k != 12) {
      return i + "nd";
  }
  if (j == 3 && k != 13) {
      return i + "rd";
  }
  return i + "th";
}

const Scoreboard = ({ scoreboard = [] }) => {
  console.log(scoreboard);
  return (
    <div>
      {scoreboard.map((user, i) => <p>{ `${suffix(i)}. ${user}` }</p>) }
    </div>
  );

};

Scoreboard.PropTypes = {
  scoreboard: PropTypes.array
};

export default Scoreboard
