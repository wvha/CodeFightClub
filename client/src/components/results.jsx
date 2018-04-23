import React from 'react';

const Results = ({results}) => {
    return (
      <div className="body">
        <h1>Results</h1>
        {results.map((val, key) => {
          if (val.status === 'pass') {
              return (<pass key={key} results={val}/>)
          } else {
              return (<fail key={key} results={val}/>)
          }
        })}
      </div>
    )
}

const fail = ({results}) => (
  <div className="fail">
    <h5>{`failed test with inptuts ${results.inputs}, expected ${results.expected}, but got ${results.actual}`}</h5>
  </div>
);

const pass = ({results}) => (
    <div className="pass">
      <h5>{`Passed with ${results.inputs}`}</h5>
    </div>
);

export default Results