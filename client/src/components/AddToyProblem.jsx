import React from 'react';

class AddToyProblems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div className="container" id="newToyProblem">
              <form className="container" id="toyProblemForm">
                <div>
                    <h5>Title</h5>
                    <input placeholder="Problem name"></input>
                </div>
                <div>
                    <h5>Function Name</h5>
                    <input placeholder="Expected function name"></input>
                </div>
                <div id="newPrompt">
                    <h5>Prompt</h5> 
                    <textarea placeholder="Instructions for user"></textarea>
                </div>
                <div id="newTests">
                    <h5>Tests</h5> 
                    <textarea placeholder="Create tests as `[{input: '2,3' , expected: '5'}, {input: '4, 4', expected: '8'}]`"></textarea>
                </div>
                <div className="container submit">
                    <button>Submit</button>
                </div>
              </form>
            </div>
        )
    }
}

export default AddToyProblems