const { ipcRenderer } = require('electron')
const saveFile = require('../../utils/saveFile')
const fs = require('graceful-fs')

const runScript = document.getElementById('run-script')
const repelDir = `${process.env.HOME}/Repel/scripts`

runScript.addEventListener('click', () => {
  const content = window.editor.getValue()

  saveFile('file', content)
  window.ptyProcess.write(`vm.runInNewContext(fs.readFileSync('${repelDir}/file.js', 'utf8'))\r`)
  // ipcRenderer.send('asynchronous-message', { filename: 'filename', type: 'runScript' })
})
