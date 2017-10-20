import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';
import NavBar from './components/NavBar'
import './styles/main.css'

class App extends Component {
  state = {
    code: '',
  }

  onChange = (e) => {
    this.setState({ code: e.event.value })
  }

  render() {
    const requireConfig = {
      url: 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js',
      paths: {
        'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.10.1/min/vs/'
      }
    }

    return (
      <div id="app">
        <NavBar code={this.state.code} />

        <div id="content">
          <div id="editor">
            <MonacoEditor
              language="javascript"
              value={this.state.code}
              requireConfig={requireConfig}
              // theme="vs-dark"
              onChange={this.onChange}
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
