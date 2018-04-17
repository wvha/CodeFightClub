import React from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/theme/cobalt';
import 'brace/mode/javascript';

const Challenge = ({solution, change}) => (
    <AceEditor 
    mode="javascript"
    theme={"cobalt"}
    width="50%" height="50vh"
    onChange={(event)=>(change(event))}
    value={solution}
  />
)

export default Challenge