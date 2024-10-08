const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke(`ping`)
});

contextBridge.exposeInMainWorld('darkMode', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
    system: () => ipcRenderer.invoke('dark-mode:system')
})

const { createRoot } = require('react-dom/client');

document.body.innerHTML = `<div id="app"></div>`;
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello from React</h1>)