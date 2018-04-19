import React from 'react';

class AddToyProblems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <span>
              <h1>Add a New Toy Problem</h1>
              Name: <input></input>
              Prompt: <input></input>
              Function Stub: <input></input>
            </span>
        )
    }
}

export default AddToyProblems