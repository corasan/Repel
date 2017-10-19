const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const glob = require('glob')
const fs = require('graceful-fs')

let win

function createWindow() {
  loadDemos()
  win = new BrowserWindow()
  win.maximize()

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'public/index.html'),
    protocol: 'file:',
    slashes: true,
  }))

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
