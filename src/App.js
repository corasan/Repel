import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';
import NavBar from './components/NavBar'
import './styles/main.css'

class App extends Component {
  render() {
    const requireConfig = {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js',
      paths: {
        'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.10.1/min/vs/'
      }
    }

    return (
      <div id="app">
        <NavBar />

        <div id="content">
          <div id="editor">
            <MonacoEditor
              width="100%"
              height="600"
              language="javascript"
              value="// type your code..."
              requireConfig={requireConfig}
              theme="vs-dark"
            />
          </div>

          <div id="term">
          </div>
        </div>
      </div>
    )
  }
}

export default App;
