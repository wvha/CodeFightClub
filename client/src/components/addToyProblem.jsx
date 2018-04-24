import React from 'react';
import $ from 'jquery';
//direct child of Admin

class AddToyProblems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          body: '',
          code: '',
          tests: '',
          params: ''
        }
    }

    submitToyProblem (toyProblem) { 
      let emptyState = { // on success clears the state of the input fields
            title: '',
            body: '',
            code: '',
            tests: '',
            params: ''
          };
      $.post('/admin/toyProblem', toyProblem)
      .done((data) => {
        console.log('success', data);
        this.setState(emptyState);
      })
      .fail((err) => {
        console.error('error', err);
      });
    }

    setter (prop) { //@param prop - sets the state of each of the input fields
      return (e) => {
        let state = {};
        newState[prop] = e.target.value;
        this.setState(state);
      }
    }

    render () {
        return (
            <div className="container fullh fullw column">
              <form className="container fullh fullw column">
                <div className="fullw">
                    <h5>Challenge Title</h5>
                    <input className="halfw" placeholder="Problem name" value={this.state.title} onChange={this.setter.call(this, 'title')}></input>
                </div>
                <div className="fullw">
                    <h5>Function Name</h5>
                    <input className="halfw" placeholder="Expected function name" value={this.state.code} onChange={this.setter.call(this, 'code')}></input>
                </div>
                <div className="fullw">
                    <h5>Parameters</h5>
                    <input className="halfw" placeholder="Expected function parameters as comma separated values" value={this.state.params} onChange={this.setter.call(this, 'params')}></input>
                </div>
                <div id="newPrompt" className="fullw">
                    <h5>Prompt</h5>
                    <textarea placeholder="Instructions for user" value={this.state.body} onChange={this.setter.call(this, 'body')} className="tp-text fullw"></textarea>
                </div>
                <div id="newTests" className="fullw">
                    <h5>Tests</h5>
                    <textarea
                    placeholder='Create tests as [{"input": "2,3" , "expected": "5"}, {"input": "4, 4", "expected": "8"}]'
                    onChange={this.setter.call(this, 'tests')}
                    value={this.state.tests}
                    className="tp-text fullw"
                    ></textarea>
                </div>
                <div className="container submit fullw">
                    <button type="Submit" onClick={() => this.submitToyProblem.call(this, this.state)}>Submit</button>
                </div>
              </form>
            </div>
        )
    }
}

export default AddToyProblems
