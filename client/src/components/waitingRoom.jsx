import React, { Component } from 'react';
import { exitWaitingRoom, joinWaitingRoom } from '../socket/api.jsx';

class WaitingRoom extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    joinWaitingRoom({username: this.props.username});
  }

  componentWillUnmount() {
    exitWaitingRoom();
  }
  render() {
    return (
      <div>
        in waiting room
      </div>
    )
  }
}

export default WaitingRoom;