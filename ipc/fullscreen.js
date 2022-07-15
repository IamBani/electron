const { ipcMain } = require('electron');



function createIpcMain (win) {
  ipcMain.on('fullscreen', (event, isFull) => {
    win.setFullScreen(isFull)
  })
  ipcMain.on('miniFullScreen', () => {
    win.minimize()
  })
}

module.exports = createIpcMain