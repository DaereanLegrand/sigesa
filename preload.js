const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
    dialog: (title, message) => {
       ipcRenderer.send('dialog', title, message); 
    },
    showBarcode: (data) => {
        ipcRenderer.send('showBarcode', data);
    },
    reporte: () => {
        ipcRenderer.send('reporte');
    },
    showAllBarcodes: () => {
        ipcRenderer.send('showAllBarcodes');
    }
});
