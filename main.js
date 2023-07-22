const { app, BrowserWindow } = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    win.loadFile("index.html");
};

app.on(
    "certificate-error",
    (event, webContents, url, error, certificate, callback) => {
        if (url.startsWith("https://localhost:8080")) {
            event.preventDefault();
            callback(true); // Bypass certificate error for localhost
        } else {
            callback(false); // Continue with other URLs' default certificate validation
        }
    }
);

app.whenReady().then(() => {
    createWindow();
});
