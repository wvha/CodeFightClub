import React from 'react';
import $ from 'jquery';

class AddToyProblems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          body: '',
          code: '',
          tests: ''
        }
    }

    submitToyProblem (toyProblem) {
      let emptyState = {
            title: '',
            body: '',
            code: '',
            tests: ''
          };
      toyProblem.code = `function ${toyProblem.code} () {\n\n};`;
      $.post('/admin/toyProblem', toyProblem)
      .done((data) => {
        console.log('success', data);
        this.setState(emptyState);
      })
      .fail((err) => {
        console.error('error', err);
      });
    }

    setter (state) {
      return (e) => {
        let newState = {};
        newState[state] = e.target.value;
        this.setState(newState);
      }
    }

    render () {
        return (
            <div className="container" id="newToyProblem">
              <form className="container" id="toyProblemForm">
                <div>
                    <h5>Title</h5>
                    <input placeholder="Problem name" value={this.state.title} onChange={this.setter.call(this, 'title')}></input>
                </div>
                <div>
                    <h5>Function Name</h5>
                    <input placeholder="Expected function name" value={this.state.code} onChange={this.setter.call(this, 'code')}></input>
                </div>
                <div id="newPrompt">
                    <h5>Prompt</h5> 
                    <textarea placeholder="Instructions for user" value={this.state.body} onChange={this.setter.call(this, 'body')}></textarea>
                </div>
                <div id="newTests">
                    <h5>Tests</h5> 
                    <textarea 
                    placeholder="Create tests as `[{input: '2,3' , expected: '5'}, {input: '4, 4', expected: '8'}]`"
                    onChange={this.setter.call(this, 'tests')}
                    value={this.state.tests}
                    ></textarea>
                </div>
                <div className="container submit">
                    <button type="button" onClick={() => this.submitToyProblem.call(this, this.state)}>Submit</button>
                </div>
              </form>
            </div>
        )
    }
}

export default AddToyProblems