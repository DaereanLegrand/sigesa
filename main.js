const { app, BrowserWindow, dialog, ipcMain } = require("electron");
var jsbarcode = require("jsbarcode");
const path = require("path");
const bwipjs = require("bwip-js");


let win;

function createDialogInfo(event, title, message) {
    dialog.showMessageBox({
        type: "info",
        title: title,
        message: message,
        buttons: ["OK"],
    });
}

function showBarcode(event, data) {
    const createWindow2 = () => {
        let win2 = new BrowserWindow({
            width: 400,
            height: 400,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
            },
        });

        win2.loadFile("barcode.html");
        win2.webContents.on("did-finish-load", () => {
           win2.webContents.executeJavaScript(`
            createBarcode("${data}");`);
        });
    };
    createWindow2();
}

function showReporte(event) {
     const createWindow3 = () => {
        let win3 = new BrowserWindow({
            width: 800,
            height: 800,
        });

        win3.loadFile("reporte.html");
    };

    createWindow3();
   
}

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            preload: path.join(__dirname, "preload.js"),
        },
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
    ipcMain.on("dialog", createDialogInfo);
    ipcMain.on("showBarcode", showBarcode);
    ipcMain.on("reporte", showReporte);
    createWindow();
});
