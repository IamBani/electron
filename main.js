
const { app, BrowserWindow } = require('electron')
const path = require('path')

const createIpcMain = require("./ipc/fullscreen")
// // 热加载
// try {
//   require('electron-reloader')(module,{});
// } catch (_) {}
let mainWindow;
function createWindow () {
  // 创建浏览器窗口
  mainWindow = new BrowserWindow({
    width: 1180,
    height: 780,
    frame: false,
    backgroundColor:'#fff',
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      contextIsolation:false,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  if(process.env.NODE_ENV === 'development'){
    console.log('init')
    // mainWindow.webContents.openDevTools()
    mainWindow.openDevTools()
    mainWindow.loadURL('http://localhost:3000')
  } else {
    mainWindow.loadFile(path.join(__dirname, 'dist', 'index.html'))
  }
  // 加载 index.html

  // 打开开发工具  // mainWindow.webContents.openDevTools()
}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow()
  createIpcMain(mainWindow)
  app.on('activate', function () {
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})