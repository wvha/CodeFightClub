import React from 'react';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderboard: []
    }
  } 

  componentDidMount () {
    $.get("/leaderbord")
    .done((data) => this.setState({ leaderboard: data }))
  }

  render () {
    return (
      <div className="container">
        {this.state.leaderboard.map((user, key) => {
          return (
            <div className="user" key={key}> 
              <h3>{`${user.username} has a score of ${user.score}`}</h3>
            </div>
          )
        })} 
      </div>
    )
  }
}


export default Leaderboard;
    

