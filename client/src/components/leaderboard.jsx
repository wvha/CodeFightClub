import React from 'react';
import $ from 'jquery';
//direct child of body

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderboard: [],
      leaderboardByDay: [],
      view: 'alltime',
    }
    this.handleViewChange = this.handleViewChange.bind(this);



  }

  componentDidMount () {
    $.get("/leaderboard")
    .done((data) => this.setState({ leaderboard: data }));

    $.get("/leaderboardByDay")
    .done((data) => this.setState({ leaderboardByDay: data}));
  }

  handleViewChange(event) {
    this.setState({view: event.target.value})
    console.log(event.target.value);
  }

  renderView() {
    const {view} = this.state;
    if (view === 'alltime') {
      return (
        this.state.leaderboard.map((user, key) => (
          <div className="user-score fullw" key={key}>
            <h3>{`${key+1}: ${user.username} --- solved ${user.score} problems`}</h3>
          </div>
        ))
      )
    } else if (view === 'day') {
      return (
        this.state.leaderboardByDay.map((user, key) => (
          <div className="user-score fullw" key={key}>
            <h3>{`${key+1}: ${user._id} --- solved ${user.count} problems`}</h3>
          </div>
        ))
      )
    }
  }

  render () {
    return (
      <div className="container column fullh fullw" id="leaderboard">
      <select name="text" onChange={this.handleViewChange}>
        <option value="alltime">All Time</option>
        <option value="day">Today</option>
      </select>
        {this.renderView()}

      </div>
    )
  }
}


export default Leaderboard;


