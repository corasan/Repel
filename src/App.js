import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';

class App extends Component {
  render() {
    const requireConfig = {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js',
      paths: {
        'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.10.1/min/vs/'
      }
    }

    return (
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        value="// type your code..."
        requireConfig={requireConfig}
      />
    )
  }
}

export default App;
