const { ipcRenderer } = require('electron')

const save = document.getElementById('save-file')

module.exports = function (filename, content) {
  save.addEventListener('click', () => {
    ipcRenderer.send('asynchronous-message', { filename, content, type: 'saveBtn' })
  })
}
