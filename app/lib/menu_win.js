var Menu = require('electron').Menu

//Electron
const electron = require('electron');
const app = electron.app;
const app_name = app.getName();
const app_version = app.getVersion();

var template = [{
    label: 'File',
    submenu: [{
        label: 'Hide ' + app_name,
        accelerator: 'Control+H',
        role: 'hide'
    }, {
        label: 'Hide Others',
        accelerator: 'Control+Shift+H',
        role: 'hideothers'
    }, {
        type: 'separator'
    }, {
        label: 'Quit',
        accelerator: 'Control+W',
        role: 'close'
    }]
}, {
    label: 'Edit',
    submenu: [{
        label: 'Undo',
        accelerator: 'Control+Z',
        role: 'undo'
    }, {
        label: 'Redo',
        accelerator: 'Shift+Control+Z',
        role: 'redo'
    }, {
        type: 'separator'
    }, {
        label: 'Cut',
        accelerator: 'Control+X',
        role: 'cut'
    }, {
        label: 'Copy',
        accelerator: 'Control+C',
        role: 'copy'
    }, {
        label: 'Paste',
        accelerator: 'Control+V',
        role: 'paste'
    }, {
        label: 'Select All',
        accelerator: 'Control+A',
        role: 'selectall'
    }]
}, {
    label: 'View',
    submenu: [
        {
            label: 'Back',
            accelerator: 'Backspace',
            click: function(item, focusedWindow) {
                if (focusedWindow && focusedWindow.webContents.canGoBack())
                focusedWindow.webContents.goBack();
                focusedWindow.webContents.reload();
            }
        }, {
            type: 'separator'
        }, {
            label: 'Reload',
            accelerator: 'F5',
            click: function(item, focusedWindow) {
                if (focusedWindow) focusedWindow.webContents.reload();
            }
        }, {
          label: 'Toggle Fullscreen',
          accelerator: 'F11',
          role: 'togglefullscreen'
        }
    ]
}, {
    label: 'Window',
    role: 'window',
    submenu: [{
        label: 'Minimize',
        accelerator: 'Control+M',
        role: 'minimize'
    }, {
        label: 'Close',
        accelerator: 'Control+W',
        role: 'close'
    }]
}, {
    label: 'Help',
    role: 'help',
    submenu: [{
        label: 'About Ionic-Creator',
        click: function() {
            require('electron').shell.openExternal("https://github.com/Meadowcottage/Ionic-Creator/releases/tag/" + app_version)
        }
    }, {
        label: 'View Ionic-Creator',
        click: function() {
            require('electron').shell.openExternal("https://creator.ionic.io/")
        }
    }, {
        type: 'separator'
    }, {
        label: 'Changelog',
        click: function() {
            require('electron').shell.openExternal("https://github.com/Meadowcottage/Ionic-Creator/releases/tag/" + app_version)
        }
    }]
}];

module.exports = Menu.buildFromTemplate(template)
