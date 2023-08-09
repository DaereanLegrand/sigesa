const { app, BrowserWindow, dialog, ipcMain } = require("electron");
const path = require("path");

let win;

function createDialogInfo(event, title, message) {
   dialog.showMessageBox({
        type: 'info',
        title: title, 
        message: message,
        buttons: ['OK']
    });
}

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            preload: path.join(__dirname, "preload.js")
        }
    });

    win.loadFile("index.html");
};

app.on(
    "certificate-error",
    (event, webContents, url, error, certificate, callback) => {
        if (url.startsWith("https://localhost:8080")) {
            event.preventDefault();
            callback(true); 
        } else {
            callback(false); 
        }
    }
);

app.whenReady().then(() => {
    ipcMain.on('dialog', createDialogInfo);
    createWindow();
});
