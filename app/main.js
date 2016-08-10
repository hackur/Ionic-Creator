//Electron
const electron = require('electron');
const globalShortcut = electron.globalShortcut;
const browserWindow = electron.BrowserWindow;
const menu = electron.Menu;

//App Info
const app = electron.app;
const app_name = 'Ionic-Creator';
const app_title = 'Ionic Creator';
const app_version = '1.0.1';
const app_description = 'Electron web app for the Ionic creator.';

// Main App Window
let mainWindow

// Chooses titleBarStyle based on OS
var app_titleBarStyle;

app.on('ready', function createWindow() {
  // If OS is Darwin(MacOS)
  if (process.platform == 'darwin') {
    app_titleBarStyle = 'hidden-inset';
    menu.setApplicationMenu(require('./lib/menu_osx.js'));
  } else {
    app_titleBarStyle = 'default';
    menu.setApplicationMenu(require('./lib/menu_win.js'));
  }
  mainWindow = new browserWindow({
  title: app_title,
  titleBarStyle: app_titleBarStyle,
  movable: true,
  width: 1280,
  height: 720,
  fullscreenable: true,
  resizable: true,
  autoHideMenuBar: true
  })
  mainWindow.loadURL('file://' + __dirname + '/index.html')
  mainWindow.on('closed', function() {
    mainWindow = null
  })

  //Shortcut to reload the page.
  globalShortcut.register('CmdOrCtrl+R', () => {
    mainWindow.webContents.reload();
  })
  globalShortcut.register('CmdOrCtrl+Left', () => {
    mainWindow.webContents.goBack();
    mainWindow.webContents.reload();
  })

  mainWindow.on('app-command', (e, cmd) => {
    // Navigate the window back when the user hits their mouse back button
    if (cmd === 'browser-backward' && mainWindow.webContents.canGoBack()) {
      mainWindow.webContents.goBack()
    }
  })
})
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function() {
  if (mainWindow === null) {
    createWindow()
  }
})
