import React from 'react';
import $ from 'jquery';
//direct child of body

class Problems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: []
    }
  }

  componentDidMount () {
    $.get("/problems")
    .done((data) => this.setState({ problems: data }))
  }

  render () {
    return (
      <div className="container column fullh fullw" id="leaderboard">
        {this.state.problems.map((problem, key) => {
            return (
              <div className="user-score fullw" key={key}>
                <h3 onClick={() => this.props.changeProblem(problem)}>{`${key+1}: ${problem.title}`}</h3>
              </div>
          )
        })}
      </div>
    )
  }

}

export default Problems;
