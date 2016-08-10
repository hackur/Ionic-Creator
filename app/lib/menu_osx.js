var Menu = require('electron').Menu

//Electron
const electron = require('electron');
const app = electron.app;
const app_name = app.getName();
const app_version = app.getVersion();

var template = [{
    label: 'Application',
    submenu: [{
          label: 'Hide ' + app_name,
        accelerator: 'Command+H',
        role: 'hide'
    }, {
        label: 'Hide Others',
        accelerator: 'Command+Shift+H',
        role: 'hideothers'
    }, {
        type: 'separator'
    }, {
        label: 'Quit',
        accelerator: 'Command+Q',
        click: function() {
            app.quit();
        }
    }]
}, {
    label: 'Edit',
    submenu: [{
        label: 'Undo',
        accelerator: 'Cmd+Z',
        role: 'undo'
    }, {
        label: 'Redo',
        accelerator: 'Shift+Cmd+Z',
        role: 'redo'
    }, {
        type: 'separator'
    }, {
        label: 'Cut',
        accelerator: 'Cmd+X',
        role: 'cut'
    }, {
        label: 'Copy',
        accelerator: 'Cmd+C',
        role: 'copy'
    }, {
        label: 'Paste',
        accelerator: 'Cmd+V',
        role: 'paste'
    }, {
        label: 'Select All',
        accelerator: 'Cmd+A',
        role: 'selectall'
    }]
}, {
    label: 'View',
    submenu: [
        {
            label: 'Back',
            accelerator: 'Cmd+Left',
            click: function(item, focusedWindow) {
                if (focusedWindow) focusedWindow.webContents.goBack();
                focusedWindow.webContents.reload();
            }
        }, {
            type: 'separator'
        }, {
            label: 'Reload',
            accelerator: 'Cmd+R',
            click: function(item, focusedWindow) {
                if (focusedWindow) focusedWindow.webContents.reload();
            }
        }, {
          label: 'Toggle Fullscreen',
          accelerator: 'Cmd+F',
          role: 'togglefullscreen'
        }
    ]
}, {
    label: 'Window',
    role: 'window',
    submenu: [{
        label: 'Minimize',
        accelerator: 'Cmd+M',
        role: 'minimize'
    }, {
        label: 'Close',
        accelerator: 'Cmd+W',
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
