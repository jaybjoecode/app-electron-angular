// ELECTRON
// npm install -g electron@
// npm install --save-dev electron
// npm install --save-dev @electron-forge/cli
// npx electron-forge import
// npm run make

const { app, ipcMain, BrowserWindow } = require("electron");

let appWin;

//This function creates the window and its properties.
const createWindow = () => {
    appWin = new BrowserWindow({
        width: 1920,
        height: 1080,
        title: "Angular and Electron",
        resizable: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    appWin.loadURL(`file://${__dirname}/dist/index.html`);

    appWin.setMenu(null);

    // appWin.webContents.openDevTools();

    appWin.setOverlayIcon('./tips.ico', 'Description for overlay')

    appWin.on("closed", () => {
        appWin = null;
    });
}

// app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});

/* ipcMain is listening the "message" channel, and when the message arrives,
  it replies with "pong" */
ipcMain.on("message", (event) => {
  event.reply("reply", "pong")
});

// ipcMain.on("new-task", async (e, arg) => {
//   const newTask = new Task(arg);
//   const taskSaved = await newTask.save();
//   e.reply("new-task-created", JSON.stringify(taskSaved));
// });

// ipcMain.on("get-tasks", async (e, args) => {
//   const tasks = await Task.find();
//   e.reply("get-tasks", JSON.stringify(tasks));
// });

// ipcMain.on("delete-task", async (e, args) => {
//   const taskDeleted = await Task.findByIdAndDelete(args);
//   e.reply("delete-task-success", true);
// });

// ipcMain.on("update-task", async (e, args) => {
//   console.log(args);
//   const updatedTask = await Task.findByIdAndUpdate(
//     args._id,
//     args,
//     { new: true }
//   );
//   e.reply("update-task-success", JSON.stringify(updatedTask._id));
// });


module.exports = { createWindow };
