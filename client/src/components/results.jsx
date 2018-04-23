import React from 'react';

const Results = ({results}) => {
    return (
      <div className="container" id="results">
        <h1>Results</h1>
        {results.map((val, key) => {
          if (val.status === 'pass') {
              return (<Pass key={key} results={val}/>)
          } else {
              return (<Fail key={key} results={val}/>)
          }
        })}
      </div>
    )
}

const Fail = ({results}) => (
  <div className="fail">
    <h5>{`failed test with inptuts ${results.inputs}, expected ${results.expected}, but got ${results.actual}`}</h5>
  </div>
);

const Pass = ({results}) => (
    <div className="pass">
      <h5>{`Passed with ${results.inputs}`}</h5>
    </div>
);

export default Results