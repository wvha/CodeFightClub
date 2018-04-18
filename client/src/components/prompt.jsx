import React from 'react';

const Prompt = function(props) {
  return (
    <div>
      <h1 id="prompt-title">{props.prompt.title}</h1>
      <p id="prompt-body">{props.prompt.body}</p>
    </div>
  );
}

export default Prompt;