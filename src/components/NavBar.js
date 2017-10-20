import React, { Component } from 'react'

class NavBar extends Component {
  runCode = () => {
    ipcRenderer.send('run-code', { filename: 'filename', type: 'runScript' })
  }

  render() {
    return (
      <div className="navbar">
        <div className="user-actions">
          <a>
            <i className="fa fa-cog fa-2x" aria-hidden="true"></i>
          </a>
          <a>
            <i className="fa fa-floppy-o fa-2x" aria-hidden="true"></i>
          </a>
          <a>
            <i className="fa fa-cloud-upload fa-2x" aria-hidden="true"></i>
          </a>
          <a>
            <i className="fa fa-trash fa-2x" aria-hidden="true"></i>
          </a>
          <a>
            <i className="fa fa-play-circle-o fa-2x" aria-hidden="true" id="run-script"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default NavBar
