const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
    dialog: (title, message) => {
       ipcRenderer.send('dialog', title, message); 
    }
});
