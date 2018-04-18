import React from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/theme/solarized_dark';
import 'brace/mode/javascript';

const Challenge = ({solution, solve}) => (
  <AceEditor
    mode="javascript"
    theme="solarized_dark"
    name="blah2"
    fontSize={20}
    showPrintMargin={true}
    showGutter={true}
    highlightActiveLine={true}
    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: false,
      enableSnippets: false,
      showLineNumbers: true,
      tabSize: 2,
      blockScrolling: Infinity
    }}
    height="90%"
    width="100%"
    onChange={(event)=>solve(event)}
    value={solution}
  />
)

export default Challenge