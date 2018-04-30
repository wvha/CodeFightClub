// import React from 'react';
import AddToyProblem from './addToyProblem.jsx';
//direct child of body

class Admin extends React.Component {
    constructor(props) {
      super(props);
      this.state ={
        view: ''
      }
    }
   
    viewSetter (view) {
      this.setState({ view: view });
    }

    renderView() {
      if (this.state.view === 'Add Toy Problem') {
          return <AddToyProblem />
      } else if (this.state.view === '') {
          return null;
      }
    }

    render () {
        return (
          <div className="container row fullw fullh">
            <div className="container fullh" id="admin-buttons">
                <button type="button" onClick={()=>this.viewSetter('Add Toy Problem')}>Add Toy Problems</button>
            </div>
            <div className="container fullh column" id="admin-body">
              <div id="admin-title">
                <h1>{this.state.view}</h1>
              </div>
              <div id="admin-content" className="container">
                {this.renderView()}
              </div>
            </div>
          </div>
        )
    }
}

export default Admin