const { app, BrowserWindow } = require('electron')
const path = require('path')
const glob = require('glob')
const fs = require('graceful-fs')

let win

function createWindow() {
  loadDemos()
  win = new BrowserWindow({ webPreferences: { nodeIntegration: false } })
  win.maximize()

  win.loadURL('http://localhost:3000')

  if (process.env.REPEL_BUILD !== 'production') {
    win.webContents.openDevTools()
  }

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

function loadDemos() {
  const files = glob.sync(path.join(__dirname, 'processes/main/*.js'))
  files.forEach((file) => {
    require(file)
  })
  // autoUpdater.updateMenu()
}
