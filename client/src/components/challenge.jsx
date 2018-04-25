import React from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/theme/solarized_dark';
import 'brace/mode/javascript';
//direct child of Prompt

const Challenge = ({solution, solve}) => (
  <AceEditor
    mode="javascript"
    theme="solarized_dark"
    name="Editor"
    showPrintMargin={true}
    showGutter={true}
    highlightActiveLine={true}
    editorProps={{
      $blockScrolling: true
    }}
    setOptions={{
      tabSize: 2
    }}
    onChange={(e) => solve(e)}
    value={solution}
  />
)

export default Challenge;
