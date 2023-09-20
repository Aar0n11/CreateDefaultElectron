const {
    app,
    BrowserWindow
} = require("electron");

const projSettings = {
    size: [800, 800],
    file: './index.html'
}
app.whenReady().then(() => {

    // Create a new window
    let window = new BrowserWindow({
        width: projSettings.size[0],
        height: projSettings.size[1]
    });

    window.loadFile("./index.html");
})