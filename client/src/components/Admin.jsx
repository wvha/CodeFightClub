import React from 'react';
import AddToyProblem from './AddToyProblem.jsx';

class Admin extends React.Component {
    constructor(props) {
      super(props);
      this.state ={
        view: 'default'
      }
    }
   
    viewSetter (view) {
      this.setState({ view: view });
    }

    renderView() {
      if (this.state.view === 'addToyProblem') {
          return <AddToyProblem />
      } else if (this.state.view === 'default') {
          return null;
      }
    }

    render () {
        return (
          <div className="container row" id="admin">
            <div className="container" id="admin-buttons">
                <button onClick={()=>this.viewSetter('addToyProblem')}>Add Toy Problems</button>
            </div>
            <div className="container" id="admin-body">
              {this.renderView()}
            </div>
          </div>
        )
    }
}

export default Admin