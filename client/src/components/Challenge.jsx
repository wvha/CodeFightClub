import React from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/theme/solarized_dark';
import 'brace/mode/javascript';

const Challenge = ({solution, solve}) => (
  <AceEditor
    mode="javascript"
    theme="solarized_dark"
    name="Editor"
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
    onChange={(e) => solve(e)}
    value={solution}
  />
)

export default Challenge;